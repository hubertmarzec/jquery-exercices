(function ($) {

    $.fn.pSlide = function (options) {
        const $clickedOn = $(this);      //Clicked-on object.

        $('.accordion__details', $clickedOn).each(function () {

            const $sharedSelector = $(this);  //Represents each object with specified selector in common.
            const $toSlide = $('p', $sharedSelector);             //  An element to be showed.        

            $('.accordion__summary', $sharedSelector).on('click', function () {
                $clickedOn.find('p').not($toSlide).slideUp();
                $toSlide.slideToggle();
            });
        })
        return this;
    };

}(jQuery));