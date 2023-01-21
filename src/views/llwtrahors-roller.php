<head>
	<!-- Page -->
	<title>Llwtrahors Roller</title>

	<!-- Importing -->
	<link rel="stylesheet" href="styles/landing.css?v=<?php echo time(); ?>">
	<link rel="stylesheet" href="styles/llwtrahors.css?v=<?php echo time(); ?>">
	<script src="js/color-interpreter.js?v=<?php echo time(); ?>" defer></script>
	<script src="js/llwtrahors-roller.js?v=<?php echo time(); ?>" defer></script>
</head>

<div id="legend" style="display: none;">
	<button id="legend-button" class="button-icon" title="Legend" onclick="slideLeft('legend-drawer')"><ion-icon name="information-circle-outline"></ion-icon></button>
	<div id="legend-drawer" class="hidden">- Test<br>- Test<br>- Test</div>
</div>

<article>
	<svg id="decoration" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
		<path d="M 0,400 C 0,400 0,133 0,133 C 124.25,127.17857142857143 248.5,121.35714285714286 366,132 C 483.5,142.64285714285714 594.2499999999999,169.75 728,159 C 861.7500000000001,148.25 1018.5,99.64285714285714 1141,89 C 1263.5,78.35714285714286 1351.75,105.67857142857143 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#8ed1fc" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><path d="M 0,400 C 0,400 0,266 0,266 C 108.03571428571428,282 216.07142857142856,298 354,307 C 491.92857142857144,316 659.7499999999999,318 766,299 C 872.2500000000001,280 916.9285714285713,240 1019,231 C 1121.0714285714287,222 1280.5357142857142,244 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#8ed1fc" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path>
	</svg>

	<div id="input">
		<div id="text">
			<h2>Llwtrahors Roller</h2>
			<p id="browser">Headsup, it is recommended you use this roller with a Chrome-based browser, some things may not work as expected on other browsers. 😅</p>
			<p>This is a roller for Llwtrahors.</p>
			<!-- <?php include_once 'contact-me.php' ?> -->
		</div>
		<div id="parents">
			<span class="single-line"><label for="sire"><b>Sire:</b></label><input type="text" id="sire" placeholder="(#7de273)..."></input></span>
			<br>
			<span class="single-line"><label for="dam"><b>Dam:</b></label><input type="text" id="dam" placeholder="(#7de273)..."></input></span>
		</div>
		<button onclick="roll()">Roll Foal!</button>
	</div>

	<div id="color-preview" class="flex-row flex-center">
		<div id="color-preview-1" class="color-preview" style="background-color: #000000ff"></div>
		<div id="color-preview-2" class="color-preview"></div>
		<div id="color-preview-3" class="color-preview"></div>
		<div id="color-preview-4" class="color-preview"></div>
		<div id="color-preview-5" class="color-preview"></div>
	</div>
	<div id="output" class="flex-row">
		<b>Geno:</b>&nbsp;(#7de273)...
	</div>
</article>