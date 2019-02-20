(function($) {

    $.fn.margoGallery = function(options) {
        const settings = $.extend({
            itemCss: "gallery__image",
            container: $('body'),
            backdropClass: 'backdrop'
        }, options);
        
        const backdropOpenClass = `${settings.backdropClass}--open`;

        const $backdrop = $("<div>abc</div>")
            .addClass(settings.backdropClass)
            .appendTo(settings.container)
            .on('click', function() {
                $(this).removeClass(backdropOpenClass);
            })


        const showImage = function($el) {
            const $img = $('<img/>').attr('src', $el.attr('data-url') || $el.attr('src'));
            $backdrop
                .html($img)
                .addClass(backdropOpenClass);

        }

        this.each(function() {
            $(this)
                .addClass(settings.itemCss)
                .on('click', function() {
                    showImage($(this));
                });
        });

        return this;
    };

}(jQuery));
