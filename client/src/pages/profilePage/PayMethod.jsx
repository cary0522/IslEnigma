import { payMethodData } from "./data/orderData"
const PayMethod = () => {
  return (
    <>
      <div class="modal" id="addPayMethodModal">
        <div class="modal-content">
          <span class="close-btn">×</span>
          <h2 class="modal-title">新增付款方式</h2>
          <div class="payMethod-form">
            <div>
              <label>信用卡號碼</label>
              <input
                type="text"
                id="cardNumber"
                class="memberInput-field"
                maxlength="19"
                pattern="\d{4}-\d{4}-\d{4}-\d{4}"
              />
            </div>
            <div>
              <label>有效日期</label>
              <input
                type="month"
                id="expiryDate"
                class="memberInput-field"
                min="2024-08"
              />
            </div>
            <div>
              <label>CVV</label>
              <input
                type="text"
                id="cvv"
                class="memberInput-field"
                maxlength="3"
                pattern="\d{3}"
              />
            </div>
            <div class="modal-errorMessage"></div>
            <button type="button" id="submitPayMethod" class="submit-btn">
              確認新增
            </button>
          </div>
        </div>
      </div>
      <div className="payMethod-addBtnDiv">
        <button className="payMethod-addBtn">新增付款方式</button>
      </div>
      <div id="payMethodContent">
        {payMethodData.length === 0 ? (
          <div class="none-container">
            <img
              class="none-picture"
              src="../../assets/image/image 98.png"
              alt="PayMethod Image"
            />
            <p id="none-text">沒有任何付款方式</p>
            <button
              class="submit-btn"
              id="addPayMethod"
              onclick="addPayMethod()"
            >
              新增付款方式
            </button>
          </div>
        ) : (
          <>
            <div class="payMethod-container">
              {payMethodData.map((data) => {
                return (
                  <div class="payMethod-card">
                    <div class="payMethod-cardInfo">
                      <img
                        class="payMethod-cardType"
                        src="../../assets/image/visa.svg"
                        alt="Visa"
                      />
                      <p class="payMethod-cardNumber">{data.number}</p>
                    </div>
                    <button class="payMethod-deleteBtn">刪除</button>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default PayMethod
