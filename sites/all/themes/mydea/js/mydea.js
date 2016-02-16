(function ($) {
    $(document).ready(function () {

        $('.popAD').click(function (e) {
            e.preventDefault();
            var box = $('#popAD');

            if (box.hasClass('servicePopHidden')) {
                console.log("HAS IT");
                box.removeClass('servicePopHidden');
                setTimeout(function () {
                    box.removeClass('serviceVisuallyHidden');
                }, 20);
            }
        });

        $('.popClose').click(function() {

            var box = $('#popAD');

            box.addClass('serviceVisuallyHidden');
            box.one('transitionend', function (e) {
                box.addClass('servicePopHidden');
            });

        });

        /* Make background image fixed when it reaches top of page */

        var distance = $('#block-nodeblock-3').offset().top,
            $window = $(window);
        $window.scroll(function() {
            if($window.scrollTop() >= distance) {
                $('#block-nodeblock-3').css('background-attachment', 'fixed');
            } else {
                $('#block-nodeblock-3').css('background-attachment', 'inherit');
            }
        });

        $('.testimonials_section li').hover(function () {
            $(this).find('.test-image').toggleClass('test-imageHover');
            $(this).find('.test-whiteBar').toggleClass('hideme');
        });
        $('.testimonials_section li').mouseenter( function() {
            $(this).find('.test-text').css('opacity','1');
            $(this).find('div.test-image').css('opacity','.4');
            //$(this).find('img').css({
            //    'width'     : '130%',
            //    'max-width' : 'inherit',
            //    'left'      : '50%',
            //    'transform' : 'translateX(-50%)',
            //    'position'  : 'relative'
            //
            //});
        });
        $('.testimonials_section li').mouseleave(function () {
            $(this).find('.test-text').css('opacity','0');
            $(this).find('div.test-image').css('opacity','1');
            //$(this).find('img').css({
            //    'width'     : 'inherit',
            //    'max-width' : 'inherit',
            //    'left'      : 'inherit',
            //    'transform' : 'inherit',
            //    'position'  : 'inherit'
            //
            //});
        })


    });
})(jQuery);





