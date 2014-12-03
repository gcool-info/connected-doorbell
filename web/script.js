$( document ).ready(function() {
	$('.icon').click(function() {

		if ($('.icon').hasClass('disabled'))
			return;

		$('.title').show(1000);
		$('.icon').css('opacity', 0.2);
		$('.icon').addClass('disabled');

		$.ajax({
			url: 'ajax.php',
			type: 'GET',
			dataType: "json",
			timeout: 10000,
			data: {
				"cmd": 'turn_on'
			}
		});
	});

	setInterval(function(){

			$.ajax({
				url: 'ajax.php',
				type: 'GET',
				dataType: "json",
				timeout: 10000,
				data: {
					"cmd": 'read'
				},
				success: function(data) {
					if (data == 'off') {
						$('.title').hide(1000);
						$('.icon').css('opacity',1);
						$('.icon').removeClass('disabled');
					} else {
						$('.title').show(1000);
						$('.icon').css('opacity', 0.2);
						$('.icon').addClass('disabled');
					}	
				},
			});

		}, 1000);
})