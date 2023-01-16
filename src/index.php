<?php
include_once 'header.php';

$page = $_SERVER['REQUEST_URI'];
if ($page !== '/' && file_exists("views$page.php")) {
	include_once "views$page.php";
}
else {
	include_once 'views/landing.php';
}

include_once 'footer.php';