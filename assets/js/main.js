$(document).ready(function () {
  // Counter 
  $(function () {
    $('.count-num').rCounter({
      duration: 30
    });
  });
  // carosel slider
  $(".sliders").owlCarousel({
    'items': 1,
    'loop': true,
    'autoplay': true,
  });
  // Testimonial active
  $(".testimonials").owlCarousel({
    'items': 3,
    'loop': true,
    'autoplay': true,
    'margin': 30,
    'center': true,
    responsive:{
      0:{
        items: 1
      }, 
      700:{
        items: 2,
        'center': false,

      }, 
      992:{
        items: 3
      },
    }
  });

  var $grid = $('.portfolio-items').isotope();
    // filter items on menu click
    $('.portfolio').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    // menu active color

     $('.portfolio').on( 'click', 'li', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

});
// preloader

$(window).on('load', function(){
  $(".preloader").fadeOut();
})



//Check to see if the window is top if not then display button
$('#scroll').hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('#scroll').fadeIn();
  } else {
    $('#scroll').fadeOut();
  }
});

//Click event to scroll to top
$('#scroll').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 800);
  return false;
});

