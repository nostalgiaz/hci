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
  
  $('#customize').on('click', function () {
  		var $tab = $('#customize-tab');
  		$tab.toggleClass('display-none display-block');
  });
  
/* change header color   */
  $('#header-color i').on('click', function () {
  	  var $col = $(this).data('color');
	  $('h3').each(function () {
		  $(this).css({"background-color" : $col });
	  });
	  $('td').each(function () {
		  $(this).css({"color" : $col}); 
	  }); 
	  $('#bio').css({"border-top" : "5px solid " + $col});
  });
  
/* change box opacity  */
  $('#slider').on('slidechange', function () {
	  var value = $( "#slider" ).slider( "option", "value" ) / 100;
	  $('#sidebar > .row > div').css({"background-color" : "rgba(0,0,0," + value + ")"});
  });

/* change theme   */
	$('#dark-theme').on('click', function () {
		$('#sidebar > .row > div').css({"background-color" : "black"});
	});
	$('#light-theme').on('click', function () {
		$('#sidebar > .row > div').css({"background-color" : "white"});
	});
	
})();