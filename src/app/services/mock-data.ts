import {
  Content,
  Currency,
  Flask,
  Plant,
  Potion,
  Specialization
} from '@model';

// Init data
const specDd = new Specialization({
  idSpec: 0,
  name: 'Damage Dealer',
  icon: 'http://wow.zamimg.com/images/icons/ej-dps.png'
});

const specTank = new Specialization({
  idSpec: 1,
  name: 'Tank',
  icon: 'https://wow.zamimg.com/images/icons/ej-tank.png'
});

const specHealer = new Specialization({
  idSpec: 2,
  name: 'Healer',
  icon: 'http://wow.zamimg.com/images/icons/ej-healer.png'
});

const specHybrid = new Specialization({
  idSpec: 3,
  name: 'Hybrid',
  icon: 'assets/images/hybrid_wow.png'
});

const currentContent = new Content({
  idContent: 1,
  expansionName: 'Legion',
  patch: '7.3.0',
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

const yserallineSeed = new Plant(currentContent, {
  idMaterial: 128304,
  name: 'Yseralline Seed',
  stackSize: 200
});

const flaskIntellect = new Flask(currentContent, {
  idMaterial: 127847,
  name: 'Flask of the Whispered Pact',
  stackSize: 20,
  utility: [specDd, specHealer],
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
  utility: [specDd, specTank],
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
  utility: [specDd, specTank],
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
  utility: [specTank],
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

const ancientHealingPotion = new Potion(currentContent, {
  idMaterial: 127834,
  name: 'Ancient Healing Potion',
  stackSize: 20,
  utility: [specHybrid],
  craftMaterials: [
    {
      component: yserallineSeed,
      amount: 4
    }
  ]
});

const ancientManaPotion = new Potion(currentContent, {
  idMaterial: 127835,
  name: 'Ancient Mana Potion',
  stackSize: 20,
  utility: [specHybrid],
  craftMaterials: [
    {
      component: yserallineSeed,
      amount: 4
    }
  ]
});

const ancientRejuvenationPotion = new Potion(currentContent, {
  idMaterial: 127836,
  name: 'Ancient Rejuvenation Potion',
  stackSize: 20,
  utility: [specHybrid],
  craftMaterials: [
    {
      component: ancientHealingPotion,
      amount: 1
    },
    {
      component: ancientManaPotion,
      amount: 1
    }
  ]
});

const draughtRawMagic = new Potion(currentContent, {
  idMaterial: 127837,
  name: 'Draught of Raw Magic',
  stackSize: 20,
  utility: [specHybrid],
  craftMaterials: [
    {
      component: ancientHealingPotion,
      amount: 1
    },
    {
      component: aethril,
      amount: 20
    }
  ]
});

const sylvanElixir = new Potion(currentContent, {
  idMaterial: 127838,
  name: 'Sylvan Elixir',
  stackSize: 20,
  utility: [specHybrid],
  craftMaterials: [
    {
      component: ancientHealingPotion,
      amount: 1
    },
    {
      component: dreamleaf,
      amount: 5
    }
  ]
});

const avalancheElixir = new Potion(currentContent, {
  idMaterial: 127839,
  name: 'Avalanche Elixir',
  stackSize: 20,
  utility: [specHybrid],
  craftMaterials: [
    {
      component: ancientManaPotion,
      amount: 1
    },
    {
      component: foxFlower,
      amount: 5
    }
  ]
});

const skaggldrynk = new Potion(currentContent, {
  idMaterial: 127840,
  name: 'Skaggldrynk',
  stackSize: 20,
  utility: [specHybrid],
  craftMaterials: [
    {
      component: ancientManaPotion,
      amount: 1
    },
    {
      component: fjarnskaggl,
      amount: 5
    }
  ]
});

const skystepPotion = new Potion(currentContent, {
  idMaterial: 127841,
  name: 'Skystep Potion',
  stackSize: 20,
  utility: [specHybrid],
  craftMaterials: [
    {
      component: ancientRejuvenationPotion,
      amount: 1
    },
    {
      component: starlightRose,
      amount: 4
    }
  ]
});

const leytorrentPotion = new Potion(currentContent, {
  idMaterial: 127846,
  name: 'Leytorrent Potion',
  stackSize: 20,
  utility: [specDd, specHealer],
  craftMaterials: [
    {
      component: starlightRose,
      amount: 1
    },
    {
      component: aethril,
      amount: 2
    },
    {
      component: dreamleaf,
      amount: 2
    }
  ]
});

const potionDeadlyGrace = new Potion(currentContent, {
  idMaterial: 127843,
  name: 'Potion of Deadly Grace',
  stackSize: 20,
  utility: [specDd],
  craftMaterials: [
    {
      component: starlightRose,
      amount: 1
    },
    {
      component: fjarnskaggl,
      amount: 2
    },
    {
      component: dreamleaf,
      amount: 2
    }
  ]
});

const potionOldWar = new Potion(currentContent, {
  idMaterial: 127844,
  name: 'Potion of the Old War',
  stackSize: 20,
  utility: [specDd],
  craftMaterials: [
    {
      component: starlightRose,
      amount: 1
    },
    {
      component: fjarnskaggl,
      amount: 2
    },
    {
      component: foxFlower,
      amount: 2
    }
  ]
});

const unbendingPotion = new Potion(currentContent, {
  idMaterial: 127845,
  name: 'Unbending Potion',
  stackSize: 20,
  utility: [specTank],
  craftMaterials: [
    {
      component: starlightRose,
      amount: 1
    },
    {
      component: aethril,
      amount: 2
    },
    {
      component: foxFlower,
      amount: 2
    }
  ]
});

const potionProlongedPower = new Potion(currentContent, {
  idMaterial: 142117,
  name: 'Potion of Prolonged Power',
  stackSize: 100,
  utility: [specHybrid],
  craftNumber: 10,
  craftMaterials: [
    {
      component: bloodOfSargeras,
      amount: 1
    }
  ]
});

const SPECIALIZATIONS: Specialization[] = [
  specDd,
  specTank,
  specHealer,
  specHybrid
];
const PLANTS: Plant[] = [
  aethril,
  dreamleaf,
  foxFlower,
  fjarnskaggl,
  starlightRose,
  yserallineSeed
];
const FLASKS: Flask[] = [
  flaskIntellect,
  flaskAgility,
  flaskStrengh,
  flaskStamina
];
const POTIONS: Potion[] = [
  ancientHealingPotion,
  ancientManaPotion,
  ancientRejuvenationPotion,
  draughtRawMagic,
  sylvanElixir,
  avalancheElixir,
  skaggldrynk,
  skystepPotion,
  leytorrentPotion,
  potionDeadlyGrace,
  potionOldWar,
  unbendingPotion,
  potionProlongedPower
];

export const EXPORTDATA = {
  SPECIALIZATIONS: SPECIALIZATIONS,
  PLANTS: PLANTS,
  FLASKS: FLASKS,
  POTIONS: POTIONS
};
