const ProfileModal = ({ data, openModal, setOpenModal }) => {
  const { customer, phone, address, payment_method } = data
  console.log(payment_method)
  return (
    openModal && (
      <div class="modal">
        <div class="modal-content__profile">
          <span
            class="close-btn"
            onClick={() => {
              setOpenModal(false)
            }}
          >
            ×
          </span>
          <h2 class="modal-title">訂單詳細信息</h2>
          <div class="order-details">
            <p>
              <strong>訂購人姓名：</strong>
              {customer}
            </p>
            <p>
              <strong>電話：</strong>
              {phone}
            </p>
            <p>
              <strong>地址：</strong>
              {address}
            </p>
            <p>
              <strong>付款方式：</strong>
              {payment_method}
            </p>
          </div>
        </div>
      </div>
    )
  )
}

export default ProfileModal
