class Parent {
	constructor(parent) {
		this.geno = $(`#${parent}`).val() !== '' ? $(`#${parent}`).val() : '(#7de273)';
	}
}

class Offspring {
	constructor(offspring, sire, dam) {
		// console.log(`Sire: ${sire.geno}\nDam: ${dam.geno}`);
		this.colour = handleColour(sire, dam);
	}
}

function handleColour(sire, dam) {
	// SETUP
	let output = {
		geno: [],
	};

	// ROLL GENO
	function handleSlime() {
		// get parents
		const regex = new RegExp(`(?<=\().+(?=\))`,'');
		const sire = sire.geno.matchy(regex)[1] || '#ffffff00'
		console.log(sire);

		const Color = window.ColorInterpreter.Color;
		let slime = new Color("#7de273").toHSLA();
		console.log(slime);
	}

	handleSlime();

	// FINALIZE
	output.geno = output.geno.join(' ');
	return output;
}

function roll() {
	const sire = new Parent('sire');
	const dam = new Parent('dam');
	const offspring = new Offspring('offspring', sire, dam);
	$('#output').html(`<b>Geno:</b> ${offspring.colour.geno}`);
}
