class Parent {
	constructor(parent) {
		this.geno = $(`#${parent}`).val() !== '' ? $(`#${parent}`).val() : 'Ee Aa';
	}
}

class Offspring {
	constructor(offspring, sire, dam) {
		this.geno = handleBase(sire, dam);
		console.log(sire.geno, dam.geno);
	}
}

function handleBase(sire, dam) {
	let output = [];

	let dictionary = [
		['E', 'e'],
		['At', 'A+', 'A', 'a'],
	];

	

	return output;
}

function roll() {
	let sire = new Parent('sire');
	let dam = new Parent('dam');
	let offspring = new Offspring('offspring', sire, dam);
	$('#output').html(`Geno: ${offspring.geno}`);
}
