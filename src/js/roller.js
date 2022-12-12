class Parent {
	constructor(parent) {
		this.geno = $(`#${parent}`).val() !== '' ? $(`#${parent}`).val() : 'Ee Aa';
	}
}

class Offspring {
	constructor(offspring, sire, dam) {
		// console.log(`Sire: ${sire.geno}\nDam: ${dam.geno}`);
		this.colour = handleColour(sire, dam);
	}
}

function handleColour(sire, dam) {
	let output = {
		geno: [],
		pheno: [],
	};

	function handleBase() {
		let dictionaryGeno = [
			['E', 'e'],
			['At', 'A', 'a'],
		];

		for (let i = 0; i < dictionaryGeno.length; i++) {
			const regexList = dictionaryGeno[i].join('|');
			const regex1 = new RegExp(`\\b(${regexList})(${regexList})\\b`,'');
			const genoDefault = dictionaryGeno[i][dictionaryGeno[i].length - 1];
			const geno1 = sire.geno.matchy(regex1)[1] || genoDefault;
			const geno2 = sire.geno.matchy(regex1)[2] || genoDefault;
			const geno3 = dam.geno.matchy(regex1)[1] || genoDefault;
			const geno4 = dam.geno.matchy(regex1)[2] || genoDefault;
			// console.log(geno1, geno2, geno3, geno4);

			const matrix = [
				[geno1, geno3].sortBasedOn(dictionaryGeno[i]),
				[geno2, geno3].sortBasedOn(dictionaryGeno[i]),
				[geno1, geno4].sortBasedOn(dictionaryGeno[i]),
				[geno2, geno4].sortBasedOn(dictionaryGeno[i]),
			];

			const gene = randomizer(matrix).join('')
			output.geno.push(gene);
		}

		let dictionaryPheno = [
			['black', ['EE','Ee'],['aa']],
			['seal-bay', ['EE','Ee'],['AtA','Ata']],
			['bay', ['EE','Ee'],['AA','Aa']],
			['chestnut', ['ee'],['AtA','Ata','AA','Aa','aa']],
		];

		for (let i = 0; i < dictionaryPheno.length; i++) {
			if (dictionaryPheno[i][1].some((a) => output.geno.includes(a)) && dictionaryPheno[i][2].some((a) => output.geno.includes(a))) {
				output.pheno.push(dictionaryPheno[i][0]);
			}
		}
	}

	handleBase();

	output.geno = output.geno.join(' ');
	output.pheno = output.pheno.capitalizeArray().join(' ');
	return output;
}

function roll() {
	let sire = new Parent('sire');
	let dam = new Parent('dam');
	let offspring = new Offspring('offspring', sire, dam);
	$('#output').html(`<b>Geno:</b> ${offspring.colour.geno}
	<br><b>Pheno:</b> ${offspring.colour.pheno}`);
}
