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


// Fly-in objects on experience

$( window ).scroll(function() {
  let scroll_from_top2 = $(window).scrollTop();
  $("#skill-list div.skill-list-item").each(function (index) {
    let skills_from_top = $(this).offset().top - 600;
    if ( scroll_from_top2 > skills_from_top) {
      $(this).animate({
        left: '0px',
        opacity: '1.0',
      },600);
    };
  });
});


// typeWriter

function oneSecondFunction() {
  $('#cursor').toggleClass("invisCursor")
}

$( document ).ready(function() {
  let text = 'Andrew Vande Guchte'
  let i = 0
  let speed = 80

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("myName").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    };
  };
  typeWriter()

  $(function(){
  setInterval(oneSecondFunction, 700);
  });
});







});
