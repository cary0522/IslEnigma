// 確保 jQuery 已載入
if (typeof jQuery == "undefined") {
  console.error("錯誤：jQuery 未載入！");
} else {
  console.log("jQuery 已成功載入");
}

// 確保 jQuery UI 已載入
if (typeof jQuery.ui == "undefined") {
  console.error("錯誤：jQuery UI 未載入！");
} else {
  console.log("jQuery UI 已成功載入");
}

$(document).ready(function () {
  console.log("DOM 已完全載入");

  let checkInDate, checkOutDate;

  // 初始化日曆
  $("#reservationCalendar").datepicker({
    numberOfMonths: 1,
    dateFormat: "yy-mm-dd",
    minDate: 0,
    beforeShowDay: function (date) {
      const string = jQuery.datepicker.formatDate("yy-mm-dd", date);
      const isCheckIn = checkInDate && string === checkInDate;
      const isCheckOut = checkOutDate && string === checkOutDate;
      const isInRange =
        checkInDate &&
        checkOutDate &&
        date >= new Date(checkInDate) &&
        date <= new Date(checkOutDate);

      return [
        true,
        isCheckIn
          ? "check-in"
          : isCheckOut
          ? "check-out"
          : isInRange
          ? "in-range"
          : "",
      ];
    },
    onSelect: function (dateText, inst) {
      if (!checkInDate || (checkInDate && checkOutDate)) {
        checkInDate = dateText;
        checkOutDate = null;
        $("#checkInDate").val(dateText);
        $("#checkOutDate").val("");
      } else {
        if (new Date(dateText) < new Date(checkInDate)) {
          checkOutDate = checkInDate;
          checkInDate = dateText;
          $("#checkInDate").val(dateText);
          $("#checkOutDate").val(checkOutDate);
        } else {
          checkOutDate = dateText;
          $("#checkOutDate").val(dateText);
        }
      }
      $(this).datepicker("refresh");
      updateTotalPrice();
      console.log(
        "日期已更新 - 入住日期:",
        checkInDate,
        "退房日期:",
        checkOutDate
      );
    },
  });

  // 打開模態框
  $(".primaryButton").on("click", function () {
    if ($(this).text().includes("快速預約")) {
      $("#quickReservationModal").fadeIn();
      console.log("模態框已打開");
    }
  });

  // 關閉模態框
  $(".closeQuickModal").click(function () {
    $("#quickReservationModal").fadeOut();
    console.log("模態框已關閉");
  });

  // 增加/減少按鈕功能
  $(".increase, .decrease").click(function () {
    var input = $(this).siblings("input");
    var value = parseInt(input.val());
    if ($(this).hasClass("increase")) {
      value = value < 10 ? value + 1 : 10;
    } else {
      value = value > 0 ? value - 1 : 0;
    }
    input.val(value);
    updateTotalPrice();
    console.log("數量已更新:", value);
  });

  // 日期輸入框點擊時打開日曆
  $("#checkInDate, #checkOutDate").click(function () {
    $("#reservationCalendar").datepicker("show");
    console.log("日曆已顯示");
  });

  // 更新總價
  function updateTotalPrice() {
    if (checkInDate && checkOutDate) {
      var nights = Math.ceil(
        (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)
      );
      var bedCount = parseInt($("#bedCount").val()) || 0;
      var guestCount = parseInt($("#guestCount").val()) || 0;
      var basePrice = 18000; // 基礎價格，根據需要調整
      var totalPrice = nights * basePrice + (bedCount * 500 || 1);
      $("#totalPriceInput").val(totalPrice);
      console.log("總價已更新:", totalPrice);
    }
  }

  // 監聽輸入變化以更新總價
  $("#bedCount, #guestCount").on("input", updateTotalPrice);

  // 房型下拉選單功能
  const $selectRoomTypeBtn = $("#selectRoomTypeBtn");
  const $dropdownMenu = $(".dropdownMenu");

  $selectRoomTypeBtn.on("click", function () {
    $(this).toggleClass("active");
    $dropdownMenu.slideToggle(300);
    console.log("房型下拉選單已切換");
  });

  $dropdownMenu.on("click", "li", function () {
    const selectedText = $(this).text();
    const selectedValue = $(this).data("value");
    $selectRoomTypeBtn
      .text(selectedText)
      .append('<i class="fas fa-chevron-down"></i>');
    $dropdownMenu.slideUp(300);
    $selectRoomTypeBtn.removeClass("active");
    console.log("已選擇房型:", selectedValue);
  });

  $(document).on("click", function (event) {
    if (!$(event.target).closest(".roomTypeDropdown").length) {
      $dropdownMenu.slideUp(300);
      $selectRoomTypeBtn.removeClass("active");
    }
  });

  // 初始化日曆

  // 購物車確認功能
  const popup = document.getElementById("cartConfirmationPopup");
  const addToCartBtn = document.getElementById("searchResults");
  const goToCartBtn = document.getElementById("goToCartBtn");
  const continueShoppingBtn = document.getElementById("continueShoppingBtn");
  const roomTypeNameSpan = document.getElementById("roomTypeName");
  const checkInDateSpan = document.getElementById("checkInDate");
  const checkOutDateSpan = document.getElementById("checkOutDate");

  // 加入購物車按鈕點擊事件
  $("#searchResults").click(function () {
    console.log("加入購物車按鈕已點擊");

    // 獲取房型
    const roomType =
      $(".roomTypeSelect").val() ||
      $("#selectRoomTypeBtn").text().trim() ||
      "未選擇房型";
    console.log("選擇的房型:", roomType);

    // 使用全局變數中的日期
    console.log("入住日期:", checkInDate);
    console.log("退房日期:", checkOutDate);

    if (roomType !== "未選擇房型" && checkInDate && checkOutDate) {
      addToCart(roomType, checkInDate, checkOutDate);
    } else {
      let missingInfo = [];
      if (roomType === "未選擇房型") missingInfo.push("房型");
      if (!checkInDate) missingInfo.push("入住日期");
      if (!checkOutDate) missingInfo.push("退房日期");
      alert("請先填寫以下必要資訊：" + missingInfo.join(", "));
      console.log("資訊不完整，無法加入購物車");
    }
  });

  function addToCart(roomType, inDate, outDate) {
    // 與 console 輸出相同格式的字符串
    const cartMessage = `已將 ${roomType} 加入購物車，入住日期：${inDate}，退房日期：${outDate}`;
    console.log(cartMessage);

    // 更新彈出框的內容
    $("#roomTypeName").closest("p").text(cartMessage);

    // 確保彈出框可見
    popup.style.display = "flex";
    popup.classList.add("active");

    console.log("彈出框應該已經顯示");
  }

  goToCartBtn.addEventListener("click", function () {
    window.location.href = "./cart";
    console.log("正在前往購物車頁面");
  });

  continueShoppingBtn.addEventListener("click", function () {
    popup.style.display = "none";
    popup.classList.remove("active");
    console.log("繼續購物，彈出框已關閉");
  });

  // 點擊彈出框外部關閉彈出框
  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
      popup.classList.remove("active");
      console.log("點擊外部，彈出框已關閉");
    }
  });

  console.log("所有功能初始化完成");
});
