$(document).ready(function () {
  const $carousel = $(".roomSlogan");
  const $container = $carousel.find(".roomSlogan__container");
  const $slides = $carousel.find(".roomSlogan__slide");
  const $indicators = $carousel.find(".roomSlogan__indicator");
  let currentIndex = 0;
  let interval;

  function showSlide(index) {
    $container.css("transform", `translateX(-${index * 50}%)`);
    $indicators.removeClass("active");
    $indicators.eq(index).addClass("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % $slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + $slides.length) % $slides.length;
    showSlide(currentIndex);
  }

  function startCarousel() {
    interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }

  function stopCarousel() {
    clearInterval(interval);
  }

  $indicators.on("click", function () {
    const index = $(this).index();
    currentIndex = index;
    showSlide(currentIndex);
    stopCarousel();
    startCarousel();
  });

  $carousel.on("mouseenter", stopCarousel).on("mouseleave", startCarousel);

  // Clone first and last slides for smooth transition
  $container.prepend($slides.last().clone());
  $container.append($slides.first().clone());
  $container.css("transform", "translateX(-50%)");

  startCarousel();
});
