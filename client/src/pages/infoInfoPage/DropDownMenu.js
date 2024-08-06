
$(document).ready(function () {
    const $customDropdown = $('.customDropdown');
    const $dropdownSelected = $customDropdown.find('.dropdownSelected');
    const $dropdownOptions = $customDropdown.find('.dropdownOptions');

    // 點擊選中項時顯示/隱藏選項列表
    $dropdownSelected.on('click', function (e) {
        e.stopPropagation();
        $dropdownOptions.slideToggle(200);
    });

    // 點擊選項時更新選中項，隱藏選項列表，並跳轉到相應的連結
    $dropdownOptions.on('click', '.dropdownOption', function (e) {
        e.preventDefault(); // 防止默認的鏈接行為
        const selectedText = $(this).text();
        const selectedHref = $(this).attr('href');
        $dropdownSelected.text(selectedText);
        $dropdownOptions.slideUp(200);

        // 使用 setTimeout 確保下拉選單的動畫完成後再跳轉
        setTimeout(function () {
            window.location.href = selectedHref;
        }, 250);
    });

    // 點擊頁面其他地方時隱藏選項列表
    $(document).on('click', function () {
        $dropdownOptions.slideUp(200);
    });

    // 阻止點擊選項列表時事件冒泡到document
    $dropdownOptions.on('click', function (e) {
        e.stopPropagation();
    });

    // 僅在移動設備上初始化下拉菜單功能
    function initMobileDropdown() {
        if ($(window).width() <= 719) {
            $customDropdown.show();
        } else {
            $customDropdown.hide();
        }
    }

    // 頁面加載和窗口調整時檢查是否需要顯示下拉菜單
    initMobileDropdown();
    $(window).resize(initMobileDropdown);
});
