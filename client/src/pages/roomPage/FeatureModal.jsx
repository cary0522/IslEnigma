import React from "react"

const FeatureModal = ({ modal, setModal, modalData }) => {
  const {
    image,
    title,
    desc,
    en_title,
    equipment_usage,
    open_date,
    details,
    daily_limit,
    promo_text,
    tags,
  } = modalData

  return (
    <div
      id="featureModal"
      className="modal"
      style={{ display: modal ? "block" : "none" }}
    >
      <div className="modalContent">
        <span
          className="closeModal"
          onClick={() => {
            setModal(false)
          }}
        >
          &times;
        </span>
        <div className="modalInner">
          <div className="modalImage">
            <img id="modalImage" src={image} alt="特色圖片" />
          </div>
          <div className="modalDetails">
            <h2 id="modalTitle" className="modalTitle">
              {title}
            </h2>
            <h3 id="modalEnglishTitle" className="modalEnglishTitle">
              {en_title}
            </h3>
            <p id="modalDescription" className="promotionDescription">
              {desc}
            </p>

            <div id="modalTags" className="promotionTags">
              {tags}
            </div>

            <div className="promotionDates">
              <h3>詳細資訊:</h3>
              <p id="modalDates">{open_date}</p>
            </div>

            <p id="modalDetails" className="promotionDetails">
              {details}
            </p>
            <p id="modalLimit" className="promotionLimit">
              {daily_limit}
            </p>

            <p id="modalContact" className="promotionContact">
              {promo_text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureModal
