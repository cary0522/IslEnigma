const PriceItem = ({ cartItems }) => {
  return (
    <div className="priceItem">
      <div className="itemTitle">
        {cartItems.room?.room_type || cartItems.ticket.type}
        <hr />
      </div>
      <div className="itemInfo">
        {cartItems.check_in_date ? (
          <>
            <p>入住日期</p>
            <p>{cartItems.check_in_date}</p>
          </>
        ) : null}
      </div>
      <div className="itemInfo">
        {cartItems.check_in_date ? (
          <>
            <p>退房日期</p>
            <p>{cartItems.check_out_date}</p>
          </>
        ) : null}
      </div>
      <div className="itemInfo">
        <p>數量</p> <p>{cartItems.quantity}</p>
      </div>
      <div className="itemInfo">
        <p>價格</p>{" "}
        <p>
          {cartItems.room?.price ||
            cartItems.ticket?.price * cartItems.quantity}
        </p>
      </div>
    </div>
  )
}

export default PriceItem
