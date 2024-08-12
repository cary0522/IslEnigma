const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)
const stripe_webhook_controller = async (req, res) => {
  const sig = req.headers["stripe-signature"]
  const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET
  let event

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret)
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object
        const payment_method = session.payment_method_types[0]
        const { order_id, order_info } = session.metadata

        const parsed_order_info = JSON.parse(order_info)

        console.log({
          data: {
            ...parsed_order_info,
            order_id,
            payment_method,
          },
        })
        if (order_id) {
          try {
            await prisma.customer_order.update({
              where: {
                order_id,
              },
              data: {
                status: "PAID",
              },
            })
            const info_res = await prisma.order_info.create({
              data: {
                ...parsed_order_info,
                order_id,
                payment_method,
                order_info_id: Math.round(Math.random() * 10),
              },
            })
          } catch (err) {
            console.log(err)
          }
        }

        break
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object

        console.log(`PaymentIntent ${paymentIntent.id} succeeded!`)
        break
      case "payment_intent.payment_failed":
        const paymentFailure = event.data.object
        console.log(`PaymentIntent ${paymentFailure.id} failed.`)
        break
      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    res.json({ received: true })
  } catch (err) {
    console.error(`Webhook error: ${err.message}`)
    res.status(400).send(`Webhook error: ${err.message}`)
  }
}

module.exports = stripe_webhook_controller
