const ProfileModal = ({ data, openModal, setOpenModal }) => {
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
              <strong>訂購人姓名：</strong>Terry
            </p>
            <p>
              <strong>電話：</strong>0979456123
            </p>
            <p>
              <strong>地址：</strong>台中市西屯區惠來路1段150號
            </p>
            <p>
              <strong>付款方式：</strong>信用卡
            </p>
          </div>
        </div>
      </div>
    )
  )
}

export default ProfileModal
