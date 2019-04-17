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








});
