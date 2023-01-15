<?php
include_once 'header.php';

if ($_SERVER['REQUEST_URI'] !== '/') {
	$page = $_SERVER['REQUEST_URI'];
	include_once "views$page.php";
}
else {
	include_once 'views/landing.php';
}

include_once 'footer.php';