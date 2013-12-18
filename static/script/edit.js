(function () {
  "use strict";
  var $work = $('#work')
  	, $edu = $('#edu')
  	, $skills = $('#skills')
  	, $num = 1;
  
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
  
  $skills.find('.add-skill').on('click', function () {
	  var $el = '<tr id="'+ $num + '"><td><input type="text" placeholder="skill"></td><td><i class="fa-times" data-name="'+ $num +'"></i></td></tr>';
	  $('.add-cell').before($el);
	  $num = $num+1;
  });
  
})();