let page = document.querySelector('.body');
let button = document.querySelector('.themeButton');
let news = document.querySelector('.news');
var x = page.clientWidth;
button.onclick = function(){
    page.classList.toggle('lightTheme')
    page.classList.toggle('darkTheme')
}




if ($(window).width() <= 400) {
      $("#News").addClass("yesnews");
      $("#News").removeClass("nonews");
} 
if ($(window).width() > 400) {
      $("#News").removeClass("yesnews");
      $("#News").addClass("nonews"); 
}


$('.yesnews').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay:true, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });