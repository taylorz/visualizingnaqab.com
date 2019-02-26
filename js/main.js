$('document').ready(function(){
  AOS.init({
    once: true
  });

  var prev = 0;
  var $window = $(window);
  var nav = $("nav");

  $("nav").find("a").click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      $("html, body").animate({
          scrollTop: $(section).offset().top-100
      });
      nav.addClass('shown-scrolling');
      setTimeout(
        function()
        {
          nav.removeClass('shown-scrolling')
          nav.removeClass('hidden')
        }, 500);
  });

($window).scroll(function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});

});
