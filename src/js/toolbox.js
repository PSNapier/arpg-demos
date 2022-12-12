/* praying to rng gods */
function rng(max) {
	return Math.floor(Math.random() * max) + 1;
}

function rngRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizer(array) {
	return array.length > 0 ? array[Math.floor(Math.random() * array.length)] : '';
}