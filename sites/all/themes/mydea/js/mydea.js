(function ($) {
    $(document).ready(function () {

        $('a#magicPopUp').each(function() {
            $(this).on("click", function(e) {
                e.preventDefault();
                var box = $('#' + $(this).attr('class'));
                if(box.hasClass('servicePopHidden')) {
                    box.removeClass('servicePopHidden');
                    setTimeout(function() {
                        box.removeClass('serviceVisuallyHidden');
                    }, 20);
                }
            });
        });

        $('.popClose').each(function(e) {
            $(this).on("click", function() {
                var box = $('#' + $(this).parents('.servicesPop').attr('id'));
                box.addClass('serviceVisuallyHidden');
                    box.one('transitionend', function (e) {
                        box.addClass('servicePopHidden');
                    });
            });
        });

        /* Make background image fixed when it reaches top of page */

        //var distance = $('#block-nodeblock-3').offset().top,
        //    $window = $(window);
        //$window.scroll(function() {
        //    if($window.scrollTop() >= distance) {
        //        $('#block-nodeblock-3').css('background-attachment', 'fixed');
        //    } else {
        //        $('#block-nodeblock-3').css('background-attachment', 'inherit');
        //    }
        //});

        $('.about_section li').hover(function () {
            $(this).find('.about-image').toggleClass('test-imageHover');
           // $(this).find('.about-whiteBar').toggleClass('hideme');
        });
        $('.about_section li').mouseenter( function() {
            $(this).find('.about-text').css('opacity','1');
            $(this).find('div.about-image').css('opacity','.4');
            $(this).find('.about-whiteBar').removeClass('hideme');
            $(this).find('img').css('width','110%');
            //$(this).find('img').css({
            //    'width'     : '130%',
            //    'max-width' : 'inherit',
            //    'left'      : '50%',
            //    'transform' : 'translateX(-50%)',
            //    'position'  : 'relative'
            //
            //});
        });
        $('.about_section li').mouseleave(function () {
            $(this).find('.about-text').css('opacity','0');
            $(this).find('div.about-image').css('opacity','1');
            $(this).find('.about-whiteBar').addClass('hideme');
            $(this).find('img').css('width','100%');
            //$(this).find('img').css({
            //    'width'     : 'inherit',
            //    'max-width' : 'inherit',
            //    'left'      : 'inherit',
            //    'transform' : 'inherit',
            //    'position'  : 'inherit'
            //
            //});
        });

        $('.contactDrawerTab').on('click', function() {
            $('#block-block-10').toggleClass('contactDrawerIn');
            $('.contactDrawerContainer').toggleClass('containerShadow');
        });


    });
})(jQuery);





