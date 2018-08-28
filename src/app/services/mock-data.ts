import { Content, Currency, Fish, Flask, Food, Meat, Plant, Potion, Reagent, Specialization } from '../shared/model';

// Init data

/**
 * Specialization
 */
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

/**
 * Content
 */
const currentContent = new Content({
  idContent: 1,
  expansionName: 'Legion',
  patch: 'Version 7.3.5 (26365)',
  releaseDate: new Date(2018, 3, 4),
  url: 'https://worldofwarcraft.com/en-us/news/21365423'
});

/**
 * Currency
 */
const bloodOfSargeras = new Currency(currentContent, {
  idMaterial: 124124,
  name: 'Blood of Sargeras',
  stackSize: 1000
});

/**
 * Reagent
 */
const riverOnion = new Reagent(currentContent, {
  idMaterial: 133591,
  name: 'River Onion',
  stackSize: 200
});

const yserallineSeed = new Reagent(currentContent, {
  idMaterial: 128304,
  name: 'Yseralline Seed',
  stackSize: 200
});

const muskenbutter = new Reagent(currentContent, {
  idMaterial: 133590,
  name: 'Muskenbutter',
  stackSize: 200
});

const wildfowlEgg = new Reagent(currentContent, {
  idMaterial: 124121,
  name: 'Wildfowl Egg',
  stackSize: 200
});

const royalOlive = new Reagent(currentContent, {
  idMaterial: 133593,
  name: 'Royal Olive',
  stackSize: 200
});

const flakedSeaSalt = new Reagent(currentContent, {
  idMaterial: 133588,
  name: 'Flaked Sea Salt',
  stackSize: 200
});

const dalapenoPepper = new Reagent(currentContent, {
  idMaterial: 133589,
  name: 'Dalapeño Pepper',
  stackSize: 200
});

const leyblood = new Reagent(currentContent, {
  idMaterial: 124120,
  name: 'Leyblood',
  stackSize: 200
});

const stonedarkSnail = new Reagent(currentContent, {
  idMaterial: 133592,
  name: 'Stonedark Snail',
  stackSize: 200
});

const gemChip = new Reagent(currentContent, {
  idMaterial: 129100,
  name: 'Gem Chip',
  stackSize: 200
});

/**
 * Plant
 */
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

/**
 * Meat
 */
const fattyBearsteak = new Meat(currentContent, {
  idMaterial: 124118,
  name: 'Fatty Bearsteak',
  stackSize: 200,
  currency: bloodOfSargeras,
  ratio: 10
});

const leanShank = new Meat(currentContent, {
  idMaterial: 124117,
  name: 'Lean Shank',
  stackSize: 200,
  currency: bloodOfSargeras,
  ratio: 10
});

const bigGamyRibs = new Meat(currentContent, {
  idMaterial: 124119,
  name: 'Big Gamy Ribs',
  stackSize: 200,
  currency: bloodOfSargeras,
  ratio: 10
});

const sliceOfBacon = new Meat(currentContent, {
  idMaterial: 133680,
  name: 'Slice of Bacon',
  stackSize: 200,
  currency: bloodOfSargeras,
  ratio: 10
});

/**
 * Fish
 */
const mossgillPerch = new Fish(currentContent, {
  idMaterial: 124108,
  name: 'Mossgill Perch',
  stackSize: 200,
  currency: bloodOfSargeras,
  ratio: 10
});

const silverMackerel = new Fish(currentContent, {
  idMaterial: 133607,
  name: 'Silver Mackerel',
  stackSize: 200
});

const cursedQueenfish = new Fish(currentContent, {
  idMaterial: 124107,
  name: 'Cursed Queenfish',
  stackSize: 200,
  currency: bloodOfSargeras,
  ratio: 10
});

const stormray = new Fish(currentContent, {
  idMaterial: 124110,
  name: 'Stormray',
  stackSize: 200,
  currency: bloodOfSargeras,
  ratio: 10
});

const runescaleKoi = new Fish(currentContent, {
  idMaterial: 124111,
  name: 'Runescale Koi',
  stackSize: 200,
  currency: bloodOfSargeras,
  ratio: 10
});

const blackBarracuda = new Fish(currentContent, {
  idMaterial: 124112,
  name: 'Black Barracuda',
  stackSize: 200,
  currency: bloodOfSargeras,
  ratio: 10
});

const highmountainSalmon = new Fish(currentContent, {
  idMaterial: 124109,
  name: 'Highmountain Salmon',
  stackSize: 200,
  currency: bloodOfSargeras,
  ratio: 10
});

/**
 * Flask
 */
const flaskIntellect = new Flask(currentContent, {
  idMaterial: 127847,
  name: 'Flask of the Whispered Pact',
  effect: 'Grant 1300 Intellect',
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
  effect: 'Grant 1300 Agility',
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
  effect: 'Grant 1300 Strength',
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
  effect: 'Grant 1950 Stamina',
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

const flaskCauldron = new Flask(currentContent, {
  idMaterial: 127851,
  name: 'Spirit Cauldron',
  effect: 'Creates 30 flasks based on class and talents',
  maxNumber: 20,
  stackSize: 20,
  utility: [specHybrid],
  craftMaterials: [
    {
      component: flaskIntellect,
      amount: 5
    },
    {
      component: flaskAgility,
      amount: 5
    },
    {
      component: flaskStrengh,
      amount: 5
    },
    {
      component: flaskStamina,
      amount: 5
    },
    {
      component: bloodOfSargeras,
      amount: 1
    }
  ]
});

/**
 * Potion
 */
const ancientHealingPotion = new Potion(currentContent, {
  idMaterial: 127834,
  name: 'Ancient Healing Potion',
  effect: 'Restores 480 000 Health',
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
  effect: 'Restores 168 000 Mana',
  stackSize: 20,
  utility: [specHealer],
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
  effect: 'Restores 456000 to 504000 Health\nand 114000 to 126000 Mana',
  stackSize: 20,
  utility: [specHealer],
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
  effect: 'Cosmetic effect',
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
  effect: 'Grant Well-Rested\nIncrease all stats by 10%',
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
  effect: 'Transform you to a meteor\nPrevents next falling damage',
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
  effect: 'Invisibility Potion',
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
  effect: 'Increase movement speed by 150%',
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
  effect: 'Restores 240 000 mana over 10 seconds',
  maxNumber: 500,
  stackSize: 20,
  utility: [specHealer],
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
  effect: 'Unleash a bolt of energy to target\n(Ranged DPS)',
  maxNumber: 500,
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
  effect: 'Summons pets that mimic abilities\n(Melee DPS)',
  maxNumber: 500,
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
  effect: 'Increases armor by 3500',
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
  effect: 'Increases all stats by 2500',
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

/**
 * Average Food
 */
const bearTartare1 = new Food(currentContent, {
  idMaterial: 133576,
  name: 'Bear Tartare',
  effect: 'Sprint for short time after killing enemy',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: fattyBearsteak,
      amount: 5
    },
    {
      component: riverOnion,
      amount: 1
    }
  ]
});

const bearTartare2 = new Food(currentContent, {
  idMaterial: 133576,
  name: 'Bear Tartare',
  effect: 'Sprint for short time after killing enemy',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: fattyBearsteak,
      amount: 5
    },
    {
      component: riverOnion,
      amount: 1
    }
  ]
});

const bearTartare3 = new Food(currentContent, {
  idMaterial: 133576,
  name: 'Bear Tartare',
  effect: 'Sprint for short time after killing enemy',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: fattyBearsteak,
      amount: 5
    },
    {
      component: riverOnion,
      amount: 1
    }
  ]
});

const deepFriedMossgill1 = new Food(currentContent, {
  idMaterial: 133561,
  name: 'Deep-Fried Mossgill',
  effect: 'Grant 225 Haste',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: mossgillPerch,
      amount: 5
    },
    {
      component: muskenbutter,
      amount: 5
    }
  ]
});

const deepFriedMossgill2 = new Food(currentContent, {
  idMaterial: 133561,
  name: 'Deep-Fried Mossgill',
  effect: 'Grant 225 Haste',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: mossgillPerch,
      amount: 5
    },
    {
      component: muskenbutter,
      amount: 5
    }
  ]
});

const deepFriedMossgill3 = new Food(currentContent, {
  idMaterial: 133561,
  name: 'Deep-Fried Mossgill',
  effect: 'Grant 225 Haste',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: mossgillPerch,
      amount: 5
    },
    {
      component: muskenbutter,
      amount: 5
    }
  ]
});

const driedMackerelStrips1 = new Food(currentContent, {
  idMaterial: 133575,
  name: 'Dried Mackerel Strips',
  effect: 'Restore Health/Mana',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: silverMackerel,
      amount: 5
    }
  ]
});

const driedMackerelStrips2 = new Food(currentContent, {
  idMaterial: 133575,
  name: 'Dried Mackerel Strips',
  effect: 'Restore Health/Mana',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: silverMackerel,
      amount: 5
    }
  ]
});

const driedMackerelStrips3 = new Food(currentContent, {
  idMaterial: 133575,
  name: 'Dried Mackerel Strips',
  effect: 'Restore Health/Mana',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: silverMackerel,
      amount: 5
    }
  ]
});

const faronaarFizz1 = new Food(currentContent, {
  idMaterial: 133563,
  name: 'Faronaar Fizz',
  effect: 'Grant 225 Versatility',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: wildfowlEgg,
      amount: 5
    },
    {
      component: riverOnion,
      amount: 2
    },
    {
      component: royalOlive,
      amount: 3
    }
  ]
});

const faronaarFizz2 = new Food(currentContent, {
  idMaterial: 133563,
  name: 'Faronaar Fizz',
  effect: 'Grant 225 Versatility',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: wildfowlEgg,
      amount: 5
    },
    {
      component: riverOnion,
      amount: 2
    },
    {
      component: royalOlive,
      amount: 3
    }
  ]
});

const faronaarFizz3 = new Food(currentContent, {
  idMaterial: 133563,
  name: 'Faronaar Fizz',
  effect: 'Grant 225 Versatility',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: wildfowlEgg,
      amount: 5
    },
    {
      component: riverOnion,
      amount: 2
    },
    {
      component: royalOlive,
      amount: 3
    }
  ]
});

const fighterChow1 = new Food(currentContent, {
  idMaterial: 133577,
  name: 'Fighter Chow',
  effect: '400% Increased Health Regeneration',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: cursedQueenfish,
      amount: 5
    },
    {
      component: royalOlive,
      amount: 1
    }
  ]
});

const fighterChow2 = new Food(currentContent, {
  idMaterial: 133577,
  name: 'Fighter Chow',
  effect: '400% Increased Health Regeneration',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: cursedQueenfish,
      amount: 5
    },
    {
      component: royalOlive,
      amount: 1
    }
  ]
});

const fighterChow3 = new Food(currentContent, {
  idMaterial: 133577,
  name: 'Fighter Chow',
  effect: '400% Increased Health Regeneration',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: cursedQueenfish,
      amount: 5
    },
    {
      component: royalOlive,
      amount: 1
    }
  ]
});

const pickledStormray1 = new Food(currentContent, {
  idMaterial: 133562,
  name: 'Pickled Stormray',
  effect: 'Grant 225 Mastery',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: stormray,
      amount: 5
    },
    {
      component: flakedSeaSalt,
      amount: 3
    }
  ]
});

const pickledStormray2 = new Food(currentContent, {
  idMaterial: 133562,
  name: 'Pickled Stormray',
  effect: 'Grant 225 Mastery',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: stormray,
      amount: 5
    },
    {
      component: flakedSeaSalt,
      amount: 3
    }
  ]
});

const pickledStormray3 = new Food(currentContent, {
  idMaterial: 133562,
  name: 'Pickled Stormray',
  effect: 'Grant 225 Mastery',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: stormray,
      amount: 5
    },
    {
      component: flakedSeaSalt,
      amount: 3
    }
  ]
});

const saltAndPepperShank1 = new Food(currentContent, {
  idMaterial: 133557,
  name: 'Salt and Pepper Shank',
  effect: 'Grant 225 Critical Strike',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: leanShank,
      amount: 5
    },
    {
      component: dalapenoPepper,
      amount: 2
    },
    {
      component: flakedSeaSalt,
      amount: 2
    }
  ]
});

const saltAndPepperShank2 = new Food(currentContent, {
  idMaterial: 133557,
  name: 'Salt and Pepper Shank',
  effect: 'Grant 225 Critical Strike',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: leanShank,
      amount: 5
    },
    {
      component: dalapenoPepper,
      amount: 2
    },
    {
      component: flakedSeaSalt,
      amount: 2
    }
  ]
});

const saltAndPepperShank3 = new Food(currentContent, {
  idMaterial: 133557,
  name: 'Salt and Pepper Shank',
  effect: 'Grant 225 Critical Strike',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: leanShank,
      amount: 5
    },
    {
      component: dalapenoPepper,
      amount: 2
    },
    {
      component: flakedSeaSalt,
      amount: 2
    }
  ]
});

const spicedRibRoast1 = new Food(currentContent, {
  idMaterial: 133564,
  name: 'Spiced Rib Roast',
  effect: 'Pepper Breath Fireballs',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: bigGamyRibs,
      amount: 5
    },
    {
      component: dalapenoPepper,
      amount: 5
    }
  ]
});

const spicedRibRoast2 = new Food(currentContent, {
  idMaterial: 133564,
  name: 'Spiced Rib Roast',
  effect: 'Pepper Breath Fireballs',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: bigGamyRibs,
      amount: 5
    },
    {
      component: dalapenoPepper,
      amount: 5
    }
  ]
});

const spicedRibRoast3 = new Food(currentContent, {
  idMaterial: 133564,
  name: 'Spiced Rib Roast',
  effect: 'Pepper Breath Fireballs',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: bigGamyRibs,
      amount: 5
    },
    {
      component: dalapenoPepper,
      amount: 5
    }
  ]
});

/**
 * Better Food
 */
const suramarSurfAndTurf1 = new Food(currentContent, {
  idMaterial: 133566,
  name: 'Suramar Surf and Turf',
  effect: 'Grant 300 Haste',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: runescaleKoi,
      amount: 5
    },
    {
      component: leanShank,
      amount: 5
    },
    {
      component: flakedSeaSalt,
      amount: 2
    },
    {
      component: royalOlive,
      amount: 4
    }
  ]
});

const suramarSurfAndTurf2 = new Food(currentContent, {
  idMaterial: 133566,
  name: 'Suramar Surf and Turf',
  effect: 'Grant 300 Haste',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: runescaleKoi,
      amount: 5
    },
    {
      component: leanShank,
      amount: 5
    },
    {
      component: flakedSeaSalt,
      amount: 2
    },
    {
      component: royalOlive,
      amount: 4
    }
  ]
});

const suramarSurfAndTurf3 = new Food(currentContent, {
  idMaterial: 133566,
  name: 'Suramar Surf and Turf',
  effect: 'Grant 300 Haste',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: runescaleKoi,
      amount: 5
    },
    {
      component: leanShank,
      amount: 5
    },
    {
      component: flakedSeaSalt,
      amount: 2
    },
    {
      component: royalOlive,
      amount: 4
    }
  ]
});

const koiScentedStormray1 = new Food(currentContent, {
  idMaterial: 133568,
  name: 'Koi-Scented Stormray',
  effect: 'Grant 300 Versatility',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: runescaleKoi,
      amount: 5
    },
    {
      component: stormray,
      amount: 5
    },
    {
      component: flakedSeaSalt,
      amount: 2
    },
    {
      component: muskenbutter,
      amount: 2
    }
  ]
});

const koiScentedStormray2 = new Food(currentContent, {
  idMaterial: 133568,
  name: 'Koi-Scented Stormray',
  effect: 'Grant 300 Versatility',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: runescaleKoi,
      amount: 5
    },
    {
      component: stormray,
      amount: 5
    },
    {
      component: flakedSeaSalt,
      amount: 2
    },
    {
      component: muskenbutter,
      amount: 2
    }
  ]
});

const koiScentedStormray3 = new Food(currentContent, {
  idMaterial: 133568,
  name: 'Koi-Scented Stormray',
  effect: 'Grant 300 Versatility',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: runescaleKoi,
      amount: 5
    },
    {
      component: stormray,
      amount: 5
    },
    {
      component: flakedSeaSalt,
      amount: 2
    },
    {
      component: muskenbutter,
      amount: 2
    }
  ]
});

const barracudaMrglgagh1 = new Food(currentContent, {
  idMaterial: 133567,
  name: 'Barracuda Mrglgagh',
  effect: 'Grant 300 Mastery',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: leyblood,
      amount: 5
    },
    {
      component: blackBarracuda,
      amount: 5
    },
    {
      component: muskenbutter,
      amount: 4
    },
    {
      component: riverOnion,
      amount: 1
    }
  ]
});

const barracudaMrglgagh2 = new Food(currentContent, {
  idMaterial: 133567,
  name: 'Barracuda Mrglgagh',
  effect: 'Grant 300 Mastery',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: leyblood,
      amount: 5
    },
    {
      component: blackBarracuda,
      amount: 5
    },
    {
      component: muskenbutter,
      amount: 4
    },
    {
      component: riverOnion,
      amount: 1
    }
  ]
});

const barracudaMrglgagh3 = new Food(currentContent, {
  idMaterial: 133567,
  name: 'Barracuda Mrglgagh',
  effect: 'Grant 300 Mastery',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: leyblood,
      amount: 5
    },
    {
      component: blackBarracuda,
      amount: 5
    },
    {
      component: muskenbutter,
      amount: 4
    },
    {
      component: riverOnion,
      amount: 1
    }
  ]
});

const leybequeRibs1 = new Food(currentContent, {
  idMaterial: 133565,
  name: 'Leybeque Ribs',
  effect: 'Grant 300 Critical Strike',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: leyblood,
      amount: 5
    },
    {
      component: bigGamyRibs,
      amount: 5
    },
    {
      component: dalapenoPepper,
      amount: 5
    }
  ]
});

const leybequeRibs2 = new Food(currentContent, {
  idMaterial: 133565,
  name: 'Leybeque Ribs',
  effect: 'Grant 300 Critical Strike',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: leyblood,
      amount: 5
    },
    {
      component: bigGamyRibs,
      amount: 5
    },
    {
      component: dalapenoPepper,
      amount: 5
    }
  ]
});

const leybequeRibs3 = new Food(currentContent, {
  idMaterial: 133565,
  name: 'Leybeque Ribs',
  effect: 'Grant 300 Critical Strike',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: leyblood,
      amount: 5
    },
    {
      component: bigGamyRibs,
      amount: 5
    },
    {
      component: dalapenoPepper,
      amount: 5
    }
  ]
});

const drogbarStyleSalmon1 = new Food(currentContent, {
  idMaterial: 133569,
  name: 'Drogbar-Style Salmon',
  effect: 'Pepper Breath Fireballs',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: highmountainSalmon,
      amount: 5
    },
    {
      component: stonedarkSnail,
      amount: 10
    },
    {
      component: dalapenoPepper,
      amount: 4
    },
    {
      component: royalOlive,
      amount: 10
    }
  ]
});

const drogbarStyleSalmon2 = new Food(currentContent, {
  idMaterial: 133569,
  name: 'Drogbar-Style Salmon',
  effect: 'Pepper Breath Fireballs',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: highmountainSalmon,
      amount: 5
    },
    {
      component: stonedarkSnail,
      amount: 10
    },
    {
      component: dalapenoPepper,
      amount: 4
    },
    {
      component: royalOlive,
      amount: 10
    }
  ]
});

const drogbarStyleSalmon3 = new Food(currentContent, {
  idMaterial: 133569,
  name: 'Drogbar-Style Salmon',
  effect: 'Pepper Breath Fireballs',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: highmountainSalmon,
      amount: 5
    },
    {
      component: stonedarkSnail,
      amount: 10
    },
    {
      component: dalapenoPepper,
      amount: 4
    },
    {
      component: royalOlive,
      amount: 10
    }
  ]
});

/**
 * Best Food
 */
const azshariSalad1 = new Food(currentContent, {
  idMaterial: 133571,
  name: 'Azshari Salad',
  effect: 'Grant 375 Haste',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: suramarSurfAndTurf3,
      amount: 1
    },
    {
      component: dreamleaf,
      amount: 5
    },
    {
      component: fjarnskaggl,
      amount: 5
    },
    {
      component: foxFlower,
      amount: 5
    },
    {
      component: aethril,
      amount: 5
    }
  ]
});

const azshariSalad2 = new Food(currentContent, {
  idMaterial: 133571,
  name: 'Azshari Salad',
  effect: 'Grant 375 Haste',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: suramarSurfAndTurf3,
      amount: 1
    },
    {
      component: dreamleaf,
      amount: 5
    },
    {
      component: fjarnskaggl,
      amount: 5
    },
    {
      component: foxFlower,
      amount: 5
    },
    {
      component: aethril,
      amount: 5
    }
  ]
});

const azshariSalad3 = new Food(currentContent, {
  idMaterial: 133571,
  name: 'Azshari Salad',
  effect: 'Grant 375 Haste',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: suramarSurfAndTurf3,
      amount: 1
    },
    {
      component: dreamleaf,
      amount: 5
    },
    {
      component: fjarnskaggl,
      amount: 5
    },
    {
      component: foxFlower,
      amount: 5
    },
    {
      component: aethril,
      amount: 5
    }
  ]
});

const seedBatteredFishPlate1 = new Food(currentContent, {
  idMaterial: 133573,
  name: 'Seed-Battered Fish Plate',
  effect: 'Grant 375 Versatility',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: koiScentedStormray3,
      amount: 1
    },
    {
      component: silverMackerel,
      amount: 5
    },
    {
      component: yserallineSeed,
      amount: 20
    },
    {
      component: muskenbutter,
      amount: 3
    },
    {
      component: dalapenoPepper,
      amount: 2
    }
  ]
});

const seedBatteredFishPlate2 = new Food(currentContent, {
  idMaterial: 133573,
  name: 'Seed-Battered Fish Plate',
  effect: 'Grant 375 Versatility',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: koiScentedStormray3,
      amount: 1
    },
    {
      component: silverMackerel,
      amount: 5
    },
    {
      component: yserallineSeed,
      amount: 20
    },
    {
      component: muskenbutter,
      amount: 3
    },
    {
      component: dalapenoPepper,
      amount: 2
    }
  ]
});

const seedBatteredFishPlate3 = new Food(currentContent, {
  idMaterial: 133573,
  name: 'Seed-Battered Fish Plate',
  effect: 'Grant 375 Versatility',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: koiScentedStormray3,
      amount: 1
    },
    {
      component: silverMackerel,
      amount: 5
    },
    {
      component: yserallineSeed,
      amount: 20
    },
    {
      component: muskenbutter,
      amount: 3
    },
    {
      component: dalapenoPepper,
      amount: 2
    }
  ]
});

const nightborneDelicacyPlatter1 = new Food(currentContent, {
  idMaterial: 133572,
  name: 'Nightborne Delicacy Platter',
  effect: 'Grant 375 Mastery',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: barracudaMrglgagh3,
      amount: 1
    },
    {
      component: gemChip,
      amount: 20
    },
    {
      component: starlightRose,
      amount: 1
    },
    {
      component: wildfowlEgg,
      amount: 5
    },
    {
      component: stonedarkSnail,
      amount: 10
    }
  ]
});

const nightborneDelicacyPlatter2 = new Food(currentContent, {
  idMaterial: 133572,
  name: 'Nightborne Delicacy Platter',
  effect: 'Grant 375 Mastery',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: barracudaMrglgagh3,
      amount: 1
    },
    {
      component: gemChip,
      amount: 20
    },
    {
      component: starlightRose,
      amount: 1
    },
    {
      component: wildfowlEgg,
      amount: 5
    },
    {
      component: stonedarkSnail,
      amount: 10
    }
  ]
});

const nightborneDelicacyPlatter3 = new Food(currentContent, {
  idMaterial: 133572,
  name: 'Nightborne Delicacy Platter',
  effect: 'Grant 375 Mastery',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: barracudaMrglgagh3,
      amount: 1
    },
    {
      component: gemChip,
      amount: 20
    },
    {
      component: starlightRose,
      amount: 1
    },
    {
      component: wildfowlEgg,
      amount: 5
    },
    {
      component: stonedarkSnail,
      amount: 10
    }
  ]
});

const theHungryMagister1 = new Food(currentContent, {
  idMaterial: 133570,
  name: 'The Hungry Magister',
  effect: 'Grant 375 Critical Strike',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: leybequeRibs3,
      amount: 1
    },
    {
      component: highmountainSalmon,
      amount: 5
    },
    {
      component: fattyBearsteak,
      amount: 5
    },
    {
      component: flakedSeaSalt,
      amount: 3
    },
    {
      component: dalapenoPepper,
      amount: 2
    }
  ]
});

const theHungryMagister2 = new Food(currentContent, {
  idMaterial: 133570,
  name: 'The Hungry Magister',
  effect: 'Grant 375 Critical Strike',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: leybequeRibs3,
      amount: 1
    },
    {
      component: highmountainSalmon,
      amount: 5
    },
    {
      component: fattyBearsteak,
      amount: 5
    },
    {
      component: flakedSeaSalt,
      amount: 3
    },
    {
      component: dalapenoPepper,
      amount: 2
    }
  ]
});

const theHungryMagister3 = new Food(currentContent, {
  idMaterial: 133570,
  name: 'The Hungry Magister',
  effect: 'Grant 375 Critical Strike',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: leybequeRibs3,
      amount: 1
    },
    {
      component: highmountainSalmon,
      amount: 5
    },
    {
      component: fattyBearsteak,
      amount: 5
    },
    {
      component: flakedSeaSalt,
      amount: 3
    },
    {
      component: dalapenoPepper,
      amount: 2
    }
  ]
});

const fishbrulSpecial1 = new Food(currentContent, {
  idMaterial: 133574,
  name: 'Fishbrul Special',
  effect: 'Pepper Breath Fireballs',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: drogbarStyleSalmon3,
      amount: 1
    },
    {
      component: cursedQueenfish,
      amount: 5
    },
    {
      component: mossgillPerch,
      amount: 5
    },
    {
      component: stonedarkSnail,
      amount: 10
    },
    {
      component: dalapenoPepper,
      amount: 5
    }
  ]
});

const fishbrulSpecial2 = new Food(currentContent, {
  idMaterial: 133574,
  name: 'Fishbrul Special',
  effect: 'Pepper Breath Fireballs',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: drogbarStyleSalmon3,
      amount: 1
    },
    {
      component: cursedQueenfish,
      amount: 5
    },
    {
      component: mossgillPerch,
      amount: 5
    },
    {
      component: stonedarkSnail,
      amount: 10
    },
    {
      component: dalapenoPepper,
      amount: 5
    }
  ]
});

const fishbrulSpecial3 = new Food(currentContent, {
  idMaterial: 133574,
  name: 'Fishbrul Special',
  effect: 'Pepper Breath Fireballs',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: drogbarStyleSalmon3,
      amount: 1
    },
    {
      component: cursedQueenfish,
      amount: 5
    },
    {
      component: mossgillPerch,
      amount: 5
    },
    {
      component: stonedarkSnail,
      amount: 10
    },
    {
      component: dalapenoPepper,
      amount: 5
    }
  ]
});

const crispyBacon1 = new Food(currentContent, {
  idMaterial: 133681,
  name: 'Crispy Bacon',
  effect: 'Extends the effects of any other food buff by an hour',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 5,
  craftMaterials: [
    {
      component: sliceOfBacon,
      amount: 5
    },
    {
      component: dalapenoPepper,
      amount: 5
    }
  ]
});

const crispyBacon2 = new Food(currentContent, {
  idMaterial: 133681,
  name: 'Crispy Bacon',
  effect: 'Extends the effects of any other food buff by an hour',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 7,
  craftMaterials: [
    {
      component: sliceOfBacon,
      amount: 5
    },
    {
      component: dalapenoPepper,
      amount: 5
    }
  ]
});

const crispyBacon3 = new Food(currentContent, {
  idMaterial: 133681,
  name: 'Crispy Bacon',
  effect: 'Extends the effects of any other food buff by an hour',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 10,
  craftMaterials: [
    {
      component: sliceOfBacon,
      amount: 5
    },
    {
      component: dalapenoPepper,
      amount: 5
    }
  ]
});

const heartyFeast1 = new Food(currentContent, {
  idMaterial: 133578,
  name: 'Hearty Feast',
  effect: 'Increases a stat by 400 for 35 players',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 1,
  craftMaterials: [
    {
      component: saltAndPepperShank3,
      amount: 5
    },
    {
      component: deepFriedMossgill3,
      amount: 5
    },
    {
      component: pickledStormray3,
      amount: 5
    },
    {
      component: faronaarFizz3,
      amount: 5
    },
    {
      component: spicedRibRoast3,
      amount: 5
    },
    {
      component: sliceOfBacon,
      amount: 5
    }
  ]
});

const heartyFeast2 = new Food(currentContent, {
  idMaterial: 133578,
  name: 'Hearty Feast',
  effect: 'Increases a stat by 400 for 35 players',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 1,
  craftMaterials: [
    {
      component: saltAndPepperShank3,
      amount: 4
    },
    {
      component: deepFriedMossgill3,
      amount: 4
    },
    {
      component: pickledStormray3,
      amount: 4
    },
    {
      component: faronaarFizz3,
      amount: 4
    },
    {
      component: spicedRibRoast3,
      amount: 4
    },
    {
      component: sliceOfBacon,
      amount: 4
    }
  ]
});

const heartyFeast3 = new Food(currentContent, {
  idMaterial: 133578,
  name: 'Hearty Feast',
  effect: 'Increases a stat by 400 for 35 players',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 1,
  craftMaterials: [
    {
      component: saltAndPepperShank3,
      amount: 3
    },
    {
      component: deepFriedMossgill3,
      amount: 3
    },
    {
      component: pickledStormray3,
      amount: 3
    },
    {
      component: faronaarFizz3,
      amount: 3
    },
    {
      component: spicedRibRoast3,
      amount: 3
    },
    {
      component: sliceOfBacon,
      amount: 3
    }
  ]
});

const lavishSuramarFeast1 = new Food(currentContent, {
  idMaterial: 133579,
  name: 'Lavish Suramar Feast',
  effect: 'Increases a stat by 500 for 35 players',
  stackSize: 20,
  utility: [specHybrid],
  rank: 1,
  craftNumber: 1,
  craftMaterials: [
    {
      component: leybequeRibs3,
      amount: 5
    },
    {
      component: suramarSurfAndTurf3,
      amount: 5
    },
    {
      component: barracudaMrglgagh3,
      amount: 5
    },
    {
      component: koiScentedStormray3,
      amount: 5
    },
    {
      component: drogbarStyleSalmon3,
      amount: 5
    },
    {
      component: sliceOfBacon,
      amount: 5
    }
  ]
});

const lavishSuramarFeast2 = new Food(currentContent, {
  idMaterial: 133579,
  name: 'Lavish Suramar Feast',
  effect: 'Increases a stat by 500 for 35 players',
  stackSize: 20,
  utility: [specHybrid],
  rank: 2,
  craftNumber: 1,
  craftMaterials: [
    {
      component: leybequeRibs3,
      amount: 4
    },
    {
      component: suramarSurfAndTurf3,
      amount: 4
    },
    {
      component: barracudaMrglgagh3,
      amount: 4
    },
    {
      component: koiScentedStormray3,
      amount: 4
    },
    {
      component: drogbarStyleSalmon3,
      amount: 4
    },
    {
      component: sliceOfBacon,
      amount: 4
    }
  ]
});

const lavishSuramarFeast3 = new Food(currentContent, {
  idMaterial: 133579,
  name: 'Lavish Suramar Feast',
  effect: 'Increases a stat by 500 for 35 players',
  stackSize: 20,
  utility: [specHybrid],
  rank: 3,
  craftNumber: 1,
  craftMaterials: [
    {
      component: leybequeRibs3,
      amount: 3
    },
    {
      component: suramarSurfAndTurf3,
      amount: 3
    },
    {
      component: barracudaMrglgagh3,
      amount: 3
    },
    {
      component: koiScentedStormray3,
      amount: 3
    },
    {
      component: drogbarStyleSalmon3,
      amount: 3
    },
    {
      component: sliceOfBacon,
      amount: 3
    }
  ]
});

const SPECIALIZATIONS: Specialization[] = [specDd, specTank, specHealer, specHybrid];
const REAGENTS: Reagent[] = [
  muskenbutter,
  riverOnion,
  yserallineSeed,
  wildfowlEgg,
  royalOlive,
  flakedSeaSalt,
  dalapenoPepper,
  leyblood,
  stonedarkSnail,
  gemChip
];
const PLANTS: Plant[] = [aethril, dreamleaf, foxFlower, fjarnskaggl, starlightRose];
const MEATS: Meat[] = [fattyBearsteak, leanShank, bigGamyRibs, sliceOfBacon];
const FISHS: Fish[] = [
  mossgillPerch,
  silverMackerel,
  cursedQueenfish,
  stormray,
  runescaleKoi,
  blackBarracuda,
  highmountainSalmon
];
const FLASKS: Flask[] = [flaskIntellect, flaskAgility, flaskStrengh, flaskStamina, flaskCauldron];
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
const AVERAGE_FOODS: Food[][] = [
  [bearTartare1, bearTartare2, bearTartare3],
  [deepFriedMossgill1, deepFriedMossgill2, deepFriedMossgill3],
  [driedMackerelStrips1, driedMackerelStrips2, driedMackerelStrips3],
  [faronaarFizz1, faronaarFizz2, faronaarFizz3],
  [fighterChow1, fighterChow2, fighterChow3],
  [pickledStormray1, pickledStormray2, pickledStormray3],
  [saltAndPepperShank1, saltAndPepperShank2, saltAndPepperShank3],
  [spicedRibRoast1, spicedRibRoast2, spicedRibRoast3]
];
const BETTER_FOODS: Food[][] = [
  [suramarSurfAndTurf1, suramarSurfAndTurf2, suramarSurfAndTurf3],
  [koiScentedStormray1, koiScentedStormray2, koiScentedStormray3],
  [barracudaMrglgagh1, barracudaMrglgagh2, barracudaMrglgagh3],
  [leybequeRibs1, leybequeRibs2, leybequeRibs3],
  [drogbarStyleSalmon1, drogbarStyleSalmon2, drogbarStyleSalmon3]
];
const BEST_FOODS: Food[][] = [
  [azshariSalad1, azshariSalad2, azshariSalad3],
  [seedBatteredFishPlate1, seedBatteredFishPlate2, seedBatteredFishPlate3],
  [nightborneDelicacyPlatter1, nightborneDelicacyPlatter2, nightborneDelicacyPlatter3],
  [theHungryMagister1, theHungryMagister2, theHungryMagister3],
  [fishbrulSpecial1, fishbrulSpecial2, fishbrulSpecial3],
  [crispyBacon1, crispyBacon2, crispyBacon3]
];
const FEASTS: Food[][] = [
  [lavishSuramarFeast1, lavishSuramarFeast2, lavishSuramarFeast3],
  [heartyFeast1, heartyFeast2, heartyFeast3]
];

export const EXPORTDATA = {
  CONTENT: currentContent,
  SPECIALIZATIONS: SPECIALIZATIONS,
  REAGENTS: REAGENTS,
  PLANTS: PLANTS,
  MEATS: MEATS,
  FISHS: FISHS,
  FLASKS: FLASKS,
  POTIONS: POTIONS,
  AVERAGE_FOODS: AVERAGE_FOODS,
  BETTER_FOODS: BETTER_FOODS,
  BEST_FOODS: BEST_FOODS,
  FEASTS: FEASTS
};
