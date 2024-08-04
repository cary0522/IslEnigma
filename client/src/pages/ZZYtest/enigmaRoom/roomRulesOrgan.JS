$(document).ready(function () {
  $(".roomRules__header").click(function () {
    $(this).parent(".roomRules__item").toggleClass("active");
    $(this).parent(".roomRules__item").siblings().removeClass("active");
  });
});
