var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
if ((is_chrome)&&(is_safari)) { is_safari = false; }
if ((is_chrome)&&(is_opera)) { is_chrome = false; }

if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    $('.menu a').removeClass('link').addClass('link_safari');
}


$(document).ready(function() {
	$('#fullpage').fullpage({
        css3:true,
        autoScrolling: true,
        navigation: true,
        scrollBar: true,
        fitToSection: false,
        responsiveWidth: 1024,
        onLeave: function(index, nextIndex, direction){
                if (index == 3 && direction =='down') {
                    $('.help').removeClass('help_active');
                    $('#btnid2_2').removeClass('btn_active');
                } else {
                    $('.help').addClass('help_active');
                };

                if (nextIndex == 1){
                    if($('body').innerWidth() > 1023){
                        setTimeout(function(){
                            $('#tid1, #textid1, #btnid1').addClass('animate');
                            $('.firstImgs').addClass('animate_imgs');
                        },250);
                        $('#btnid2_2').css('display', 'none');
                        $('#btnid2_2').removeClass('btn_active');
                        setTimeout(function(){
                            $.fn.fullpage.moveTo(1);
                            console.log('moved to 1');
                        }, 150);
                    }
                };

                if (index == 1) {
                    if($('body').innerWidth() > 1023){
                        $('#tid1, #textid1, #btnid1, .firstImgs').removeClass('animate');
                        $('.firstImgs').removeClass('animate_imgs');
                    }
                };

                if (nextIndex == 2){
                    if($('body').innerWidth() > 1023){
                        setTimeout(function(){
                            $('#titleid2, #textid2, #btnid2, .offer').addClass('animate');
                            $('#btnid2_2').addClass('btn_active');
                            $('.secondImgs').addClass('animate_imgs');
                        },250);  
                        $('#btnid2_2').css('display', 'block');
                        var containerOffset = $('.container').offset();
                        $('#btnid2_2').offset({left: containerOffset.left});
                        setTimeout(function(){
                            $.fn.fullpage.moveTo(2);
                            console.log('moved to 2');
                        }, 150);
                    }
                };

                if (index == 2) {
                    if($('body').innerWidth() > 1023){
                        $('#titleid2, #textid2, #btnid2, .offer').removeClass('animate');
                        $('.secondImgs').removeClass('animate_imgs');
                    }
                };

                if (nextIndex == 3){
                    if($('body').innerWidth() > 1023){
                        setTimeout(function(){
                            $('#titleid3, #textid3, #btnid3').addClass('animate');
                            $('#btnid2_2').addClass('btn_active');
                            $('.thirdImgs').addClass('animate_imgs');
                            $('#btnid2_2').css('display', 'block');
                        },250);
                        setTimeout(function(){
                            $.fn.fullpage.moveTo(3);
                            console.log('moved to 3');
                        }, 150);
                    }
                };

                if (index == 3) {
                    if($('body').innerWidth() > 1023){
                        $('#titleid3, #textid3, #btnid3').removeClass('animate');
                        $('.thirdImgs').removeClass('animate_imgs');
                    }
                };

                if (nextIndex == 4){
                    $('#btnid2_2').css('display', 'none');
                    $('#btnid2_2').removeClass('btn_active');
                    var docWidth = $('body').innerWidth();
                    $('.footer_line').width(docWidth + "px");
                    var bodyOffset = $('body').offset();
                    $('.footer_line').offset({left: bodyOffset.left});
                };

                if (index == 4) {
                    
                };
        },

        afterRender: function(index){
            if($('body').innerWidth() < 1024){
                $.fn.fullpage.setAutoScrolling(false);
                $('.fourthSection .fp-tableCell').css('display', 'block');
                setTimeout(function(){
                    var FS = $('.firstSection .fp-tableCell').height();
                    var SS = $('.secondSection .fp-tableCell').height();
                    var TS = $('.thirdSection .fp-tableCell').height();
                    $('.firstSection').height(FS);
                    $('.secondSection').height(SS);
                    $('.thirdSection').height(TS);
                }, 500);
            };
            if($('body').innerWidth() < 1024){
                $('.del').css('display', 'none');
            };
            if($('body').innerWidth() > 1023){
                $('#tid1, #textid1, #btnid1').addClass('animate');
                $('.firstImgs').addClass('animate_imgs');
            }
            var sectionHeight = $('.section').innerHeight();
            $('.help').offset({top: sectionHeight - 106});
            var contOffset = $('.container').offset();
            var contOffsetLeft = contOffset.left;
            var contWidth = $('.container').innerWidth();
            var scrollOffset = contOffsetLeft + contWidth - 11;
            $('.help').offset({left: scrollOffset});
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
            $('.btnUp').on('click', function(){
                $.fn.fullpage.moveTo(1);
            });
            $('<style>.desc_link:before{width:' + contWidth + 'px}</style>').appendTo('head');
            if ($('body').innerWidth() < 625){
                var docWidth = $('body').innerWidth();
                var startWidth = 624;
                var newMargin = startWidth - docWidth;
                var margin1 = $('.thirdImgs').css('marginLeft');
                var margin2 = $('.secondImgs').css('marginLeft');
                var margin3 = $('.firstImgs').css('marginLeft');
                var numEl1 = parseInt(margin1.match(/\d+/), 10);
                var numEl2 = parseInt(margin2.match(/\d+/), 10);
                var numEl3 = parseInt(margin3.match(/\d+/), 10);
                var newNum1 = -numEl1;
                var newNum2 = -numEl2;
                var newNum3 = -numEl3;
                var styles1 = {
                    marginLeft : newNum1 - newMargin -80,
                  };
                var styles2 = {
                    marginLeft : newNum2 - newMargin -40,
                };
                var styles3 = {
                    marginLeft : newNum3 - newMargin -20,
                };
                $('.thirdImgs').css(styles1);
                $('.secondImgs').css(styles2);
                $('.firstImgs').css(styles3);
            }
        },

        afterLoad: function(anchorLink, index){
            if ($('body').innerWidth() > 1023){
                if (index === $('#fullpage .section').length){
                    $.fn.fullpage.setAutoScrolling(false);
                    console.log('FP off');
                }
            }
            // if ($('body').innerWidth() > $('body').innerHeight()){
            //     if($('body').innerWidth() < 1024){
            //         var thirdImgHeight = $('.thirdImgs').height() * 0.7;
            //         $('.thirdContent').css('marginTop', thirdImgHeight + 'px');
            //     }
            // }
            $(document).scroll(function(){
                if($('body').innerWidth() > 1023){
                    var last_section = $('#fullpage').find(".section").last();
                    var offset = last_section.offset();
                    var w = $(window);
                    if (offset.top - 1 - w.scrollTop() > 0)
                        {
                            $.fn.fullpage.setAutoScrolling(true);
                            console.log('FP on');
                        }
                }     
            });
        },

        afterResize: function(){
            var containerOffset = $('.container').offset();
            $('#btnid2_2').offset({left: containerOffset.left});
            var docWidth = $('body').innerWidth();
            $('.footer_line').width(docWidth + "px");
            var bodyOffset = $('body').offset();
            $('.footer_line').offset({left: bodyOffset.left});
            var FS = $('.firstSection .fp-tableCell').height();
            var SS = $('.secondSection .fp-tableCell').height();
            var TS = $('.thirdSection .fp-tableCell').height();
            $('.firstSection').height(FS);
            $('.secondSection').height(SS);
            $('.thirdSection').height(TS);
            var contWidth = $('.container').innerWidth();
            $('<style>.desc_link:before{width:' + contWidth + 'px}</style>').appendTo('head');
        },

    });
    
});

window.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("form");
    document.getElementById("submit").addEventListener("click", function () {
        form.submit();
    }); 
});

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