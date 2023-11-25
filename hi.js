<?php
	header("Content-Security-Policy: default-src 'self'" .$_GET['hi']);
	echo $_GET['csp'];
?>


