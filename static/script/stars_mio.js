(function () {
  "use strict";

  var $skills = $('#skills')
    , $menu = $('#menu')
    , $open = $('#open');

  $skills.find('.fa-star').on('click', function () {
    alert("You can't confirm your own skills!");
  });
})();