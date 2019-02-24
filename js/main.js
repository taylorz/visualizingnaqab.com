$('document').ready(function(){
  AOS.init({
    once: true
  });

  $("nav").find("a").click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      $("html, body").animate({
          scrollTop: $(section).offset().top
      });
  });

  var prev = 0;
  var $window = $(window);
  var nav = $("nav");

($window).scroll(function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});

});
