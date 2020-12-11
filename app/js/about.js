$( window ).on('load', function(){
    var photo1 = $('#photo1').offset().left;
    $("#photo2").offset(function(i,val){
        return {top:val.top, left:photo1 - 235};
    });
    var photo2 = $('#photo2').offset().left;
    $("#Krylov").offset(function(i,val){
        return {top:val.top, left:photo2 + 290};
    });
});

$(window).on('resize', function(){
    var photo1 = $('#photo1').offset().left;
    $("#photo2").offset(function(i,val){
        return {top:val.top, left:photo1 - 235};
    });
    var photo2 = $('#photo2').offset().left;
    $("#Krylov").offset(function(i,val){
        return {top:val.top, left:photo2 + 290};
    });
});