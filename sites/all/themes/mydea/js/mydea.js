(function($){

    $(document).ready(function() {

        var width = $(window).width(),
            popContentAD = $('#popAD').html();



        if(width <= 1200) {
            console.log('under 1200');
        }

        $('a').webuiPopover({
            trigger: 'click',
            animation: 'pop',
            placement: 'auto',
            arrow: 'true',
            closeable: 'true',
            content: popContentAD
        });
    });

})(jQuery);





