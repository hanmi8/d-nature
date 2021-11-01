$(function(){
    $('a').click(function(e){
        if($(e.target).attr('href') === '#'){
            e.preventDefault()
        }
    })

    // menu hover
    $('.gnb').children('li').children('a').click(function(e){
        e.preventDefault();
        $('.menu-hover-box').stop().slideDown(200)
        $('.sub-menu').stop().slideDown(200)
    })
    $(document).click(function(e){
        if(!$(e.target).parents().hasClass('gnb') &&
            !$(e.target).hasClass('menu-hover-box')
        ){
            $('.menu-hover-box').stop().slideUp(200)
            $('.sub-menu').stop().slideUp(200)
        }
    })

    $('.page-nav').find('a').click(function(){
        var indicator = $(this).attr('href')
        $('html, body').stop().animate({
            scrollTop : $(indicator).offset().top
        }, 400)
    })

    // tabs
    $('.tabs').find('a').click(function(e){
        e.preventDefault();
        var tabID = $(this).attr('href')
        $(this).parent('li').siblings().removeClass('on')
        $(this).parent('li').addClass('on')
        $('.tab-contents').removeClass('on')
        $(tabID).addClass('on')
    })

    $('body').append('<div class="toTop"><i class="fas fa-arrow-up"></i></div>');


    $('.toTop').click(function(){
        $('html, body').animate({scrollTop:0},400);
        return false;
    });

    $('.modalCall').click(function(){
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
    $('.modal-close').click(function(){
        $('body').css('overflow', '');
        $(this).parents('.modal').hide();
    })



})
