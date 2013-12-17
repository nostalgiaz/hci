(function () {
  "use strict";

  var $skills = $('#skills')
    , $menu = $('#menu')
    , $open = $('#open');

  $open.click(function () {
    $menu.toggleClass('menu-close menu-open');
  });

  $('.histogram-bar').each(function () {
    var $this = $(this);
    $this.width($this.data('val') + '%');
  });

  $skills.find('.fa-star').on('click', function () {
    var $this = $(this)
      , value = $this.data('name')
      , el = '<h5 data-time="now" data-name="' + value + '"><strong>Camillo Ferrari</strong> ha confermato <strong>' + value + '</strong><em>23 dicembre 2013</em></h5>'
      , $endorsement = $open.find('span')
      , $endorsementStar = $open.find('.fa-star')
      , $menuEl = $menu.find('.row')
      , $oldEl = $menuEl.find('[data-time="now"][data-name="' + value + '"]')
      , $bar = $this.siblings().find('.student-bar');

    $this.toggleClass('star-colored');
    $bar.toggleClass('bar-colored');
    $endorsementStar.addClass('endorsement-colored');
    setTimeout(function () {
      $endorsementStar.removeClass('endorsement-colored');
    }, 500);

    if ($oldEl.length === 1) {
      $oldEl.remove();
      $endorsement.html(parseInt($endorsement.html(), 10) - 1);
      $bar.data('val', parseInt($bar.data('val'), 10) - 1);
      $bar.width($bar.data('val') + '%');
      return;
    }

    $menuEl.prepend(el);
    $endorsement.html(parseInt($endorsement.html(), 10) + 1);
    $bar.data('val', parseInt($bar.data('val'), 10) + 1);
    $bar.width($bar.data('val') + '%');
  });
})();