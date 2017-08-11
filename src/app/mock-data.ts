import { Content } from './content';
import { Currency } from './currency';
import { Plant } from './plant';


// Init data
const currentContent = new Content({
    idContent: 1,
    expansionName: 'Legion',
    patch: '7.2.5',
    releaseDate: new Date()
});

const bloodOfSargeras = new Currency(currentContent, {
    idMaterial: 1,
    name: 'Blood of Sargeras',
    stackSize: 1000
});

const starlightRose = new Plant(currentContent, {
    idMaterial: 2,
    name: 'Starlight Rose',
    stackSize: 200,
    currency: bloodOfSargeras,
    ratio: 0.1
});



export const PLANTS: Plant[] = [starlightRose];