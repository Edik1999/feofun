var input1 = document.getElementById('input1').oninput = function(){INPUT()};
var input2 = document.getElementById('input2').oninput = function(){INPUT()};
var textarea = document.getElementById('textarea').oninput = function(){INPUT()};
function INPUT(){
    document.getElementById("submit").classList.add('btn_rdy');
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var textarea = document.getElementById('textarea').value;
    if (input1 === "" && input2 === "" && textarea === ""){
        document.getElementById("submit").classList.remove('btn_rdy');
    }
};

$( document ).ready(function() {
  var textHeightBasic = 112;
  var titleHeightBasic = 46;
  var textHeightReal = $('.contacts .contacts_wrap .meeting_wrap .desc_wrap p').height();
  var titleHeightReal = $('.contacts .contacts_wrap .meeting_wrap .desc_wrap h3').height();
  var DeltaTextHeigt = textHeightReal - textHeightBasic;
  var DeltaTitleHeigt = titleHeightReal - titleHeightBasic;
  var btnTop = 848 + DeltaTextHeigt + DeltaTitleHeigt;
  $('.contacts .contacts_wrap .meeting_wrap .desc_wrap .desc_buttons').css('top', btnTop + 'px');
});
