<?php
	/* open the txt file */
	$handle = fopen("status.txt", "w");

	/* Write the status of the heater in the txt file */
	fwrite($handle, $_POST["status"]);

	/* close the txt file */
	fclose($handle);
?>
