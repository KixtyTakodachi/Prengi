$(document).ready(function(){
    $('.carousel').slick({
        dots:true,
        arrow: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arr_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arr_right.png"></button>'
    });
    $('.branches__carousel').slick({
        dots:true,
        arrow: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arr_left2.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arr_right2.png"></button>'
    });
});