$(document).ready(function() {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.back-to-top').show();
    } else {
      $('.back-to-top').hide();
    }
  });

  $('.back-to-top').click(function() {
    $('body').animate({scrollTop : 0});
  });

});
