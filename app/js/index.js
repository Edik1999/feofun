
$(window).scroll(function(){
    // $('.container div .help').removeClass('help_active');
    $('.container .section a').removeClass('btn_animate');
    $('.container .section').addClass('hiddenSection');
    $('.container .section a').removeClass('btn1_animate');
    $('.container .section[id="id4"]').removeClass('hiddenSection');
    if($('.container .section[id="id4"]').offset().top - 100 < $(window).scrollTop()){
        $('.help').removeClass('help_active');
    } else {
        $('.help').addClass('help_active');
    }
});

$(window).scroll(_.debounce( function(){
    $('.section[id]').each(function(){
        var id = $(this).attr('id');
        if($(this).offset().top - 100 < $(window).scrollTop()){
            if($('.navigation a[href="#'+id+'"]').hasClass("nav_active")){
                $('.container .firstSection').removeClass('hiddenSection');
                // $('.container div .help').removeClass('help_active');
                // $('.container div .help[id="h'+id+'"]').addClass('help_active');
                $('.container .section a').removeClass('btn_animate');
                $('.container .section a[id="b'+id+'"]').addClass('btn_animate');
                $('.container .section h1, .container .section h2').removeClass('title_animate');
                $('.container .section h1[id="t'+id+'"], .container .section h2[id="title'+id+'"]').addClass('title_animate');
                $('.container .section p').removeClass('text_animate');
                $('.container .section p[id="text'+id+'"]').addClass('text_animate');
                $('.container .section a').removeClass('btn1_animate');
                $('.container .section a[id="btn'+id+'"]').addClass('btn1_animate');
            } else {
                $('.container .section').removeClass('hiddenSection');
                $('.navigation a[href="#'+id+'"]').addClass('nav_animate').siblings().removeClass('nav_active nav_animate');
                // $('.container div .help').removeClass('help_active');
                // $('.container div .help[id="h'+id+'"]').addClass('help_active');
                $('.container .section a').removeClass('btn_animate');
                $('.container .section a[id="b'+id+'"]').addClass('btn_animate');
                $('.container .section h1, .container .section h2').removeClass('title_animate');
                $('.container .section h1[id="t'+id+'"], .container .section h2[id="title'+id+'"]').addClass('title_animate');
                $('.container .section p').removeClass('text_animate');
                $('.container .section p[id="text'+id+'"]').addClass('text_animate');
                $('.container .section a').removeClass('btn1_animate');
                $('.container .section a[id="btn'+id+'"]').addClass('btn1_animate');
            }
        }
    });
}, 50));

window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tid1").classList.add('title_animate');
    document.getElementById("textid1").classList.add('text_animate');
    document.getElementById("btnid1").classList.add('btn1_animate');
    var form = document.getElementById("form");
    document.getElementById("submit").addEventListener("click", function () {
        form.submit();
    }); 
});