import { checkCardType } from "../../utils/helpers"

import { useDeleteCard } from "../../hooks/useDeleteCard"

const PaymentContent = ({ cardInfo }) => {
  const { mutate: deleteCard, isLoading } = useDeleteCard()

  const handleDelete = (cardId) => {
    deleteCard(cardId)
  }

  return (
    <div id="payMethodContent">
      {cardInfo.length === 0 ? (
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
            {cardInfo.map((data) => {
              return (
                <div class="payMethod-card">
                  <div class="payMethod-cardInfo">
                    <img
                      class="payMethod-cardType"
                      src={checkCardType(data.number)}
                      alt="Visa"
                    />
                    <p class="payMethod-cardNumber">{data.number}</p>
                  </div>
                  <button
                    class="payMethod-deleteBtn"
                    onClick={() => {
                      handleDelete(data.credit_card_id)
                    }}
                  >
                    刪除
                  </button>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default PaymentContent
