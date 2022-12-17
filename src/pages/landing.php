<head>
	<!-- Page -->
	<title>Breeding Roller</title>

	<!-- Importing -->
	<link rel="stylesheet" href="styles/landing.css?v=<?php echo time(); ?>">
	<script src="js/dictionaries.js?v=<?php echo time(); ?>" defer></script>
	<script src="js/roller.js?v=<?php echo time(); ?>" defer></script>
</head>

<article>
	<div id="legend">
		<button id="legend-button" class="button-icon" onclick="slideLeft('legend-drawer')"><ion-icon name="information-circle-outline"></ion-icon></button>
		<div id="legend-drawer" class="hidden">- Test<br>- Test<br>- Test</div>
	</div>

	<div id="input">
		<p class="stack-100">Text text text 🌠</p>
		<div class="stack-100">
			<label for="sire">Sire: </label><input type="text" id="sire" placeholder="Ee Aa..."></input>
			<br>
			<label for="dam">Dam: </label><input type="text" id="dam" placeholder="Ee Aa..."></input>
		</div>
		<button onclick="roll()">Roll</button>
	</div>
	<div id="output" class="row justify-content-center"><b>Geno:</b> Ee Aa...<br><b>Pheno:</b> Bay...</div>
</article>