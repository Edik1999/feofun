
function change() {
    $('.link_active').removeClass('link_active').addClass('indicator');
  };

function rechange() {
    $('.indicator').removeClass('indicator').addClass('link_active');
  };

  $('.btnUp').click(function(){
    var elem = $(this).attr('href');
    var dist = $(elem).offset().top;
    $('html, body').animate({'scrollTop': dist}, 700);
    return false;
});

$('.burger').on('click', function(){
  if ($('.burger').hasClass('active')){
      $('.menu').removeClass('d-none');
      $('.menu').addClass('d-block');
      $('.burger').removeClass('active')
      $('.header').addClass('header_active');
  } else{
      $('.burger').addClass('active');
      $('.menu').addClass('d-none');
      $('.menu').removeClass('d-block');
      $('.header').removeClass('header_active');
  }
});

if($('body').innerWidth() < 1024){
  $('.publishing #parentDel').unwrap();
  $('.del').css('display', 'none');
}
