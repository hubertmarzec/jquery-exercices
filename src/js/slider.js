(function($) {


  //  const portfolio = [{
  // title: 'Dopolski24',
  // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // technology: {
  //   js: true,
  //   html: true,
  //   react: true
  // },
  // mainPhoto: 'http://lorempixel.com/800/600/people/9/'



  $.fn.slider = function(options) {
    const $container = $(this);
    const $leftArrow = $('<div class="slider__arrow"></div>');
    const $rightArrow = $('<div class="slider__arrow slider__arrow--right"></div>');

    const $slides = options.data.map(item => {
      const str = `
        <section class="slide">
            <div class="left">
              <h2>${item.title}</h2>
              <p>${item.description}</p>
            </div>
            <div class="right">
              <div>
                <img class="slide__image" src="${item.mainPhoto}">
              </div>
            </div>
          </section>
        `;
      return $(str);
    });
    let $activeSlide = $slides[0];
    $activeSlide.addClass('slide--active');

    function next() {
      const $next = $activeSlide.next('.slide');
      if ($next.length) {
        $activeSlide.removeClass('slide--active');
        $next.addClass('slide--active');
        $activeSlide = $next;
      }
    }

    function prev() {
      const $prev = $activeSlide.prev('.slide');
      if ($prev.length) {
        $activeSlide.removeClass('slide--active');
        $prev.addClass('slide--active');
        $activeSlide = $prev;
      }
    }

    $leftArrow.on('click', function() {
      prev();
    });

    $rightArrow.on('click', function() {
      next();
    })


    $container.html($slides);
    $leftArrow.appendTo($container);
    $rightArrow.appendTo($container);
    return this;
  };

}(jQuery));
