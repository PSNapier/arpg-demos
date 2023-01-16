class Horse {
	constructor(horse) {
		// console.log(`Sire: ${sire.geno}\nDam: ${dam.geno}`);
		this.sex = randomizer(['stallion','mare']).capitalizeString();
		this.colour = handleColour();
	}
}

function handleColour() {
	// SETUP
	let output = {
		geno: [],
		pheno: [],
	};

	// ROLL GENO
	function handleBase(basePheno) {
		const dictionaryPheno = basePheno;

		let chosenPheno = randomizer(dictionaryPheno);
		output.geno.push(randomizer(chosenPheno[1]));
		output.geno.push(randomizer(chosenPheno[2]));
		output.pheno.push(chosenPheno[0]);
	}

	function handleTheRest(dictionary) {
		for (let i = 0; i < dictionary.length; i++) {
			if (rng(100) >= 10) {
				continue;
			}
			let dom = `${dictionary[i][1]}${dictionary[i][1]}`;
			let rec = `n${dictionary[i][1]}`;
			output.geno.push(randomizer([dom, rec, rec, rec]));
			output.pheno.push(dictionary[i][0]);
		}
	}

	handleBase(base.pheno);
	handleTheRest(dilutions);
	handleTheRest(whitePatterns);
	handleTheRest(KIT);

	// PHENO OVERRIDES
	function phenoReader(dictionary) {
		main:
		for (let i = 0; i < dictionary.length; i++) {
			// check all phenos
			for (let pheno of dictionary[i].checkPheno) {
				if (!output.pheno.includes(pheno)) {
					continue main;
				}
			}
			// check all genos
			if (dictionary[i].checkGeno) {
				for (let geno of dictionary[i].checkGeno) {
					if (!output.geno.includes(geno)) {
						continue main;
					}
				}
			}
			// set all phenos
			for (let pheno of dictionary[i].setPheno) {
				const y = output.pheno.indexOf(pheno[0]);
				output.pheno[y] = pheno[1];
			}
		}
	}

	phenoReader(overrides);

	// FINALIZE
	output.geno = output.geno.join(' ');
	output.pheno = output.pheno.join(' ').capitalizeString();
	return output;
}

function roll() {
	const horse = new Horse('horse');
	$('#output').html(`<b>Sex:</b> ${horse.sex}
	<br><b>Geno:</b> ${horse.colour.geno}
	<br><b>Pheno:</b> ${horse.colour.pheno}`);
}
