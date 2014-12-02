$('.icon').click(function() {

	if ($('.icon').hasClass('disabled'))
		return;

	$('.title').show(1000);
	$('.icon').css('opacity', 0.2);
	$('.icon').addClass('disabled');

	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		dataType: "json",
		timeout: 10000,
		data: {
			"status": 'on'
		}
	});

	setTimeout(function(){
		$('.title').hide(1000);
		$('.icon').css('opacity',1);
		$('.icon').removeClass('disabled');

		$.ajax({
			url: 'ajax.php',
			type: 'POST',
			dataType: "json",
			timeout: 10000,
			data: {
				"status": 'off'
			}
		});

	}, 15000);
})