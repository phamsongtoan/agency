        
$(document).ready(function() {
  //MENU
  $('.toggle-menu').click(function () {
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
  });

  $(".btn-close").click(function(){
    $("#menu").removeClass("open");
    $(".toggle-menu").removeClass('active');
  });

  //TOGGLE

  $(".navbar-nav li a:after").click(function(){
    $(".navbar-nav li .menu-hidden").toggle();
  });



  // SPITLING

  console.clear();
  var s = Splitting();


    $(window).scroll(function(e) {
      const scrollTop = $(this).scrollTop();
      if (scrollTop > 30) {
          $(".heading-main").addClass("sticky")
      } else {
          $(".heading-main").removeClass("sticky")
      }
  });

  
    //SLIDE BANNER
    $('.banner-img__slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        nextArrow: false,
        prevArrow: false,
        speed: 1500,
        asNavFor: '.banner-content__slide'

    });

      //SLIDE BANNER
      $('.banner-content__slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        slidesToScroll: 1,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        nextArrow: false,
        prevArrow: false,
        asNavFor: '.banner-img__slide',
    });
    
//SLIDE PARTNER
$('.partner-slide-1').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  slidesToShow: 5,
  lazyLoad: 'ondemand',
  speed: 2100,
  asNavFor: '.partner-slide-2',

});
$('.partner-slide-2').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  slidesToShow: 5,
  lazyLoad: 'ondemand',
  speed: 1800,
  asNavFor: '.partner-slide-1',
  dots: true,
  appendDots: $('.dots-custom'),
});
$('.case-slide').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  slidesToShow: 4,
  lazyLoad: 'ondemand',
  speed: 1800,
  prevArrow: $(".btn-prev"),
  nextArrow: $(".btn-next"),
});

    // AOS
    AOS.init({
      once: false,
      duration: 1200,
      delay: 100,

    });

});


// SPITLING
    // Cắt chữ bằng Splitting.js, mỗi chữ cái sẽ nằm trong 
// thẻ span với class="char"
new Splitting({ target: ".chozui"});

// Tạo hiệu ứng chữ chuyển động bằng anime.js 
anime({
	targets: ".chozui .tdt",
	duration: 750,
	translateY: ["1.1em", 0],
	translateX: ["0.5em", 0],
	rotateZ: [180, 0],
	opacity: [0, 1],
	easing: "easeOutExpo",
	delay: (el, i) => 50 * i,
	loop: true
})



//ANIME.JS
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });






