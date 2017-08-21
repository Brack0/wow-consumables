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

const starlightRose = new Plant(currentContent, {
    idMaterial: 124105,
    name: 'Starlight Rose',
    stackSize: 200,
    currency: bloodOfSargeras,
    ratio: 3
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

const flaskMeleeDps = new Flask(currentContent, {
    idMaterial: 188343,
    name: 'Flask of the Countless Armies',
    stackSize: 20,
    utility: Spec.DPS,
    craftMaterials: [
        {
            component: starlightRose,
            amount: 3
        },
        {
            component: foxFlower,
            amount : 10
        }
    ]
});

const flaskTank = new Flask(currentContent, {
    idMaterial: 188346,
    name: 'Flask of Ten Thousand Scars',
    stackSize: 20,
    utility: Spec.Tank,
    craftMaterials: [
        {
            component: starlightRose,
            amount: 12
        },
        {
            component: dreamleaf,
            amount : 10
        }
    ]
});


export const PLANTS: Plant[] = [starlightRose, foxFlower, dreamleaf];
export const FLASKS: Flask[] = [flaskMeleeDps,flaskTank];