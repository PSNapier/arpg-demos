// praying to rng gods
function rng(max) {
	return Math.floor(Math.random() * max) + 1;
}

function rngRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizer(array) {
	return array.length > 0 ? array[Math.floor(Math.random() * array.length)] : '';
}

Object.prototype.randomizer = function() {
	return this.length > 0 ? this[Math.floor(Math.random() * this.length)] : '';
}

// custom match
Object.prototype.matchy = function(query) {
	return this.match(query) || false;
}

// sort array based on another array
// array = ["b", "c", "a", "d"]
// sortOrder = ["a", "b", "c", "d"];
Object.prototype.sortBasedOn = function(sortOrder) {
	return this.sort(function (a, b) {
		return sortOrder.indexOf(a) - sortOrder.indexOf(b);
	});
}

// capitalize every string in array
Object.prototype.capitalizeArray = function() {
  var newArray = [];

  for (var i = 0; i < this.length; i++) {
    if (typeof this[i] !== "string") {
      break;
    }
    newArray.push(this[i].charAt(0).toUpperCase() + this[i].slice(1));
  }
  return newArray;
}

// capitalize string
Object.prototype.capitalizeString = function() {
	let breakdown = this.split(/\b/);
	return breakdown.capitalizeArray().join('');
}

/* UI */
function slideLeft(id) {
	$(`#${id}`).toggle();
}

function unicorn() {
	const colors = [
		'hsl(187, 80%, 51%)', // cyan
		'hsl(143, 59%, 48%)', // green
		'hsl(41, 77%, 66%)', // yellow
		'hsl(26, 85%, 65%)', // orange
		'hsl(345, 85%, 62%)', // pink
		'hsl(299deg 39% 59%)', // purple
	]
	document.body.style.setProperty('--color-accent', randomizer(colors));
}
unicorn();

// NOTE: JQuery no worky. Boo.
// function fixHeight(id) {
// 	const fix = $(`#wrapper`).height();
// 	$(`#${legend}`).height(fix);
// }

// $('#wrapper').resize(fixHeight('legend'));

(function() {
	if (navigator.userAgent.indexOf("Chrome") !== -1) {
		$('#browser').remove();
	}
})();