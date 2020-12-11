
function change() {
    $('.link_active').removeClass('link_active').addClass('indicator');
  };

function rechange() {
    $('.indicator').removeClass('indicator').addClass('link_active');
  };

  $('.navigation a, .btnUp').click(function(){
    var elem = $(this).attr('href');
    var dist = $(elem).offset().top;
    $('html, body').animate({'scrollTop': dist}, 700);
    return false;
});