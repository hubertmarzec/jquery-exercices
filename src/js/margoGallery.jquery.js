(function($) {

    $.fn.margoGallery = function(options) {
        var settings = $.extend({
            itemCss: "gallery__image"
        }, options);
        
        this.each(function(){
          console.log('$(this)', $(this), settings.itemCss);
          $(this).addClass(settings.itemCss);
        });

        return this;
    };

}(jQuery));
