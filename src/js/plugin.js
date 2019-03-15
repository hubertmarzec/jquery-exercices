(function($) {

  $.fn.plugin = function(options) {
    const $container = $(this).wrap('<div classs="wrapper"/>').parent();

    const $input = $(this).clone();
    $(this).hide();

    function create($input, onAdd) {
      const $el = $input.clone().wrap('<div class="field"/>').parent();
      const $add = $('<button>+</button>')
        .on('click', function(e) {
          e.preventDefault();
          onAdd();
        });

      const $remove = $('<button>-</button>')
        .on('click', function(){
          $el.remove();
        });

      $el.append($add);
      $el.append($remove);
      return $el;
    }

    function add() {
      const $row = create($input, add);
      $container.append($row);
    }

    function init() {
      add();
    }

    init();
    return this;
  };

}(jQuery));
