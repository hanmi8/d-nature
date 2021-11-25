$(function () {
    $('a').click(function (e) {
        if ($(e.target).attr('href') === '#') {
            e.preventDefault()
        }
    })
    if ($(window).width() > 769) {
        console.log('769')
        // menu hover
        $('.gnb').children('li').children('a').click(function (e) {
            e.preventDefault();
            $('.menu-hover-box').stop().slideDown(200)
            $('.sub-menu').stop().slideDown(200)
            setTimeout(function () {
                $('.content-header').css('visibility', 'hidden')
            }, 200)
        })
        $(document).click(function (e) {
            if (!$(e.target).parents().hasClass('gnb') &&
                !$(e.target).hasClass('menu-hover-box') &&
                !$(e.target).hasClass('nav-bar') &&
                !$(e.target).parents().hasClass('nav-bar')
            ) {
                $('.menu-hover-box').stop().slideUp(200)
                $('.sub-menu').stop().slideUp(200)
                $('.content-header').css('visibility', '')
            }
        })
    }


    // scroll 이동 시 pager on
    var $menu = $('.page-nav li a'),
        $contents = $('.section');

    // 해당 섹션으로 스크롤 이동
    $('.page-nav li a').click(function() {
        var indicatorID = $(this).attr('href')
        $('html, body').stop().animate({scrollTop: $(indicatorID).offset().top}, 200);
    })

    // menu class 추가
    $(window).scroll(function () {
        var scltop = $(window).scrollTop();
        $.each($contents, function (idx, item) {
            var $target = $contents.eq(idx),
                i = $target.index(),
                targetTop = $target.offset().top;
            if (targetTop <= scltop) {
                $menu.removeClass('on');
                $menu.eq(idx - 1).addClass('on');
            }
            if (!(200 <= scltop)) {
                $menu.removeClass('on');
            }
        })
    });


    // tabs
    $('.tabs').find('a').click(function (e) {
        e.preventDefault();
        var tabID = $(this).attr('href')
        $(this).parent('li').siblings().removeClass('on')
        $(this).parent('li').addClass('on')
        $('.tab-contents').removeClass('on')
        $(tabID).addClass('on')
    })

    $('body').append('<div class="toTop"><i class="fas fa-arrow-up"></i></div>');


    $('.toTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 400);
        return false;
    });

    $('.modalCall').click(function () {
        var modalID = $(this).attr('name');
        $('body').css('overflow', 'hidden');
        $('#' + modalID).show();
        // if($(window).height() < 768) {
        // }
        $('#' + modalID + ' .modal-body').css('max-height',
            $(window).height()
            - $('#' + modalID + ' .modal-header').outerHeight()
            // - $('#' + modalID + ' .modal-footer').outerHeight()
            - 200);
    })
    $('.modal-close').click(function () {
        $('body').css('overflow', '');
        $(this).parents('.modal').hide();
    })

    if ($(window).width() < 769) {
        $('.nav-bar').click(function () {
            $(this).toggleClass('on')
            $('.top').toggleClass('mobile-view')
            $('.menu-hover-box').toggleClass('mobile')
            if ($(this).hasClass('on')) {
                $('.top').css('height', $(window).height())
                $('body').css('overflow', 'hidden');
                $('.wrapper').css('overflow', 'hidden');
            } else {
                $('.top').css('height', '')
                $('body').css('overflow', '');
                $('.wrapper').css('overflow', '');
            }
        })
        $('.gnb').children('li').children('a').click(function (e) {
            e.preventDefault();
            $('ul.sub-menu').slideUp(200)
            $(this).next('ul').slideToggle(200)
        })
    }


})
