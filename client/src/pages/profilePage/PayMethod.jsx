import { payMethodData } from "./data/orderData"
const PayMethod = () => {
  return (
    <div id="payMethodContent">
      {payMethodData.length === 0 ? (
        <div class="none-container">
          <img
            class="none-picture"
            src="../../assets/image/image 98.png"
            alt="PayMethod Image"
          />
          <p id="none-text">沒有任何付款方式</p>
          <button class="submit-btn" id="addPayMethod" onclick="addPayMethod()">
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
  )
}

export default PayMethod
