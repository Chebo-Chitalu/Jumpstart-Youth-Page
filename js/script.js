

$(document).ready(function(){

  //navigation bar toggler
  $('#navbar-toggler').click(function(){
    $('.navbar-collapse').slideToggle(400);
  });

  // navbar bg change on scroll
  $(window).scroll(function(){
    let pos = $(window).scrollTop();
    if(pos >= 100){
      $('.navbar').addClass('cng-navbar');
    } else {
      $('.navbar').removeClass('cng-navbar');
    }
  });

  // team OwlCarousel2
  $('.team .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 2
      },
      1000:{
        items: 3
      }
    }
  });

  // faq accordion
  $('.faq-head').each(function(){
    $(this).click(function(){
      $(this).next().toggleClass('show-faq-content');
      let icon = $(this).children('span').children("i").
      attr('class');

      if(icon == "fas fa-plus"){
        $(this).children('span').html('<i class = "fas fa-minus"></i>');
      } else {
        $(this).children('span').html('<i class = "fas fa-plus"></i>');
      }
    });
  });

  // testimonial owlCarousel
  $('.testimonial .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    nav: false,
    items: 1
  })

  // timer in header
  var countDownDate = new Date("Dec 13, 2024 00:00:00").getTime();
  var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

  },1000);

});
  // Sliding text
  /*const scrollingText = document.getElementById("scrollingText");
  let scrollPosition = 0;
  const scrollSpeed = 2;*/ // Adjust the speed of scrolling

  /*function slideText() {
    scrollPosition -= scrollSpeed;
    scrollingText.style.transform = `translateX(${scrollPosition}px)`;

    if (scrollPosition <= -scrollingText.clientWidth) {
      scrollPosition = scrollingText.clientWidth;
    }

    requestAnimationFrame(slideText);
  }

  slideText();*/
