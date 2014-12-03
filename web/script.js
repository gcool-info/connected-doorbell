$( document ).ready(function() {
	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		dataType: "json",
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
	

	$('.icon').click(function() {

		if ($('.icon').hasClass('disabled'))
			return;

		$('.title').show(1000);
		$('.icon').css('opacity', 0.2);
		$('.icon').addClass('disabled');

		$.ajax({
			url: 'ajax.php',
			type: 'POST',
			data: {
				"cmd": 'turn_on'
			},
			success: function() {
				$('.title').show(1000);
				$('.icon').css('opacity', 0.2);
				$('.icon').addClass('disabled');
			}
		});
	});



	setInterval(function(){

		
			$.ajax({
				url: 'ajax.php',
				type: 'POST',
				dataType: "json",
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

	}, 10000);
})