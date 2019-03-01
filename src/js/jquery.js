$(document).ready(function () {


    $(".accordion__summary").on("click",
        function () {
            $("p").hide();
            $(this).next().show("slow");
            //$(this).next().slideToggle();

        });
});
// Does't work with slideDown!!!
