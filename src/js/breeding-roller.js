class Parent {
	constructor(parent) {
		this.geno = $(`#${parent}`).val() !== '' ? $(`#${parent}`).val() : 'Ee Aa';
	}
}

class Offspring {
	constructor(offspring, sire, dam) {
		// console.log(`Sire: ${sire.geno}\nDam: ${dam.geno}`);
		this.sex = randomizer(['stallion','mare']).capitalizeString();
		this.colour = handleColour(sire, dam);
	}
}

function handleColour(sire, dam) {
	// SETUP
	let output = {
		geno: [],
		pheno: [],
	};

	// ROLL GENO
	function handleBase(baseGeno, basePheno) {
		const dictionaryGeno = baseGeno;

		for (let i = 0; i < dictionaryGeno.length; i++) {
			const regexList = dictionaryGeno[i].join('|');
			const regex = new RegExp(`\\b(${regexList})(${regexList})\\b`,'');
			const geneDefault = dictionaryGeno[i][dictionaryGeno[i].length - 1];
			const gene1 = sire.geno.matchy(regex)[1] || geneDefault;
			const gene2 = sire.geno.matchy(regex)[2] || geneDefault;
			const gene3 = dam.geno.matchy(regex)[1] || geneDefault;
			const gene4 = dam.geno.matchy(regex)[2] || geneDefault;
			// console.log(geno1, geno2, geno3, geno4);

			const matrix = [
				[gene1, gene3].sortBasedOn(dictionaryGeno[i]),
				[gene2, gene3].sortBasedOn(dictionaryGeno[i]),
				[gene1, gene4].sortBasedOn(dictionaryGeno[i]),
				[gene2, gene4].sortBasedOn(dictionaryGeno[i]),
			];

			const gene = randomizer(matrix).join('')
			output.geno.push(gene);
		}

		const dictionaryPheno = basePheno;

		for (let i = 0; i < dictionaryPheno.length; i++) {
			if (dictionaryPheno[i][1].some((a) => output.geno.includes(a)) && dictionaryPheno[i][2].some((a) => output.geno.includes(a))) {
				output.pheno.push(dictionaryPheno[i][0]);
			}
		}
	}

	function handleNatural(dictionary) {
		for (let i = 0; i < dictionary.length; i++) {
			const geneDom = `${dictionary[i][1]}${dictionary[i][1]}`;
			const geneRec = `n${dictionary[i][1]}`;
			const pheno = dictionary[i][0];
			const regex = new RegExp(`\\b(${geneDom}|${geneRec})\\b`,'');
			const geneSire = sire.geno.matchy(regex)[1] || false;
			const geneDam = dam.geno.matchy(regex)[1] || false;

			let gene = '';
			if (geneSire === geneDom && geneDam === geneDom) {
				gene = geneDom;
			}
			else if (geneSire === geneDom && geneDam === geneRec || geneSire === geneRec && geneDam === geneDom) {
				gene = randomizer([geneDom, geneRec]);
			}
			else if (geneSire === geneDom && !geneDam || !geneSire && geneDam === geneDom) {
				gene = geneRec;
			}
			else if (geneSire === geneRec && geneDam === geneRec || geneSire === geneRec && geneDam === geneRec) {
				gene = randomizer([geneDom, geneRec, geneRec, '']);
			}
			else if (geneSire === geneRec && !geneDam || !geneSire && geneDam === geneRec) {
				gene = randomizer([geneRec, '']);
			}

			gene !== '' && output.geno.push(gene) && output.pheno.push(pheno);
		}
	}

	function handleKIT(dictionary) {
		// NOTE: KIT limit has not been implemented
		for (let i = 0; i < dictionary.length; i++) {
			const geneDom = `${dictionary[i][1]}${dictionary[i][1]}`;
			const geneRec = `${dictionary[i][1]}`;
			const pheno = dictionary[i][0];
			const regex = new RegExp(`\\b(${geneDom}|${geneRec})\\b`,'');
			const geneSire = sire.geno.matchy(regex)[1] || false;
			const geneDam = dam.geno.matchy(regex)[1] || false;

			let gene = '';
			if (geneSire === geneDom && geneDam === geneDom) {
				gene = geneDom;
			}
			else if (geneSire === geneDom && geneDam === geneRec || geneSire === geneRec && geneDam === geneDom) {
				gene = randomizer([geneDom, geneRec]);
			}
			else if (geneSire === geneDom && !geneDam || !geneSire && geneDam === geneDom) {
				gene = geneRec;
			}
			else if (geneSire === geneRec && geneDam === geneRec || geneSire === geneRec && geneDam === geneRec) {
				gene = randomizer([geneDom, geneRec, geneRec, '']);
			}
			else if (geneSire === geneRec && !geneDam || !geneSire && geneDam === geneRec) {
				gene = randomizer([geneRec, '']);
			}

			gene !== '' && output.geno.push(gene) && output.pheno.push(pheno);
		}
	}

	function handleAbsolute(dictionary) {
		// nordanner-esque absolute odds
		for (let i = 0; i < dictionary.length; i++) {
			const geneDom = `${dictionary[i][1]}${dictionary[i][1]}`;
			const geneRec = `n${dictionary[i][1]}`;
			const pheno = dictionary[i][0];
			const regex = new RegExp(`\\b(${geneDom}|${geneRec})\\b`,'');
			const geneSire = sire.geno.matchy(regex)[1] || false;
			const geneDam = dam.geno.matchy(regex)[1] || false;

			let gene = '';
			if (geneSire === geneDom && geneDam === geneDom) {
				gene = geneDom;
			}
			else if (geneSire === geneDom && geneDam === geneRec || geneSire === geneRec && geneDam === geneDom) {
				gene = geneDom;
			}
			else if (geneSire === geneDom && !geneDam || !geneSire && geneDam === geneDom) {
				gene = geneRec;
			}
			else if (geneSire === geneRec && geneDam === geneRec || geneSire === geneRec && geneDam === geneRec) {
				gene = geneRec;
			}

			gene !== '' && output.geno.push(gene) && output.pheno.push(pheno);
		}
	}

	handleBase(base.geno, base.pheno);
	handleNatural(dilutions);
	handleKIT(KIT);
	handleNatural(whitePatterns);
	handleAbsolute(absolute);

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
	const sire = new Parent('sire');
	const dam = new Parent('dam');
	const offspring = new Offspring('offspring', sire, dam);
	$('#output').html(`<b>Sex:</b> ${offspring.sex}
	<br><b>Geno:</b> ${offspring.colour.geno}
	<br><b>Pheno:</b> ${offspring.colour.pheno}`);
}
