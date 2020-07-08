$(function(){

$('.header__menu-link').on('click',function(){
    $(this).toggleClass('active');

});

$('.header__slider').slick({
    infinite: true,
    dots: true,

});


  
});