$( window ).on('load', function(){
    if ($('body').innerWidth() > 1023){
    var photo1 = $('#photo1').offset().left;
    $("#photo2").offset(function(i,val){
        return {top:val.top, left:photo1 - 235};
    });
    var photo2 = $('#photo2').offset().left;
    $("#Krylov").offset(function(i,val){
        return {top:val.top, left:photo2 + 290};
    }); 
    }
});

$(window).on('scroll', function(){
    if ($('body').innerWidth() > 1023){
        var bodyHeight = $('body').innerHeight();
        var customTolerance = bodyHeight / 4 * 3;
        $( 'div.mediaBuyingTeam_content' ).isInViewport({ tolerance: customTolerance }).css({ "opacity": "1", "transform": "translateY(0px)" });
        $( 'div.mediaBuyingTeam_pic' ).isInViewport({ tolerance: customTolerance }).css({ "opacity": "1", "transform": "translateY(0px)" });
        $( 'p.aboutUs_Krylov-text' ).isInViewport({ tolerance: customTolerance }).css({ "opacity": "1", "transform": "translateY(0px)" });
        $( 'img#photo2' ).isInViewport({ tolerance: customTolerance }).css({ "opacity": "1", "transform": "translateY(0px)" });
        $( 'div.aboutUs_Krylov-wrap' ).isInViewport({ tolerance: customTolerance }).css({ "opacity": "1", "transform": "translateX(0px)" });
        var photo1 = $('#photo1').offset().left;
        $("#photo2").offset(function(i,val){
            return {top:val.top, left:photo1 - 235};
        });
        var photo2 = $('#photo2').offset().left;
        $("#Krylov").offset(function(i,val){
            return {top:val.top, left:photo2 + 290};
        });
    };
});


$(window).on('resize', function(){
    if ($('body').innerWidth() > 1023){
    var photo1 = $('#photo1').offset().left;
    $("#photo2").offset(function(i,val){
        return {top:val.top, left:photo1 - 235};
    });
    var photo2 = $('#photo2').offset().left;
    $("#Krylov").offset(function(i,val){
        return {top:val.top, left:photo2 + 290};
    });
    }
});