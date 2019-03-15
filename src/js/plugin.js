(function($) {

  $.fn.plugin = function(options) {
    const $container = $(this).wrap('<div classs="wrapper"/>').parent();

    const $input = $(this).clone();
    $(this).hide();

    function create($input, onAdd, flags = { remove: true }) {
      const $el = $input.clone().wrap('<div class="field"/>').parent();
      const $add = $('<button class="add">+</button>')
        .on('click', function(e) {
          e.preventDefault();
          onAdd();
        });

      const $remove = $('<button class="remove">-</button>')
        .on('click', function(e) {
          e.preventDefault();
          $el.hide();
        });

      $el.append($add);
      $el.append($remove);
      if (!flags.remove) {
        $remove.hide();
      }
      return $el;
    }

    function add() {
      const $fields = $('> .field', $container);
      const count = $fields.length; 
      if (count > 0) {
  
        $fields.first().find('button.remove').show();
        $fields.find('button.add').hide();
      } 
      const $row = create($input, add, {remove : count > 0});
      $container.append($row);
    }

    function init() {
      add();
    }

    init();
    return this;
  };

}(jQuery));
