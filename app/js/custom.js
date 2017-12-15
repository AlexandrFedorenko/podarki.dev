$(function () {
    // no dragstart img
    $("img, a").on("dragstart", function (event) {
        event.preventDefault();
    });

    //menu hover
    $(".main-menu_item--dropdown").hover(function () {
        $(this).addClass('wrap-activ');
        $('.wrap-activ .wrap-mega-menu').addClass('dropdown-active');
    });
    $(".main-menu_item--dropdown").mouseleave(function () {
        $('.wrap-activ .wrap-mega-menu').removeClass('dropdown-active');
        $(this).removeClass('wrap-activ');
    });

    //mega menu click
    $(".main-menu_item--dropdown").click(function () {
        $(this).children(".wrap-mega-menu").slideToggle();
    });

    //burger menu animation
    var clickDelay = 500,
        clickDelayTimer = null;

    $('.burger-click-region').on('click', function () {

        if (clickDelayTimer === null) {

            var $burger = $(this);
            $burger.toggleClass('active');
            $burger.parent().toggleClass('is-open');

            if (!$burger.hasClass('active')) {
                $burger.addClass('closing');
            }

            clickDelayTimer = setTimeout(function () {
                $burger.removeClass('closing');
                clearTimeout(clickDelayTimer);
                clickDelayTimer = null;
            }, clickDelay);
        }

        $(".main-menu").slideToggle();

    });
//sidebar menu click
    $(".sidebar_item--js a ").click(function (e) {
        e.preventDefault();
            $(this).siblings('.drop-sidebar').slideToggle();
    });


});

//sliders
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    focusOnSelect: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    draggable: false,
    dots: false,
    arrows: false,
    infinite: true,
    focusOnSelect: true
});

$('.prev').on('click', function () {
    $('.slider-nav').slick('slickNext');
});
$('.next').on('click', function () {
    $('.slider-nav').slick('slickPrev');
});


//slid 2

$('.slider-for2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    focusOnSelect: true,
    asNavFor: '.slider-nav2'
});
$('.slider-nav2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for2',
    draggable: false,
    dots: false,
    arrows: true,
    infinite: true,
    focusOnSelect: true
});

$('.prev2').on('click', function () {
    $('.slider-nav2').slick('slickNext');
});
$('.next2').on('click', function () {
    $('.slider-nav2').slick('slickPrev');
});

//main slider
$('.slider3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true
});

$('.prev3').on('click', function () {
    $('.slider3').slick('slickNext');
});
$('.next3').on('click', function () {
    $('.slider3').slick('slickPrev');
});




