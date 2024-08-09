const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)
const stripe_webhook = async (req, res) => {
  const sig = req.headers["stripe-signature"]
  const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET
  let event

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret)
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object
        const { order_id } = session.metadata
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
          } catch (err) {
            res.status(500).json(err)
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

module.exports = stripe_webhook
