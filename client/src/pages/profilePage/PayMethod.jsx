import { useState } from "react"
import AddCardModal from "./AddCardModal"

import { useCardInfo } from "../../hooks/useCardInfo"
import PaymentContent from "./PaymentContent"

const PayMethod = () => {
  const { data: cardInfo, isLoading } = useCardInfo()

  const [openModal, setOpenModal] = useState(false)

  if (isLoading) return <div>Loading...</div>
  console.log(cardInfo)

  return (
    <>
      {/* 新增卡號彈出視窗 */}
      {openModal && <AddCardModal setOpenModal={setOpenModal} />}
      <div className="payMethod-addBtnDiv">
        <button
          className="payMethod-addBtn"
          onClick={() => {
            setOpenModal(true)
          }}
        >
          新增付款方式
        </button>
      </div>
      <PaymentContent cardInfo={cardInfo} />
    </>
  )
}

export default PayMethod
