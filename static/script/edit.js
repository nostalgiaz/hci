(function () {
  "use strict";
  var $work = $('#work')
  	, $edu = $('#edu')
  	, $skills = $('#skills');
  
  $work.find('.button').on('click', function () {
	  var el = '<h4><input type="text" placeholder="position"></h4><em><input type="text" placeholder="period"></em>'
	  	, $button = $work.find('.button');
	  $button.before(el);
  });
  
  $edu.find('.button').on('click', function () {
	  var el = '<h4><input type="text" placeholder="university"></h4><em><input type="text" placeholder="period"></em>'
	  	, $button = $edu.find('.button');
	  $button.before(el);
  });
  
  $skills.find('.fa-times').on('click', function () {
	  var $remove = $skills.find('#' + $(this).data('name'));
	  $remove.remove();
  });
  
})();