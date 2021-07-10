        
$(document).ready(function() {


  //   $(window).scroll(function(e) {
  //     const scrollTop = $(this).scrollTop();
  //     if (scrollTop > 40) {
  //         $(".heading-desktop").addClass("sticky")
  //     } else {
  //         $(".heading-desktop").removeClass("sticky")
  //     }
  // });

  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
  
    //SLIDE ABOUT
    $('.banner-slide__container').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: true,
        variableWidth: true,
        prevArrow: $(".banner-slide__arrows-prev"),
        nextArrow: $(".banner-slide__arrows-next"),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
            variableWidth: false,
            arrows: false,
            
          }
        },
          {
            breakpoint: 768,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1,
              variableWidth: false,
              arrows: false,
            }
          },
      ]
    });

     //
     $('.banner-blog__slide').slick({
      autoplay: false,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
      slidesToShow: 1,
      arrows: false,
      dots: true,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          variableWidth: false,
          arrows: false,
          
        }
      },
        {
          breakpoint: 768,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
            variableWidth: false,
            arrows: false,
          }
        },
    ]
  });

    $('.product-news__slide').slick({
      autoplay: false,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
      slidesToShow: 1,
      arrows: false,
      dots: true,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          variableWidth: false,
          arrows: false,
          
        }
      },
        {
          breakpoint: 768,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
            variableWidth: false,
            arrows: false,
          }
        },
    ]
  });

///SLIDE HOT

  $('.product-hot__content').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: true,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    prevArrow: $(".product-hot__arrows-prev"),
    nextArrow: $(".product-hot__arrows-next"),
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: false,
        arrows: false,
        
      }
    },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          variableWidth: false,
          arrows: false,
        }
      },
  ]
});

//FEEDBACK
$('.section-feedback__slide').slick({
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToScroll: 2,
  slidesToShow: 2,
  arrows: false,
  dots: true,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToScroll: 1,
      slidesToShow: 2,
      variableWidth: false,
      arrows: false,
      
    }
  },
    {
      breakpoint: 768,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: false,
        arrows: false,
      }
    },
]
});

//DETAIL 
$('.content-slide__show').slick({
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  slidesToShow: 1,
  arrows: false,
  dots: false,
  fade: true,
  focusOnSelect: true,
  centerMode: true,
  cssEase: 'linear',
  asNavFor: '.content-slide__scroll',
});

$('.content-slide__scroll').slick({
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  slidesToShow: 4,
  arrows: true,
  dots: false,
  centerMode: true,
  vertical: true,
  verticalSwiping: true,
  prevArrow: $(".scroll-prev"),
  nextArrow: $(".scroll-next"),
  asNavFor: '.content-slide__show',
  focusOnSelect: true,
  // mobileFirst: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToScroll: 1,
        slidesToShow: 4,
        variableWidth: false,
        arrows: false,
        
      }
    },
    {
      breakpoint: 1366,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToScroll: 1,
        slidesToShow: 4,
        variableWidth: false,
        arrows: false,
        
      }
    },
  
  {
    breakpoint: 1024,
    settings: {
      vertical: false,
      verticalSwiping: false,
      slidesToScroll: 1,
      slidesToShow: 4,
      variableWidth: false,
      arrows: false,
      
    }
  },
  {
    breakpoint: 768,
    settings: {
      vertical: false,
      verticalSwiping: false,
      slidesToScroll: 1,
      slidesToShow: 4,
      variableWidth: false,
      arrows: false,
    }
  },

]
});


  //ranger

  var slidertall = document.getElementById("myRangetall");
  var outputtall = document.getElementById("tall");
  outputtall.innerHTML = slidertall.value;

  slidertall.oninput = function() {
    outputtall.innerHTML = this.value;
  }

  //ranger

  var sliderheight = document.getElementById("myRangeheight");
  var outputheight = document.getElementById("height");
  outputheight.innerHTML = sliderheight.value;

  sliderheight.oninput = function() {
    outputheight.innerHTML = this.value;
  }


    
    //AOS
    // AOS.init({
    //   // once: true
    // });

  



});






