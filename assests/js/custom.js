$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
   // nav: true,
   // navText: [
   //   "<i class='fa fa-caret-left'></i>",
   //   "<i class='fa fa-caret-right'></i>"
   // ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  })

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });