<head>
	<!-- Page -->
	<title>Breeding Roller</title>

	<!-- Importing -->
	<link rel="stylesheet" href="styles/landing.css?v=<?php echo time(); ?>">
	<script src="js/toolbox.js?v=<?php echo time(); ?>" defer></script>
	<script src="js/roller.js?v=<?php echo time(); ?>" defer></script>
</head>

<article>
	<div id="input">
		<p class="stack-100">Text text text :></p>
		<div class="stack-200">
			<label for="sire">Sire: </label><input type="text" id="sire" placeholder="Ee Aa..."></input>
			<br>
			<label for="dam">Dam: </label><input type="text" id="dam" placeholder="Ee Aa..."></input>
		</div>
		<button onclick="roll()">Roll</button>
	</div>
	<div id="output" class="row justify-content-center">Geno: Ee Aa...</div>
</article>