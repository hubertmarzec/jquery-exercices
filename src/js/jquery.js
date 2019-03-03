$(document).ready(function () {


    /*     $(".accordion__summary").on("click",
            function () {
                $("p").hide();
                //$(this).next().show("slow");
                $(this).next().toggle();
    
            });
    
     */    // Does't work with slideDown!!!
    /*(function ($) {
        $.fn.slide = function (options) {

            //$("p").hide();

            var defaults = {
                duration: 400;
                easing: swing;
            };

            var settings = $.extend({}, defaults, options);

            return $(this).next().slideToggle(options);
        }
    });

    $(".accordion__summary").on("click", slide, function () {
        $(this).css("border: 1px solid red;");
    });
    */

    $.fn.pSlide = function () {

        $(this).on("click",
            function () {
                $("p").hide();
                //$(this).next().show("slow");
                $(this).next().toggle();

            });
    };
    $(".accordion__summary").pSlide();
});