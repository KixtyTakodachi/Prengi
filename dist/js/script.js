$(document).ready(function(){
    $('.carousel').slick({
        speed:600,
        dots:true,
        arrow: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arr_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arr_right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: false
              }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true
                }
            }
        ]
    });
    $('.branches__carousel').slick({
        speed:600,
        dots:true,
        arrow: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arr_left2.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arr_right2.png"></button>',
        customPaging : function(slider, i) {
            var title = $(slider.$slides[i]).data('title');
            /* var onetitle = $('.slick-active').data('title');
            var theDiv = document.getElementById("branches__label");
            theDiv.innerHTML += onetitle; */
            return '<a class="branches__carousel__item"> '+title+' </a>' ;
        }
    });
    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.menu__list'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            })
        })
    });
    $('#branches__label').text($('.slick-active').text());
});