const Feature = () => {
  return (
    <div id="featureModal" class="modal">
      <div class="modalContent">
        <span class="closeModal">&times;</span>
        <div class="modalInner">
          <div class="modalImage">
            <img id="modalImage" src="" alt="特色圖片" />
          </div>
          <div class="modalDetails">
            <h2 id="modalTitle" class="modalTitle"></h2>
            <h3 id="modalEnglishTitle" class="modalEnglishTitle"></h3>
            <p id="modalDescription" class="promotionDescription"></p>

            <div id="modalTags" class="promotionTags"></div>

            <div class="promotionDates">
              <h3>詳細資訊:</h3>
              <p id="modalDates"></p>
            </div>

            <p id="modalDetails" class="promotionDetails"></p>
            <p id="modalLimit" class="promotionLimit"></p>

            <p id="modalContact" class="promotionContact"></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
