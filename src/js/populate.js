function populateLegend(id) {
	let output = [];

	for (let i = 0; i < base.pheno.length; i++) {
		const pheno = base.pheno[i][0].capitalizeString();
		const black = base.pheno[i][1].join('/');
		const agouti = base.pheno[i][2].join('/');
		output.push(`${pheno} - ${black} + ${agouti}`)
	}
	output.push('');

	const lists = [dilutions, KIT, whitePatterns, absolute];
	for (let i = 0; i < lists.length; i++) {
		for (let j = 0, list = lists[i]; j < list.length; j++) {
			const pheno = `${list[j][0].capitalizeString()}`;
			const dom = `${list[j][1]}${list[j][1]}`;
			const rec = list === KIT && `${list[j][1]}` || `n${list[j][1]}`;
			output.push(`${pheno} - ${dom}/${rec}`)
		}
		output.push('');
	}

	output.push(`All bases have an equal chance of occuring (chooses from Black, Seal-Bay, Bay and Chestnut at random, and then randomly between all black and agouti variations that are applicable for the base)`);
	output.push(`Dilutions, white-patterns and KIT each have a 10% of appearing, 25% dominant and 75% recessive (realistic KIT is not currently implemented).`);

	$(`#${id}`).html(`${output.join('<br>')}`);
}
populateLegend('legend-drawer');