$( document ).ready(function() {
	timer = 120;

	/* Start by setting off the alarm */
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
	

	/* Set-off the alarm on click */
	$('.icon').click(function() {

		/* Set the timer */
		timer = 120;

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


	/* Check the alarm state every 10s */
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

			/* Update the visual timer */
			timer -= 5;

			console.log(timer);

			if (timer >= 0)
				$('.seconds').html(timer);
			else
				$('.timer').html("Technology can be a bitch!<br/>Try knocking on the door...!")


	}, 10000);
})