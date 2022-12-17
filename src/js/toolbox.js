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

/* UI */
function slideLeft(id) {
	$(`#${id}`).toggle();
}