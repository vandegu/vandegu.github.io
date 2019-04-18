$( document ).ready(function() {

  $("#menu-drop-button").click( function() {
    $("#myDropdown").toggleClass("show");
  })

  $('body').click(function(e) {
    if ($(e.target).closest('#menu').length === 0) {
      if ($("#myDropdown").hasClass("show")) {
        console.log('CLICKED');
        $("#myDropdown").toggleClass("show");
      }
    }
  });

// Scroll-lock for h1

var stickyh1_from_top = $('.stick-lock').offset().top;

$( window ).scroll(function() {
  var scroll_from_top = $(window).scrollTop();
  if (scroll_from_top > stickyh1_from_top) {
    $('.stick-lock').addClass('sticky')
    $('#content').addClass('sticky-content')
  } else {
    $('.stick-lock').removeClass('sticky')
    $('#content').removeClass('sticky-content')
  }
});






});
