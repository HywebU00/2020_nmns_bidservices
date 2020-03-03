// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    // 廣告輪播
    $('.adSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });
    // 會員專區
    // $('.member_block .content').hide().slideDown(1000);
    $('.member_block h2').click(function() {
        $('.member_block .content').stop().slideToggle();
    })
    $('.mobile_member_btn').click(function() {
        $('.member_block .content').stop().slideToggle();
    })
    //申辦注意
    $('.application_matters .show_btn').click(function() {
        $('.application_matters .content').addClass('open')
        $(this).hide();
        $('.application_matters .hide_btn').show();
    })
    $('.application_matters .hide_btn').click(function() {
        $('.application_matters .content').removeClass('open')
        $(this).hide();
        $('.application_matters .show_btn').show();
    })
    //內頁說明區塊
    if ($('.explain .content').outerHeight() < 115) {
        $('.explain .content').addClass('little_data');
        $('.explain .show_btn').hide();
    };
    // console.log($('.explain .content').outerHeight());
    // }
    $('.explain .show_btn').click(function() {
        $('.explain .content').addClass('open')
        $(this).hide();
        $('.explain .hide_btn').show();
    })
    $('.explain .hide_btn').click(function() {
        $(".explain .content").removeClass('little_data');
        $('.explain .content').removeClass('open')
        $(this).hide();
        $('.explain .show_btn').show();
    })
    // 
});
/*-----------------------------------*/
/////////////燈箱設定/////////////
/*-----------------------------------*/
// 
$(function() {
    $('#modal1').hide(); //先隱藏視窗
    $('.modal').after('<div class="modal_overlay"></div>'); //新增透明底
    $('.modal').prepend('<button type="button" class="close">關閉</button>'); //新增關閉按鈕
    $('.modal_overlay').hide(); //隱藏透明底
    //按鈕動作
    $('#openModal').click(function(e) {
        $('.modal_overlay').fadeIn(400);
        $('.modal').fadeIn(400);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal() {
        $('#modal1').fadeOut(400);
        $('.modal_overlay').fadeOut(400);
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal .close').click(closeModal);
     $('.btn_grp .cancel').click(closeModal);
});