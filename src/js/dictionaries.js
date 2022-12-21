// BASE
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

// NATURAL
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

// KIT
const KIT = [
	['dominant-white', 'Wh'],
	['roan', 'Rn'],
	['tobiano', 'Tb'],
	['sabino', 'Sb'],
];

// ABSOLUTE
const absolute = [
	['absolute-mutation', 'Am'],
]

// PERCENTAGE
const percentage = [
	['percentage-mutation', 'Pm'],
]

// OVERRIDES
// NOTE: possible better format
const overrides = [
	// cream
	{ checkPheno: ['black','cream'], checkGeno: ['CrCr'], setPheno: [['cream',''],['black','smoky-cream']] },
	{ checkPheno: ['seal-bay','cream'], checkGeno: ['CrCr'], setPheno: [['cream',''],['seal-bay','perlino']] },
	{ checkPheno: ['bay','cream'], checkGeno: ['CrCr'], setPheno: [['cream',''],['bay','perlino']] },
	{ checkPheno: ['chestnut','cream'], checkGeno: ['CrCr'], setPheno: [['cream',''],['chestnut','cremello']] },
	{ checkPheno: ['black','cream'], checkGeno: ['nCr'], setPheno: [['cream',''],['black','smoky-black']] },
	{ checkPheno: ['seal-bay','cream'], checkGeno: ['nCr'], setPheno: [['cream',''],['seal-bay','buckskin']] },
	{ checkPheno: ['bay','cream'], checkGeno: ['nCr'], setPheno: [['cream',''],['bay','buckskin']] },
	{ checkPheno: ['chestnut','cream'], checkGeno: ['nCr'], setPheno: [['cream',''],['chestnut','palomino']] },
	// champagne
	{ checkPheno: ['black','champagne'], setPheno: [['champagne',''],['black','classic-champagne']] },
	{ checkPheno: ['seal-bay','champagne'], setPheno: [['champagne',''],['seal-bay','amber-champagne']] },
	{ checkPheno: ['bay','champagne'], setPheno: [['champagne',''],['bay','amber-champagne']] },
	{ checkPheno: ['chestnut','champagne'], setPheno: [['champagne',''],['chestnut','gold-champagne']] },
	// dun
	{ checkPheno: ['black','dun'], setPheno: [['dun',''],['black','grullo']] },
	{ checkPheno: ['seal-bay','dun'], setPheno: [['dun',''],['seal-bay','coyote-dun']] },
	{ checkPheno: ['bay','dun'], setPheno: [['dun',''],['bay','coyote-dun']] },
	{ checkPheno: ['chestnut','dun'], setPheno: [['dun',''],['chestnut','red-dun']] },
	// flaxen
	{ checkPheno: ['black','flaxen'], setPheno: [['flaxen','flaxen-carrier']] },
	{ checkPheno: ['seal-bay','flaxen'], setPheno: [['flaxen','flaxen-carrier']] },
	{ checkPheno: ['bay','flaxen'], setPheno: [['flaxen','flaxen-carrier']] },
	{ checkPheno: ['chestnut','flaxen'], setPheno: [['flaxen',''],['chestnut','flaxen-chestnut']] },
	// roan
	{ checkPheno: ['black','roan'], setPheno: [['roan',''],['black','blue-roan']] },
	{ checkPheno: ['chestnut','roan'], setPheno: [['roan',''],['chestnut','strawberry-roan']] },
];