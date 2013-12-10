var open = false;

$('#open').click(function() {
		if(open == false){
			$('#menu').removeClass( 'menu-close' );
			$('#menu').addClass( 'menu-open' );
			open = true;
		}
		else if(open == true){
			$('#menu').removeClass( 'menu-open' );
			$('#menu').addClass( 'menu-close' );	
			open = false;
		}
});

(function(){
	$('.histogram-bar').each(function(){
		var $this = $(this);
		$this.width($this.data('val') + '%');
	});
})();