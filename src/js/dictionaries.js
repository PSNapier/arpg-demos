const base = {
	geno: [
		['E', 'e'],
		['At', 'A', 'a'],
	],
	pheno: [
		['black', ['EE','Ee'],['aa']],
		['seal-bay', ['EE','Ee'],['AtA','Ata']],
		['bay', ['EE','Ee'],['AA','Aa']],
		['chestnut', ['ee'],['AtA','Ata','AA','Aa','aa']],
	],
};

const dilutions = [
	['champagne', 'Ch'],
	['cream', 'Cr'],
	['dun', 'D'],
	['flaxen', 'F'],
	['pangare', 'P'],
	['pearl', 'Prl'],
	['silver', 'Z'],
	['sooty', 'Sty'],
];
const whitePatterns = [
	['grey', 'G'],
	['appaloosa', 'Lp'],
	['splash', 'Spl'],
	['overo', 'Ov'],
	['rabicano', 'Rb'],
];

const KIT = [
	['dominant-white', 'Wh'],
	['roan', 'Rn'],
	['tobiano', 'Tb'],
	['sabino', 'Sb'],
];

const overrides = [
	// grey & dom-white
	// ['dominant-white', ['','WhWh|Wh']],
	// ['grey', ['','GG|nG']],
	// champagne
	['smoky-cream', ['black','CrCr']],
	['perlino', ['seal-bay|bay','CrCr']],
	['cremello', ['chestnut','CrCr']],
	['smoky-black', ['black','nCr']],
	['buckskin', ['seal-bay|bay','nCr']],
	['palomino', ['chestnut','nCr']],
	// champagne
	['classic-champagne', ['black','ChCh|nCh']],
	['amber-champagne', ['seal-bay|bay','ChCh|nCh']],
	['gold-champagne', ['chestnut','ChCh|nCh']],
	// dun
	['dunskin', ['buckskin','DD|nD']],
	['grullo', ['black','DD|nD']],
	['coyote-dun', ['seal-bay|bay','DD|nD']],
	['red-dun', ['chestnut','DD|nD']],
	// roan
	['-roan', ['','RnRn|Rn']],
	['blue-roan', ['black-roan','RnRn|Rn']],
	['strawberry-roan', ['chestnut-roan','RnRn|Rn']],
]