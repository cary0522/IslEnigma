$(document).ready(function () {
  const $carousel = $(".carouselContainer");
  const $slides = $(".carouselSlide");
  const slideCount = $slides.length;
  let currentIndex = 0;

  // 設置初始位置
  updateCarousel();

  // 下一張幻燈片
  function nextSlide() {
    if (currentIndex < slideCount - 3) {
      currentIndex++;
      updateCarousel();
    }
  }

  // 上一張幻燈片
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  // 更新輪播位置
  function updateCarousel() {
    const slideWidth = $slides.outerWidth(true);
    const offset = -currentIndex * slideWidth;
    $carousel.css("transform", `translateX(${offset}px)`);

    // 更新按鈕狀態
    $(".prev").prop("disabled", currentIndex === 0);
    $(".next").prop("disabled", currentIndex >= slideCount - 3);
  }

  // 綁定按鈕事件
  $(".next").click(nextSlide);
  $(".prev").click(prevSlide);

  // 點擊幻燈片顯示詳情
  $(".carouselSlide").click(function () {
    const $slide = $(this);
    $("#modalImage").attr("src", $slide.find("img").attr("src"));
    $("#modalTitle").text($slide.data("title"));
    $("#modalEnglishTitle").text($slide.data("english-title"));
    $("#modalDescription").text($slide.data("description"));
    $("#modalEquipmentUsage").text($slide.data("equipment-usage"));
    $("#modalDates").text($slide.data("dates"));
    $("#modalDetails").text($slide.data("details"));
    $("#modalLimit").text($slide.data("limit"));
    $("#modalPromoText").text($slide.data("promo-text"));

    // 處理標籤
    const tags = $slide.data("tags").split(" ");
    $("#modalTags").empty();
    tags.forEach((tag) => {
      $("#modalTags").append(`<span>${tag}</span>`);
    });

    $("#featureModal").fadeIn();
  });

  // 關閉模態框
  $(".closeModal").click(function () {
    $("#featureModal").fadeOut();
  });

  // 點擊模態框外部關閉
  $(window).click(function (event) {
    if ($(event.target).is("#featureModal")) {
      $("#featureModal").fadeOut();
    }
  });

  // 響應式處理
  $(window).resize(updateCarousel);
});
