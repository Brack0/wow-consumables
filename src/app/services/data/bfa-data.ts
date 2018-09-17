import { Content, Currency, Fish, Flask, Food, Meat, Plant, Potion, Reagent, Specialization } from '../../shared/model';

// Init data

/**
 * Specialization
 */
const specMelee = new Specialization({
  idSpec: 0,
  name: 'Melee',
  icon: 'assets/images/svg/battle-axe.svg'
});

const specRanged = new Specialization({
  idSpec: 1,
  name: 'Ranged',
  icon: 'assets/images/svg/wizard-staff.svg'
});

const specTank = new Specialization({
  idSpec: 2,
  name: 'Tank',
  icon: 'assets/images/svg/slashed-shield.svg'
});

const specHealer = new Specialization({
  idSpec: 3,
  name: 'Healer',
  icon: 'assets/images/svg/health-increase.svg'
});

/**
 * Content
 */
const currentContent = new Content({
  idContent: 2,
  expansionName: 'Battle for Azeroth',
  patch: 'Version 8.0.1 (27602)',
  releaseDate: new Date(2018, 8, 5),
  url: 'https://worldofwarcraft.com/en-us/news/21959894'
});

/**
 * Currency
 */

/**
 * Reagent
 */
const crystalVial = new Reagent(currentContent, {
  idMaterial: 3371,
  name: 'Crystal Vial',
  stackSize: 200
});

/**
 * Plant
 */
const riverbud = new Plant(currentContent, {
  idMaterial: 152505,
  name: 'Riverbud',
  stackSize: 200
});

const seaStalk = new Plant(currentContent, {
  idMaterial: 152511,
  name: 'Sea Stalk',
  stackSize: 200
});

const starMoss = new Plant(currentContent, {
  idMaterial: 152506,
  name: 'Star Moss',
  stackSize: 200
});

const akundasBite = new Plant(currentContent, {
  idMaterial: 152507,
  name: "Akunda's Bite",
  stackSize: 200
});

const wintersKiss = new Plant(currentContent, {
  idMaterial: 152508,
  name: "Winter's Kiss",
  stackSize: 200
});

const sirensPollen = new Plant(currentContent, {
  idMaterial: 152509,
  name: "Siren's Pollen",
  stackSize: 200
});

const anchorWeed = new Plant(currentContent, {
  idMaterial: 152510,
  name: 'Anchor Weed',
  stackSize: 200
});

/**
 * Meat
 */

/**
 * Fish
 */

/**
 * Flask
 */

/**
 * Potion
 */

/**
 * Average Food
 */
const riverOnion = new Reagent(currentContent, {
  idMaterial: 133591,
  name: 'River Onion',
  stackSize: 200
});

const fattyBearsteak = new Meat(currentContent, {
  idMaterial: 124118,
  name: 'Fatty Bearsteak',
  stackSize: 200,
  ratio: 10
});

const bearTartare = new Food(currentContent, {
  idMaterial: 133576,
  name: 'Bear Tartare',
  effect: 'Sprint for short time after killing enemy',
  stackSize: 20,
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
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
    },
    {
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
    },
    {
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
    }
  ]
});

const ancientManaPotion = new Food(currentContent, {
  idMaterial: 127835,
  name: 'Ancient Mana Potion',
  effect: 'Restores 168 000 Mana',
  stackSize: 20,
  utility: [specHealer],
  craftMaterials: [
    {
      component: bearTartare,
      amount: 70
    }
  ]
});

/**
 * Better Food
 */

/**
 * Best Food
 */

const SPECIALIZATIONS: Specialization[] = [specMelee, specRanged, specTank, specHealer];
const REAGENTS: Reagent[] = [crystalVial];
const PLANTS: Plant[] = [riverbud, seaStalk, starMoss, akundasBite, wintersKiss, sirensPollen, anchorWeed];
const MEATS: Meat[] = [];
const FISHS: Fish[] = [];
const FLASKS: Flask[] = [];
const POTIONS: Potion[] = [];
const AVERAGE_FOODS: Food[] = [bearTartare];
const BETTER_FOODS: Food[] = [ancientManaPotion];
const BEST_FOODS: Food[] = [];
const FEASTS: Food[] = [];

export const DATA = {
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
