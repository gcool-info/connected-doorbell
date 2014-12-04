<?php

	$command = (isset($_GET["cmd"])? $_GET["cmd"] : $_POST["cmd"]);

	switch ($command) {
		case 'turn_on':

			/* open the txt file */
			$handle = fopen("status.txt", "w");

			/* Write the status of the heater in the txt file */
			fwrite($handle, 'on');

			/* close the txt file */
			fclose($handle);

			break;

		case 'turn_off': 

			/* open the txt file */
			$handle = fopen("status.txt", "w");

			/* Write the status of the heater in the txt file */
			fwrite($handle, 'off');

			/* close the txt file */
			fclose($handle);

			break;

		case 'read':

			/* open the txt file */
			$handle = fopen("status.txt", "r");

			/* Check the status */
			$results = fread($handle,filesize("status.txt"));

			/* close the txt file */
			fclose($handle);

			die(json_encode($results));

			break;
	}
	
?>
