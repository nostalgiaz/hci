(function () {
  "use strict";

  var $menu = $('#menu')
    , $open = $('#open');

  $open.click(function () {
    $menu.toggleClass('menu-close menu-open');
  });

  $('.histogram-bar').each(function () {
    var $this = $(this);
    $this.width($this.data('val') + '%');
  });
})();