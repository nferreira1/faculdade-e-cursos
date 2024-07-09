<?php

	$message = $_POST["message"];

	$files = scandir("messages");

	$num_files = count($files) - 2;

	$filename = "msg-{$num_files}.txt";

	$file = fopen("messages/{$filename}", "w");

	fwrite($file, $message);

	fclose($file);

	header("Location: index.php");

?>
