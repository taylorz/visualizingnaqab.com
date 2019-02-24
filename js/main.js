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
});
