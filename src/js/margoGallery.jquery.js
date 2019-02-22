(function($) {

    $.fn.margoGallery = function(options) {
        const self = this;
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
                hideImage();
            });


        $(document).keydown(function(e) {
            if ($backdrop.is(':hidden')) {
                return;
            }
            switch (e.which) {
                case 37: // left
                    prevImage();
                    break;

                case 39: // right
                    nextImage();
                    break;


                default:
                    return; // exit this handler for other keys
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)

        });


        const showImage = function($el) {
            const $img = $('<img/>').attr('src', $el.attr('data-url') || $el.attr('src'));
            $backdrop
                .html($img)
                .data('current', $el)
                .addClass(backdropOpenClass);

        }

        const hideImage = function() {
            $backdrop.removeClass(backdropOpenClass);
        }

        const nextImage = function() {
            console.log('self', self);
            console.log('current',$backdrop.data('current'));
            console.log('index', self.index($backdrop.data('current')));

            const $img = self.find($backdrop.data('current'));
            const $next = $img.next();
            console.log(' $next',  $next.length,  $next);
            if ($next.length) {
                showImage($next);
            }
        }

        const prevImage = function() {
            const $img = self.find($backdrop.data('current'));
            const $prev = $img.prev();
            if ($prev.length) {
                showImage($prev);
            }
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
