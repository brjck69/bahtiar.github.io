$(document).ready(function(){
  $(".loading").delay(1000).fadeOut('slow');
})

$(window).scroll(function() {    

  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
      $("header .bunglonn").addClass("bunglon");
  } else {
      $("header .bunglonn").removeClass("bunglon")    
  }
});

function expand(){
  $("header .navbar .menu").toggleClass("dalanliyane");
};
$("header .navbar .menu-toggler").on('click', expand);

$(document).ready(function(){
  $('.menu-toggler').click(function(){
    $(this).toggleClass("brjck");
  });
});

$(document).ready(function(){
  $("header .navbar .menu .navheader a, header .teks a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

AOS.init();

window.addEventListener('scroll', function(){
  var scroll = this.document.querySelector('.back-to-up');
  scroll.classList.toggle("scrolll" , window.scrollY > 500)
})

function backTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}