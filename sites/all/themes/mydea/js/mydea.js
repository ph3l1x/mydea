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

        })

    });
})(jQuery);





