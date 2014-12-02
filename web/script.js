$('.icon').click(function() {

	if ($('.icon').hasClass('disabled'))
		return;
	
	$('.title').show(1000);
	$('.icon').css('opacity', 0.2);
	$('.icon').addClass('disabled');

	setTimeout(function(){
		$('.title').hide(1000);
		$('.icon').css('opacity',1);
		$('.icon').removeClass('disabled');
	}, 10000);
})