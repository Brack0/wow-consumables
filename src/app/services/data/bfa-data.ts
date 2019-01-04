import {
  ConsumableCategory,
  Content,
  Fish,
  Flask,
  Food,
  MaterialCategory,
  Meat,
  Plant,
  Potion,
  Reagent,
  Specialization
} from '../../shared/model';

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
  patch: 'Version 8.1.0 (28833)',
  releaseDate: new Date(2018, 11, 19),
  url: 'https://worldofwarcraft.com/en-us/news/228248924'
});

/**
 * Reagent
 */
const crystalVial = new Reagent(currentContent, {
  idMaterial: 3371,
  name: 'Crystal Vial',
  stackSize: 200
});

const expulsom = new Reagent(currentContent, {
  idMaterial: 152668,
  name: 'Expulsom',
  stackSize: 200
});

const hydrocore = new Reagent(currentContent, {
  idMaterial: 162460,
  name: 'Hydrocore',
  stackSize: 200
});

const wildFlour = new Reagent(currentContent, {
  idMaterial: 160399,
  name: 'Wild Flour',
  stackSize: 200
});

const powderedSugar = new Reagent(currentContent, {
  idMaterial: 160712,
  name: 'Powdered Sugar',
  stackSize: 200
});

const freshPotato = new Reagent(currentContent, {
  idMaterial: 160709,
  name: 'Fresh Potato',
  stackSize: 200
});

const choralHoney = new Reagent(currentContent, {
  idMaterial: 160398,
  name: 'Choral Honey',
  stackSize: 200
});

const foosaka = new Reagent(currentContent, {
  idMaterial: 160400,
  name: 'Foosaka',
  stackSize: 200
});

const wildBerries = new Reagent(currentContent, {
  idMaterial: 160710,
  name: 'Wild Berries',
  stackSize: 200
});

const majorsFrothyCoffee = new Reagent(currentContent, {
  idMaterial: 160705,
  name: "Major's Frothy Coffee",
  stackSize: 200
});

const sanguicell = new Reagent(currentContent, {
  idMaterial: 162461,
  name: 'Sanguicell',
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
const thickPaleoSteak = new Meat(currentContent, {
  idMaterial: 154899,
  name: 'Thick Paleo Steak',
  stackSize: 200
});

const meatyHaunch = new Meat(currentContent, {
  idMaterial: 154898,
  name: 'Meaty Haunch',
  stackSize: 200
});

const stringyLoins = new Meat(currentContent, {
  idMaterial: 154897,
  name: 'Stringy Loins',
  stackSize: 200
});

const brinyFlesh = new Meat(currentContent, {
  idMaterial: 152631,
  name: 'Briny Flesh',
  stackSize: 200
});

const cursedHaunch = new Meat(currentContent, {
  idMaterial: 163782,
  name: 'Cursed Haunch',
  stackSize: 200
});

/**
 * Fish
 */
const midnightSalmon = new Fish(currentContent, {
  idMaterial: 162515,
  name: 'Midnight Salmon',
  stackSize: 200
});

const redtailLoach = new Fish(currentContent, {
  idMaterial: 152549,
  name: 'Redtail Loach',
  stackSize: 200
});

const tiragardePerch = new Fish(currentContent, {
  idMaterial: 152548,
  name: 'Tiragarde Perch',
  stackSize: 200
});

const greatSeaCatfish = new Fish(currentContent, {
  idMaterial: 152547,
  name: 'Great Sea Catfish',
  stackSize: 200
});

const laneSnapper = new Fish(currentContent, {
  idMaterial: 152546,
  name: 'Lane Snapper',
  stackSize: 200
});

const frenziedFangtooth = new Fish(currentContent, {
  idMaterial: 152545,
  name: 'Frenzied Fangtooth',
  stackSize: 200
});

const slimyMackerel = new Fish(currentContent, {
  idMaterial: 152544,
  name: 'Slimy Mackerel',
  stackSize: 200
});

const sandShifter = new Fish(currentContent, {
  idMaterial: 152543,
  name: 'Sand Shifterd',
  stackSize: 200
});

const aromaticFishOil = new Fish(currentContent, {
  idMaterial: 160711,
  name: 'Aromatic Fish Oil',
  stackSize: 200
});

/**
 * Flask
 */
const flaskCurrents = new Flask(currentContent, {
  idMaterial: 152638,
  name: 'Flask of the Currents',
  stackSize: 20,
  effect: 'Increases Agility by 238',
  utility: [specMelee, specTank],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: anchorWeed,
          amount: 10
        },
        {
          component: akundasBite,
          amount: 15
        },
        {
          component: seaStalk,
          amount: 20
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: anchorWeed,
          amount: 5
        },
        {
          component: akundasBite,
          amount: 10
        },
        {
          component: seaStalk,
          amount: 15
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: anchorWeed,
          amount: 5
        },
        {
          component: akundasBite,
          amount: 10
        },
        {
          component: seaStalk,
          amount: 15
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

const flaskFathoms = new Flask(currentContent, {
  idMaterial: 152639,
  name: 'Flask of Endless Fathoms',
  stackSize: 20,
  effect: 'Increases Intellect by 238',
  utility: [specRanged, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: anchorWeed,
          amount: 10
        },
        {
          component: wintersKiss,
          amount: 15
        },
        {
          component: riverbud,
          amount: 20
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: anchorWeed,
          amount: 5
        },
        {
          component: wintersKiss,
          amount: 10
        },
        {
          component: riverbud,
          amount: 15
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: anchorWeed,
          amount: 5
        },
        {
          component: wintersKiss,
          amount: 10
        },
        {
          component: riverbud,
          amount: 15
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

const flaskUndertow = new Flask(currentContent, {
  idMaterial: 152641,
  name: 'Flask of the Undertow',
  stackSize: 20,
  effect: 'Increases Strength by 238',
  utility: [specMelee, specTank],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: anchorWeed,
          amount: 10
        },
        {
          component: akundasBite,
          amount: 15
        },
        {
          component: sirensPollen,
          amount: 20
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: anchorWeed,
          amount: 5
        },
        {
          component: akundasBite,
          amount: 10
        },
        {
          component: sirensPollen,
          amount: 15
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: anchorWeed,
          amount: 5
        },
        {
          component: akundasBite,
          amount: 10
        },
        {
          component: sirensPollen,
          amount: 15
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

const flaskHorizon = new Flask(currentContent, {
  idMaterial: 152640,
  name: 'Flask of the Vast Horizon',
  stackSize: 20,
  effect: 'Increases Stamina by 357',
  utility: [specTank],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: anchorWeed,
          amount: 10
        },
        {
          component: wintersKiss,
          amount: 15
        },
        {
          component: starMoss,
          amount: 20
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: anchorWeed,
          amount: 5
        },
        {
          component: wintersKiss,
          amount: 10
        },
        {
          component: starMoss,
          amount: 15
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: anchorWeed,
          amount: 5
        },
        {
          component: wintersKiss,
          amount: 10
        },
        {
          component: starMoss,
          amount: 15
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

const mysticalCauldron = new Flask(currentContent, {
  idMaterial: 162519,
  name: 'Mystical Cauldron',
  stackSize: 20,
  effect: 'Creates 30 flasks based on class and talents',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: flaskCurrents,
          amount: 4
        },
        {
          component: flaskFathoms,
          amount: 4
        },
        {
          component: flaskUndertow,
          amount: 4
        },
        {
          component: flaskHorizon,
          amount: 4
        },
        {
          component: expulsom,
          amount: 5
        },
        {
          component: hydrocore,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: flaskCurrents,
          amount: 3
        },
        {
          component: flaskFathoms,
          amount: 3
        },
        {
          component: flaskUndertow,
          amount: 3
        },
        {
          component: flaskHorizon,
          amount: 3
        },
        {
          component: expulsom,
          amount: 3
        },
        {
          component: hydrocore,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: flaskCurrents,
          amount: 3
        },
        {
          component: flaskFathoms,
          amount: 3
        },
        {
          component: flaskUndertow,
          amount: 3
        },
        {
          component: flaskHorizon,
          amount: 3
        },
        {
          component: expulsom,
          amount: 3
        },
        {
          component: hydrocore,
          amount: 1
        }
      ]
    }
  ]
});

/**
 * Potion
 */
const coastalHealingPotion = new Potion(currentContent, {
  idMaterial: 152494,
  name: 'Coastal Healing Potion',
  stackSize: 20,
  effect: 'Restores 33 251 health',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 7
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 2
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 2
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

const coastalManaPotion = new Potion(currentContent, {
  idMaterial: 152495,
  name: 'Coastal Mana Potion',
  stackSize: 20,
  effect: 'Restores 11 084 mana',
  utility: [specRanged, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: riverbud,
          amount: 7
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: riverbud,
          amount: 2
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: riverbud,
          amount: 2
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

const coastalRejuvenationPotion = new Potion(currentContent, {
  idMaterial: 163082,
  name: 'Coastal Rejuvenation Potion',
  stackSize: 20,
  effect: 'Restores 33 251 health and 8 313 mana',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: coastalHealingPotion,
          amount: 2
        },
        {
          component: coastalManaPotion,
          amount: 2
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: coastalHealingPotion,
          amount: 1
        },
        {
          component: coastalManaPotion,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: coastalHealingPotion,
          amount: 1
        },
        {
          component: coastalManaPotion,
          amount: 1
        }
      ]
    }
  ]
});

const potionReplenishment = new Potion(currentContent, {
  idMaterial: 152561,
  name: 'Potion of Replenishment',
  stackSize: 20,
  effect: 'Restores 25 000 mana over 10 seconds',
  utility: [specRanged, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 15
        },
        {
          component: starMoss,
          amount: 10
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 10
        },
        {
          component: starMoss,
          amount: 8
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 10
        },
        {
          component: starMoss,
          amount: 8
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

const battlePotionAgility = new Potion(currentContent, {
  idMaterial: 163223,
  name: 'Battle Potion of Agility',
  stackSize: 20,
  effect: 'Increases Agility by 900 for 25 seconds',
  utility: [specMelee, specTank],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 15
        },
        {
          component: riverbud,
          amount: 10
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 10
        },
        {
          component: riverbud,
          amount: 8
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 10
        },
        {
          component: riverbud,
          amount: 8
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

const battlePotionIntellect = new Potion(currentContent, {
  idMaterial: 163222,
  name: 'Battle Potion of Intellect',
  stackSize: 20,
  effect: 'Increases Intellect by 900 for 25 seconds',
  utility: [specRanged, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 15
        },
        {
          component: riverbud,
          amount: 10
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 10
        },
        {
          component: riverbud,
          amount: 8
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 10
        },
        {
          component: riverbud,
          amount: 8
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

const battlePotionStrength = new Potion(currentContent, {
  idMaterial: 163224,
  name: 'Battle Potion of Strength',
  stackSize: 20,
  effect: 'Increases Strength by 900 for 25 seconds',
  utility: [specMelee, specTank],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: seaStalk,
          amount: 15
        },
        {
          component: starMoss,
          amount: 10
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: seaStalk,
          amount: 10
        },
        {
          component: starMoss,
          amount: 8
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: seaStalk,
          amount: 10
        },
        {
          component: starMoss,
          amount: 8
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

const battlePotionStamina = new Potion(currentContent, {
  idMaterial: 163225,
  name: 'Battle Potion of Stamina',
  stackSize: 20,
  effect: 'Increases Stamina by 1100 for 25 seconds',
  utility: [specTank],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: seaStalk,
          amount: 15
        },
        {
          component: starMoss,
          amount: 10
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: seaStalk,
          amount: 10
        },
        {
          component: starMoss,
          amount: 8
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: seaStalk,
          amount: 10
        },
        {
          component: starMoss,
          amount: 8
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

const potionRisingDeath = new Potion(currentContent, {
  idMaterial: 152559,
  name: 'Potion of Rising Death',
  stackSize: 20,
  effect: 'Throws death bolts at target for 25 seconds',
  utility: [specRanged],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: seaStalk,
          amount: 15
        },
        {
          component: starMoss,
          amount: 10
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: seaStalk,
          amount: 10
        },
        {
          component: starMoss,
          amount: 8
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: seaStalk,
          amount: 10
        },
        {
          component: starMoss,
          amount: 8
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

const potionBurstingBlood = new Potion(currentContent, {
  idMaterial: 152560,
  name: 'Potion of Bursting Blood',
  stackSize: 20,
  effect: 'Gives melee a chance of additionnal damage for 25 seconds',
  utility: [specMelee],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 15
        },
        {
          component: riverbud,
          amount: 10
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 10
        },
        {
          component: riverbud,
          amount: 8
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 10
        },
        {
          component: riverbud,
          amount: 8
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

const steelskinPotion = new Potion(currentContent, {
  idMaterial: 152557,
  name: 'Steelskin Potion',
  stackSize: 20,
  effect: 'Increases Armor by 900 for 25 seconds',
  utility: [specTank],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 15
        },
        {
          component: riverbud,
          amount: 10
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 10
        },
        {
          component: riverbud,
          amount: 8
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 10
        },
        {
          component: riverbud,
          amount: 8
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

const lightfootPotion = new Potion(currentContent, {
  idMaterial: 152497,
  name: 'Potion of Bursting Blood',
  stackSize: 20,
  effect: 'Increases movement speed by 150%',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: starMoss,
          amount: 15
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: starMoss,
          amount: 10
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: starMoss,
          amount: 10
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

const seaMistPotion = new Potion(currentContent, {
  idMaterial: 152550,
  name: 'Sea Mist Potion',
  stackSize: 20,
  effect: 'Slow fall for 1 minute',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: seaStalk,
          amount: 15
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: seaStalk,
          amount: 10
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: seaStalk,
          amount: 10
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

const potionConcealment = new Potion(currentContent, {
  idMaterial: 152503,
  name: 'Potion of Concealment',
  stackSize: 20,
  effect: 'Hides while standing still. Lasts 3 minutes',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 15
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 10
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sirensPollen,
          amount: 10
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

const draughtDeception = new Potion(currentContent, {
  idMaterial: 152503,
  name: "Demitri's Draught of Deception",
  stackSize: 20,
  effect: 'Invisibility for 18 seconds',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sandShifter,
          amount: 5
        },
        {
          component: seaStalk,
          amount: 15
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sandShifter,
          amount: 5
        },
        {
          component: seaStalk,
          amount: 5
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: sandShifter,
          amount: 5
        },
        {
          component: seaStalk,
          amount: 5
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

const potionUnveilingEye = new Potion(currentContent, {
  idMaterial: 166270,
  name: 'Potion of the Unveiling Eye',
  stackSize: 20,
  effect: 'Stealth detection for 10 minutes',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: starMoss,
          amount: 5
        },
        {
          component: seaStalk,
          amount: 5
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: starMoss,
          amount: 3
        },
        {
          component: seaStalk,
          amount: 3
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: starMoss,
          amount: 3
        },
        {
          component: seaStalk,
          amount: 3
        },
        {
          component: crystalVial,
          amount: 1
        }
      ]
    }
  ]
});

/**
 * Light meals
 */
const grilledCatfish = new Food(currentContent, {
  idMaterial: 154889,
  name: 'Grilled Catfish',
  stackSize: 20,
  effect: 'Restores 83 128 health and 41 564 mana over 20 seconds',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 5,
      craftMaterials: [
        {
          component: greatSeaCatfish,
          amount: 5
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 7,
      craftMaterials: [
        {
          component: greatSeaCatfish,
          amount: 5
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 10,
      craftMaterials: [
        {
          component: greatSeaCatfish,
          amount: 5
        }
      ]
    }
  ]
});

const seasonedLoins = new Food(currentContent, {
  idMaterial: 154891,
  name: 'Seasoned Loins',
  stackSize: 20,
  effect: 'Restores 166 256 health and 83 128 mana over 20 seconds',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 5,
      craftMaterials: [
        {
          component: stringyLoins,
          amount: 5
        },
        {
          component: foosaka,
          amount: 5
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 7,
      craftMaterials: [
        {
          component: stringyLoins,
          amount: 5
        },
        {
          component: foosaka,
          amount: 5
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 10,
      craftMaterials: [
        {
          component: stringyLoins,
          amount: 5
        },
        {
          component: foosaka,
          amount: 5
        }
      ]
    }
  ]
});

const heartsbaneHexwurst = new Food(currentContent, {
  idMaterial: 163781,
  name: 'Heartsbane Hexwurst',
  stackSize: 20,
  effect: 'Restores 35 757 health and 17 878 mana over 20 seconds',
  utility: [specMelee, specRanged, specTank, specHealer],
  craftNumber: 5,
  craftMaterials: [
    {
      component: foosaka,
      amount: 5
    },
    {
      component: meatyHaunch,
      amount: 5
    },
    {
      component: cursedHaunch,
      amount: 5
    }
  ]
});

const honeyPotPie = new Food(currentContent, {
  idMaterial: 165755,
  name: 'Honey Potpie',
  stackSize: 20,
  effect: "Slows melee attackers' movement speed by 30% for 5 sec",
  utility: [specMelee, specRanged, specTank, specHealer],
  craftNumber: 5,
  craftMaterials: [
    {
      component: choralHoney,
      amount: 10
    },
    {
      component: meatyHaunch,
      amount: 5
    },
    {
      component: cursedHaunch,
      amount: 5
    }
  ]
});

/**
 * Desserts
 */
const kulTiramisu = new Food(currentContent, {
  idMaterial: 154881,
  name: 'Kul Tiramisu',
  stackSize: 20,
  effect: 'Grants 41 Critical Strike',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 5,
      craftMaterials: [
        {
          component: wildFlour,
          amount: 10
        },
        {
          component: foosaka,
          amount: 5
        },
        {
          component: aromaticFishOil,
          amount: 2
        },
        {
          component: majorsFrothyCoffee,
          amount: 5
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 7,
      craftMaterials: [
        {
          component: wildFlour,
          amount: 10
        },
        {
          component: foosaka,
          amount: 5
        },
        {
          component: aromaticFishOil,
          amount: 2
        },
        {
          component: majorsFrothyCoffee,
          amount: 5
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 10,
      craftMaterials: [
        {
          component: wildFlour,
          amount: 10
        },
        {
          component: foosaka,
          amount: 5
        },
        {
          component: aromaticFishOil,
          amount: 2
        },
        {
          component: majorsFrothyCoffee,
          amount: 5
        }
      ]
    }
  ]
});

const loaLoaf = new Food(currentContent, {
  idMaterial: 154887,
  name: 'Loa Loaf',
  stackSize: 20,
  effect: 'Grants 41 Mastery',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 5,
      craftMaterials: [
        {
          component: wildFlour,
          amount: 10
        },
        {
          component: choralHoney,
          amount: 5
        },
        {
          component: aromaticFishOil,
          amount: 2
        },
        {
          component: powderedSugar,
          amount: 5
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 7,
      craftMaterials: [
        {
          component: wildFlour,
          amount: 10
        },
        {
          component: choralHoney,
          amount: 5
        },
        {
          component: aromaticFishOil,
          amount: 2
        },
        {
          component: powderedSugar,
          amount: 5
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 10,
      craftMaterials: [
        {
          component: wildFlour,
          amount: 10
        },
        {
          component: choralHoney,
          amount: 5
        },
        {
          component: aromaticFishOil,
          amount: 2
        },
        {
          component: powderedSugar,
          amount: 5
        }
      ]
    }
  ]
});

const ravenberryTarts = new Food(currentContent, {
  idMaterial: 154883,
  name: 'Ravenberry Tarts',
  stackSize: 20,
  effect: 'Grants 41 Haste',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 5,
      craftMaterials: [
        {
          component: wildFlour,
          amount: 10
        },
        {
          component: choralHoney,
          amount: 5
        },
        {
          component: aromaticFishOil,
          amount: 2
        },
        {
          component: wildBerries,
          amount: 5
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 7,
      craftMaterials: [
        {
          component: wildFlour,
          amount: 10
        },
        {
          component: choralHoney,
          amount: 5
        },
        {
          component: aromaticFishOil,
          amount: 2
        },
        {
          component: wildBerries,
          amount: 5
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 10,
      craftMaterials: [
        {
          component: wildFlour,
          amount: 10
        },
        {
          component: choralHoney,
          amount: 5
        },
        {
          component: aromaticFishOil,
          amount: 2
        },
        {
          component: wildBerries,
          amount: 5
        }
      ]
    }
  ]
});

const monDazi = new Food(currentContent, {
  idMaterial: 154885,
  name: "Mon'Dazi",
  stackSize: 20,
  effect: 'Grants 41 Versatility',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 5,
      craftMaterials: [
        {
          component: wildFlour,
          amount: 10
        },
        {
          component: foosaka,
          amount: 5
        },
        {
          component: aromaticFishOil,
          amount: 2
        },
        {
          component: powderedSugar,
          amount: 5
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 7,
      craftMaterials: [
        {
          component: wildFlour,
          amount: 10
        },
        {
          component: foosaka,
          amount: 5
        },
        {
          component: aromaticFishOil,
          amount: 2
        },
        {
          component: powderedSugar,
          amount: 5
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 10,
      craftMaterials: [
        {
          component: wildFlour,
          amount: 10
        },
        {
          component: foosaka,
          amount: 5
        },
        {
          component: aromaticFishOil,
          amount: 2
        },
        {
          component: powderedSugar,
          amount: 5
        }
      ]
    }
  ]
});

const wildBerryBread = new Food(currentContent, {
  idMaterial: 166343,
  name: 'Wild Berry Bread',
  stackSize: 20,
  effect: 'Grants 113 Stamina',
  utility: [specTank],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 5,
      craftMaterials: [
        {
          component: wildFlour,
          amount: 8
        },
        {
          component: wildBerries,
          amount: 8
        },
        {
          component: powderedSugar,
          amount: 5
        },
        {
          component: aromaticFishOil,
          amount: 2
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 7,
      craftMaterials: [
        {
          component: wildFlour,
          amount: 8
        },
        {
          component: wildBerries,
          amount: 8
        },
        {
          component: powderedSugar,
          amount: 5
        },
        {
          component: aromaticFishOil,
          amount: 2
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 10,
      craftMaterials: [
        {
          component: wildFlour,
          amount: 8
        },
        {
          component: wildBerries,
          amount: 8
        },
        {
          component: powderedSugar,
          amount: 5
        },
        {
          component: aromaticFishOil,
          amount: 2
        }
      ]
    }
  ]
});

/**
 * Large Meals
 */
const honeyGlazedHaunches = new Food(currentContent, {
  idMaterial: 154882,
  name: 'Honey-Glazed Haunches',
  stackSize: 20,
  effect: 'Grants 55 Critical Strike',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 5,
      craftMaterials: [
        {
          component: meatyHaunch,
          amount: 10
        },
        {
          component: choralHoney,
          amount: 5
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 7,
      craftMaterials: [
        {
          component: meatyHaunch,
          amount: 10
        },
        {
          component: choralHoney,
          amount: 5
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 10,
      craftMaterials: [
        {
          component: meatyHaunch,
          amount: 10
        },
        {
          component: choralHoney,
          amount: 5
        }
      ]
    }
  ]
});

const sailorsPie = new Food(currentContent, {
  idMaterial: 154888,
  name: "Sailor's Pie",
  stackSize: 20,
  effect: 'Grants 55 Mastery',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 5,
      craftMaterials: [
        {
          component: brinyFlesh,
          amount: 10
        },
        {
          component: wildFlour,
          amount: 5
        },
        {
          component: foosaka,
          amount: 4
        },
        {
          component: freshPotato,
          amount: 4
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 7,
      craftMaterials: [
        {
          component: brinyFlesh,
          amount: 10
        },
        {
          component: wildFlour,
          amount: 5
        },
        {
          component: foosaka,
          amount: 4
        },
        {
          component: freshPotato,
          amount: 4
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 10,
      craftMaterials: [
        {
          component: brinyFlesh,
          amount: 10
        },
        {
          component: wildFlour,
          amount: 5
        },
        {
          component: foosaka,
          amount: 4
        },
        {
          component: freshPotato,
          amount: 4
        }
      ]
    }
  ]
});

const swampFishChips = new Food(currentContent, {
  idMaterial: 154884,
  name: "Swamp Fish 'n Chips",
  stackSize: 20,
  effect: 'Grants 55 Haste',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 5,
      craftMaterials: [
        {
          component: slimyMackerel,
          amount: 10
        },
        {
          component: wildFlour,
          amount: 3
        },
        {
          component: freshPotato,
          amount: 2
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 7,
      craftMaterials: [
        {
          component: slimyMackerel,
          amount: 10
        },
        {
          component: wildFlour,
          amount: 3
        },
        {
          component: freshPotato,
          amount: 2
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 10,
      craftMaterials: [
        {
          component: slimyMackerel,
          amount: 10
        },
        {
          component: wildFlour,
          amount: 3
        },
        {
          component: freshPotato,
          amount: 2
        }
      ]
    }
  ]
});

const spicedSnapper = new Food(currentContent, {
  idMaterial: 154886,
  name: 'Spiced Snapper',
  stackSize: 20,
  effect: 'Grants 55 Versatility',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 5,
      craftMaterials: [
        {
          component: laneSnapper,
          amount: 10
        },
        {
          component: foosaka,
          amount: 5
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 7,
      craftMaterials: [
        {
          component: laneSnapper,
          amount: 10
        },
        {
          component: foosaka,
          amount: 5
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 10,
      craftMaterials: [
        {
          component: laneSnapper,
          amount: 10
        },
        {
          component: foosaka,
          amount: 5
        }
      ]
    }
  ]
});

const seasonedSteakAndPotatoes = new Food(currentContent, {
  idMaterial: 166344,
  name: 'Seasoned Steak and Potatoes',
  stackSize: 20,
  effect: 'Grants 150 Stamina',
  utility: [specTank],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 5,
      craftMaterials: [
        {
          component: thickPaleoSteak,
          amount: 6
        },
        {
          component: freshPotato,
          amount: 5
        },
        {
          component: foosaka,
          amount: 2
        },
        {
          component: aromaticFishOil,
          amount: 2
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 7,
      craftMaterials: [
        {
          component: thickPaleoSteak,
          amount: 6
        },
        {
          component: freshPotato,
          amount: 5
        },
        {
          component: foosaka,
          amount: 2
        },
        {
          component: aromaticFishOil,
          amount: 2
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 10,
      craftMaterials: [
        {
          component: thickPaleoSteak,
          amount: 6
        },
        {
          component: freshPotato,
          amount: 5
        },
        {
          component: foosaka,
          amount: 2
        },
        {
          component: aromaticFishOil,
          amount: 2
        }
      ]
    }
  ]
});

const boralusBloodSausage = new Food(currentContent, {
  idMaterial: 166804,
  name: 'Boralus Blood Sausage',
  stackSize: 20,
  effect: 'Gives 85 to a primary stat',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 5,
      craftMaterials: [
        {
          component: thickPaleoSteak,
          amount: 6
        },
        {
          component: foosaka,
          amount: 2
        },
        {
          component: aromaticFishOil,
          amount: 2
        },
        {
          component: sanguicell,
          amount: 5
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 7,
      craftMaterials: [
        {
          component: thickPaleoSteak,
          amount: 6
        },
        {
          component: foosaka,
          amount: 2
        },
        {
          component: aromaticFishOil,
          amount: 2
        },
        {
          component: sanguicell,
          amount: 5
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 10,
      craftMaterials: [
        {
          component: thickPaleoSteak,
          amount: 6
        },
        {
          component: foosaka,
          amount: 2
        },
        {
          component: aromaticFishOil,
          amount: 2
        },
        {
          component: sanguicell,
          amount: 5
        }
      ]
    }
  ]
});

/**
 * Feasts
 */
const galleyBanquet = new Food(currentContent, {
  idMaterial: 156525,
  name: 'Galley Banquet',
  stackSize: 20,
  effect: 'Gives 75 to a stat based on specilization',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: brinyFlesh,
          amount: 10
        },
        {
          component: thickPaleoSteak,
          amount: 10
        },
        {
          component: sandShifter,
          amount: 10
        },
        {
          component: tiragardePerch,
          amount: 10
        },
        {
          component: foosaka,
          amount: 10
        },
        {
          component: freshPotato,
          amount: 30
        },
        {
          component: midnightSalmon,
          amount: 1
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: brinyFlesh,
          amount: 9
        },
        {
          component: thickPaleoSteak,
          amount: 9
        },
        {
          component: sandShifter,
          amount: 9
        },
        {
          component: tiragardePerch,
          amount: 9
        },
        {
          component: foosaka,
          amount: 9
        },
        {
          component: freshPotato,
          amount: 28
        },
        {
          component: midnightSalmon,
          amount: 1
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: brinyFlesh,
          amount: 8
        },
        {
          component: thickPaleoSteak,
          amount: 8
        },
        {
          component: sandShifter,
          amount: 8
        },
        {
          component: tiragardePerch,
          amount: 8
        },
        {
          component: foosaka,
          amount: 8
        },
        {
          component: freshPotato,
          amount: 25
        },
        {
          component: midnightSalmon,
          amount: 1
        }
      ]
    }
  ]
});

const bountifulCaptainsFeast = new Food(currentContent, {
  idMaterial: 156526,
  name: "Bountiful Captain's Feast",
  stackSize: 20,
  effect: 'Gives 100 to a stat based on specilization',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: redtailLoach,
          amount: 20
        },
        {
          component: frenziedFangtooth,
          amount: 20
        },
        {
          component: stringyLoins,
          amount: 20
        },
        {
          component: meatyHaunch,
          amount: 20
        },
        {
          component: kulTiramisu,
          amount: 12
        },
        {
          component: monDazi,
          amount: 12
        },
        {
          component: midnightSalmon,
          amount: 3
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: redtailLoach,
          amount: 18
        },
        {
          component: frenziedFangtooth,
          amount: 18
        },
        {
          component: stringyLoins,
          amount: 18
        },
        {
          component: meatyHaunch,
          amount: 18
        },
        {
          component: kulTiramisu,
          amount: 11
        },
        {
          component: monDazi,
          amount: 11
        },
        {
          component: midnightSalmon,
          amount: 2
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: redtailLoach,
          amount: 15
        },
        {
          component: frenziedFangtooth,
          amount: 15
        },
        {
          component: stringyLoins,
          amount: 15
        },
        {
          component: meatyHaunch,
          amount: 15
        },
        {
          component: kulTiramisu,
          amount: 10
        },
        {
          component: monDazi,
          amount: 10
        },
        {
          component: midnightSalmon,
          amount: 2
        }
      ]
    }
  ]
});

const sanguinatedFeast = new Food(currentContent, {
  idMaterial: 166240,
  name: 'Sanguinated Feast',
  stackSize: 20,
  effect: 'Gives 100 to a stat based on specilization',
  utility: [specMelee, specRanged, specTank, specHealer],
  rankedCraftMaterial: [
    {
      rank: 1,
      craftNumber: 1,
      craftMaterials: [
        {
          component: stringyLoins,
          amount: 20
        },
        {
          component: meatyHaunch,
          amount: 20
        },
        {
          component: freshPotato,
          amount: 30
        },
        {
          component: aromaticFishOil,
          amount: 20
        },
        {
          component: sanguicell,
          amount: 20
        }
      ]
    },
    {
      rank: 2,
      craftNumber: 1,
      craftMaterials: [
        {
          component: stringyLoins,
          amount: 18
        },
        {
          component: meatyHaunch,
          amount: 18
        },
        {
          component: freshPotato,
          amount: 28
        },
        {
          component: aromaticFishOil,
          amount: 17
        },
        {
          component: sanguicell,
          amount: 17
        }
      ]
    },
    {
      rank: 3,
      craftNumber: 1,
      craftMaterials: [
        {
          component: stringyLoins,
          amount: 15
        },
        {
          component: meatyHaunch,
          amount: 15
        },
        {
          component: freshPotato,
          amount: 25
        },
        {
          component: aromaticFishOil,
          amount: 15
        },
        {
          component: sanguicell,
          amount: 15
        }
      ]
    }
  ]
});

const SPECIALIZATIONS: Specialization[] = [specMelee, specRanged, specTank, specHealer];
const REAGENTS: MaterialCategory = {
  category: 'Reagents',
  materialArray: [
    crystalVial,
    expulsom,
    hydrocore,
    wildFlour,
    powderedSugar,
    freshPotato,
    choralHoney,
    foosaka,
    wildBerries,
    majorsFrothyCoffee,
    sanguicell
  ]
};
const PLANTS: MaterialCategory = {
  category: 'Plants',
  materialArray: [riverbud, seaStalk, starMoss, akundasBite, wintersKiss, sirensPollen, anchorWeed]
};
const MEATS: MaterialCategory = {
  category: 'Meats',
  materialArray: [thickPaleoSteak, meatyHaunch, stringyLoins, brinyFlesh, cursedHaunch]
};
const FISHS: MaterialCategory = {
  category: 'Fishs',
  materialArray: [
    midnightSalmon,
    redtailLoach,
    tiragardePerch,
    greatSeaCatfish,
    laneSnapper,
    frenziedFangtooth,
    slimyMackerel,
    sandShifter,
    aromaticFishOil
  ]
};
const FLASKS: ConsumableCategory = {
  category: 'Flasks',
  consumableArray: [flaskCurrents, flaskFathoms, flaskUndertow, flaskHorizon, mysticalCauldron]
};
const POTIONS: ConsumableCategory = {
  category: 'Potions',
  consumableArray: [
    coastalHealingPotion,
    coastalManaPotion,
    coastalRejuvenationPotion,
    potionReplenishment,
    battlePotionAgility,
    battlePotionIntellect,
    battlePotionStrength,
    battlePotionStamina,
    potionRisingDeath,
    potionBurstingBlood,
    steelskinPotion,
    lightfootPotion,
    seaMistPotion,
    potionConcealment,
    draughtDeception,
    potionUnveilingEye
  ]
};
const LIGHT_MEALS: ConsumableCategory = {
  category: 'Light Meals',
  consumableArray: [grilledCatfish, seasonedLoins, heartsbaneHexwurst, honeyPotPie]
};
const DESSERTS: ConsumableCategory = {
  category: 'Desserts',
  consumableArray: [kulTiramisu, loaLoaf, ravenberryTarts, monDazi, wildBerryBread]
};
const LARGE_MEALS: ConsumableCategory = {
  category: 'Large Meals',
  consumableArray: [
    honeyGlazedHaunches,
    sailorsPie,
    swampFishChips,
    spicedSnapper,
    seasonedSteakAndPotatoes,
    boralusBloodSausage
  ]
};
const FEASTS: ConsumableCategory = {
  category: 'Feasts',
  consumableArray: [galleyBanquet, bountifulCaptainsFeast, sanguinatedFeast]
};

const ALL_ALCHEMY: ConsumableCategory[] = [FLASKS, POTIONS];

const ALL_FOODS: ConsumableCategory[] = [FEASTS, LARGE_MEALS, DESSERTS, LIGHT_MEALS];

const ALL_ALCHEMY_MATERIAL: MaterialCategory[] = ALL_ALCHEMY.map(
  alchemyCategory => new MaterialCategory(alchemyCategory.category, alchemyCategory.consumableArray)
);

const ALL_FOODS_MATERIAL: MaterialCategory = new MaterialCategory(
  'Foods',
  ALL_FOODS.reduce((foodArray, food) => {
    return [...foodArray, ...food.consumableArray];
  }, [])
);

const ALL_MATERIALS: MaterialCategory[] = [
  REAGENTS,
  PLANTS,
  MEATS,
  FISHS,
  ...ALL_ALCHEMY_MATERIAL,
  ALL_FOODS_MATERIAL
];

export const DATA = {
  CONTENT: currentContent,
  SPECIALIZATIONS: SPECIALIZATIONS,
  ALL_ALCHEMY: ALL_ALCHEMY,
  ALL_FOODS: ALL_FOODS,
  ALL_MATERIALS: ALL_MATERIALS
};
