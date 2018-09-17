import {
  Content,
  Fish,
  Flask,
  Food,
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
const sandShifter = new Fish(currentContent, {
  idMaterial: 152543,
  name: 'Sand Shifterd',
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
          amount: 5
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
          amount: 5
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

/**
 * Average Food
 */

/**
 * Better Food
 */

/**
 * Best Food
 */

const SPECIALIZATIONS: Specialization[] = [specMelee, specRanged, specTank, specHealer];
const REAGENTS: Reagent[] = [crystalVial, expulsom, hydrocore];
const PLANTS: Plant[] = [
  riverbud,
  seaStalk,
  starMoss,
  akundasBite,
  wintersKiss,
  sirensPollen,
  anchorWeed
];
const MEATS: Meat[] = [];
const FISHS: Fish[] = [sandShifter];
const FLASKS: Flask[] = [
  flaskCurrents,
  flaskFathoms,
  flaskUndertow,
  flaskHorizon,
  mysticalCauldron
];
const POTIONS: Potion[] = [
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
  draughtDeception
];
const AVERAGE_FOODS: Food[] = [];
const BETTER_FOODS: Food[] = [];
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
