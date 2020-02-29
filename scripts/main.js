$(document).ready(function(){
    $("#contact").on('click', function(){
        $(".modal")[0].style.display="block";
    });
    $(".modal").on('click', function(e){
        e.stopPropagation();
        if ($(this).is(e.target)){
            $(this).hide();;
        }
    })
    $("#hamburger").on('click', function(){
        $("nav ul").slideToggle(300);
    })
    $('nav ul').on('click', 'a', function(){
        $("nav ul").slideToggle(300);
    })
});