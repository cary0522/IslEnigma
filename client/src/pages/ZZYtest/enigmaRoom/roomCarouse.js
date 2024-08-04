$(document).ready(function () {
  // 房型圖片數據
  const roomImages = {
    1: [
      "./public/03rooms/room (26).png",
      "./public/03rooms/room (12).jpeg",
      "./public/03rooms/room (32).png",
    ],
    2: [
      "./public/03rooms/room (13).jpg",
      "./public/03rooms/room (10).jpeg",
      "./public/03rooms/room (24).jpeg",
    ],
    3: [
      "./public/03rooms/room (7).png",
      "./public/03rooms/room (15).jpeg",
      "./public/03rooms/room (23).jpeg",
    ],
    4: [
      "./public/03rooms/room (1).jpeg",
      "./public/03rooms/room (47).png",
      "./public/03rooms/room (29).png",
    ],
  };

  // 初始化每個房型的輪播
  $(".roomCard").each(function () {
    const roomType = $(this).data("room-type");
    const $carousel = $(this).find(".roomCarousel");
    const $indicators = $(this).find(".imageIndicators");

    // 添加圖片到輪播
    roomImages[roomType].forEach((src, index) => {
      $carousel.append(
        `<img src="${src}" alt="房型 ${roomType} 圖片 ${index + 1}" ${
          index === 0 ? 'class="active"' : ""
        }>`
      );
    });

    // 添加導航按鈕
    $carousel.after(
      '<div class="carouselNav"><button class="prev">&lt;</button><button class="next">&gt;</button></div>'
    );

    // 更新指示器
    $indicators.html(
      roomImages[roomType]
        .map(
          (_, index) => `<span ${index === 0 ? 'class="active"' : ""}></span>`
        )
        .join("")
    );
  });

  // 輪播功能
  $(".roomCard").each(function () {
    const $carousel = $(this).find(".roomCarousel");
    const $images = $carousel.find("img");
    const $indicators = $(this).find(".imageIndicators span");
    const $prevBtn = $(this).find(".carouselNav .prev");
    const $nextBtn = $(this).find(".carouselNav .next");
    let currentIndex = 0;

    function showImage(index) {
      $images.removeClass("active").eq(index).addClass("active");
      $indicators.removeClass("active").eq(index).addClass("active");
    }

    $nextBtn.click(function () {
      currentIndex = (currentIndex + 1) % $images.length;
      showImage(currentIndex);
    });

    $prevBtn.click(function () {
      currentIndex = (currentIndex - 1 + $images.length) % $images.length;
      showImage(currentIndex);
    });

    $indicators.click(function () {
      currentIndex = $(this).index();
      showImage(currentIndex);
    });
  });
});
