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
	// cream
	['smoky-cream', ['black','cream','CrCr']],
	['perlino', ['seal-bay','cream','CrCr']],
	['perlino', ['bay','cream','CrCr']],
	['cremello', ['chestnut','cream','CrCr']],
	['smoky-black', ['black','cream','nCr']],
	['buckskin', ['seal-bay','cream','nCr']],
	['buckskin', ['bay','cream','nCr']],
	['palomino', ['chestnut','cream','nCr']],
	// champagne
	['classic-champagne', ['black','champagne']],
	['amber-champagne', ['seal-bay','champagne']],
	['amber-champagne', ['bay','champagne']],
	['gold-champagne', ['chestnut','champagne']],
	// dun
	['dunskin', ['buckskin','dun']],
	['grullo', ['black','dun']],
	['coyote-dun', ['seal-bay','dun']],
	['coyote-dun', ['bay','dun']],
	['red-dun', ['chestnut','dun']],
	// roan
	['blue-roan', ['black','roan']],
	['strawberry-roan', ['chestnut','roan']],
]