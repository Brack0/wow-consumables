import { Content } from './content';
import { Currency } from './currency';
import { Plant } from './plant';
import { Flask } from './flask';
import { Spec } from './utils.service';

// Init data
const currentContent = new Content({
    idContent: 1,
    expansionName: 'Legion',
    patch: '7.2.5',
    releaseDate: new Date()
});

const bloodOfSargeras = new Currency(currentContent, {
    idMaterial: 124124,
    name: 'Blood of Sargeras',
    stackSize: 1000
});

const aethril = new Plant(currentContent, {
    idMaterial: 124101,
    name: 'Aethril',
    stackSize: 200,
    currency: bloodOfSargeras,
    ratio: 10
});

const dreamleaf = new Plant(currentContent, {
    idMaterial: 124102,
    name: 'Dreamleaf',
    stackSize: 200,
    currency: bloodOfSargeras,
    ratio: 10
});

const foxFlower = new Plant(currentContent, {
    idMaterial: 124103,
    name: 'FoxFlower',
    stackSize: 200,
    currency: bloodOfSargeras,
    ratio: 10
});

const fjarnskaggl = new Plant(currentContent, {
    idMaterial: 124104,
    name: 'Fjarnskaggl',
    stackSize: 200,
    currency: bloodOfSargeras,
    ratio: 10
});

const starlightRose = new Plant(currentContent, {
    idMaterial: 124105,
    name: 'Starlight Rose',
    stackSize: 200,
    currency: bloodOfSargeras,
    ratio: 3
});

const flaskIntellect = new Flask(currentContent, {
    idMaterial: 127847,
    name: 'Flask of the Whispered Pact',
    stackSize: 20,
    utility: Spec.DPS,
    craftMaterials: [
        {
            component: starlightRose,
            amount: 7
        },
        {
            component: fjarnskaggl,
            amount: 10
        },
        {
            component: dreamleaf,
            amount: 10
        }
    ]
});

const flaskAgility = new Flask(currentContent, {
    idMaterial: 127848,
    name: 'Flask of the Seventh Demon',
    stackSize: 20,
    utility: Spec.DPS,
    craftMaterials: [
        {
            component: starlightRose,
            amount: 7
        },
        {
            component: fjarnskaggl,
            amount: 10
        },
        {
            component: foxFlower,
            amount: 10
        }
    ]
});

const flaskStrengh = new Flask(currentContent, {
    idMaterial: 127849,
    name: 'Flask of the Countless Armies',
    stackSize: 20,
    utility: Spec.DPS,
    craftMaterials: [
        {
            component: starlightRose,
            amount: 7
        },
        {
            component: aethril,
            amount: 10
        },
        {
            component: foxFlower,
            amount: 10
        }
    ]
});

const flaskStamina = new Flask(currentContent, {
    idMaterial: 127850,
    name: 'Flask of Ten Thousand Scars',
    stackSize: 20,
    utility: Spec.Tank,
    craftMaterials: [
        {
            component: starlightRose,
            amount: 7
        },
        {
            component: aethril,
            amount: 10
        },
        {
            component: dreamleaf,
            amount: 10
        }
    ]
});


export const PLANTS: Plant[] = [aethril, dreamleaf, foxFlower, fjarnskaggl, starlightRose];
export const FLASKS: Flask[] = [flaskIntellect, flaskAgility, flaskStrengh, flaskStamina];