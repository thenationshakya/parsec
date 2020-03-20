$(document).ready(function() {
  $(".industries-slider-content").slick({
    arrows: false
  });
  $(".industries-slider-arrow__left").click(function() {
    $(".industries-slider-content").slick("slickPrev");
  });

  $(".industries-slider-arrow__right").click(function() {
    $(".industries-slider-content").slick("slickNext");
  });

  $(".toggle-menu").click(function() {
    $(".toggle-menu").toggleClass("active");
    $("nav").toggleClass("active");
    $(".hero").toggleClass("active");
  });
});
