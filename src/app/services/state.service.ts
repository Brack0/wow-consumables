import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { ComputeService } from './compute.service';
import {
  Consumable,
  ConsumableType,
  Content,
  CraftedMaterial,
  Fish,
  Flask,
  Food,
  Meat,
  Plant,
  Potion,
  Reagent,
  Recipes,
  RequiredMaterial,
  Specialization,
  WantedConsumables
} from '../shared/model';
import { DATA } from './data/bfa-data';

@Injectable()
export class StateService {
  private refreshWowTooltip: Subject<any> = new Subject<any>();
  private requiredMaterialsAlchemySubject: Subject<RequiredMaterial[]> = new Subject();
  private requiredMaterialsCookingSubject: Subject<RequiredMaterial[]> = new Subject();
  private wantedAlchemyConsumables: WantedConsumables = new WantedConsumables();
  private wantedCookingConsumables: WantedConsumables = new WantedConsumables();
  private recipes: Recipes = new Recipes();

  constructor(private computeService: ComputeService) {}

  /**
   * Subscribe to get when to refresh wow tooltip
   */
  public getRefreshWowTooltip(): Subject<any> {
    return this.refreshWowTooltip;
  }

  /**
   * Call a refresh of wow tooltip
   * All subscribers will receive a event
   */
  public callRefreshWowTooltip(): void {
    this.refreshWowTooltip.next(null);
  }

  /**
   * Create a Subject
   * Subscribe to get updated list of required material
   */
  public getRequiredMaterial(type: ConsumableType): Subject<RequiredMaterial[]> {
    if (type === ConsumableType.Alchemy) {
      return this.requiredMaterialsAlchemySubject;
    } else {
      return this.requiredMaterialsCookingSubject;
    }
  }

  public getContent(): Observable<Content> {
    return of(DATA.CONTENT);
  }

  public getSpecializations(): Observable<Specialization[]> {
    return of(DATA.SPECIALIZATIONS);
  }

  public getReagents(): Observable<Reagent[]> {
    return of(DATA.REAGENTS);
  }

  public getPlants(): Observable<Plant[]> {
    return of(DATA.PLANTS);
  }

  public getMeats(): Observable<Meat[]> {
    return of(DATA.MEATS);
  }

  public getFishs(): Observable<Fish[]> {
    return of(DATA.FISHS);
  }

  public getFlasks(): Observable<Flask[]> {
    return of(DATA.FLASKS);
  }

  public getPotions(): Observable<Potion[]> {
    return of(DATA.POTIONS);
  }

  public getAverageFoods(): Observable<Food[][]> {
    return of(DATA.AVERAGE_FOODS);
  }

  public getBetterFoods(): Observable<Food[][]> {
    return of(DATA.BETTER_FOODS);
  }

  public getBestFoods(): Observable<Food[][]> {
    return of(DATA.BEST_FOODS);
  }

  public getFeasts(): Observable<Food[][]> {
    return of(DATA.FEASTS);
  }

  public getFoods(): Observable<Food[][]> {
    return of(
      DATA.AVERAGE_FOODS.concat(DATA.BETTER_FOODS, DATA.BEST_FOODS, DATA.FEASTS)
    );
  }

  /**
   * Update list of wanted materials
   * @param consumable New Consumable to handle
   */
  public updateWantedConsumables(consumable: Consumable): void {
    const consumableType = this.computeService.getConsumableType(consumable);
    let wantedConsumables;
    if (consumableType === ConsumableType.Alchemy) {
      wantedConsumables = this.wantedAlchemyConsumables;
    } else {
      wantedConsumables = this.wantedCookingConsumables;
    }

    if (consumable.wantedNumber) {
      // Update wantedConsumables
      wantedConsumables[consumable.idMaterial] = consumable.wantedNumber;
      // Compute recipe if needed
      this.addRecipe(consumable);
      // Update list of required material
      this.updateRequiredMaterial(consumableType);
    } else {
      // Update wantedConsumables
      delete wantedConsumables[consumable.idMaterial];
      // Update list of required material
      this.updateRequiredMaterial(consumableType);
    }
  }

  /**
   * Update recipe for the material
   * @param material Material to update
   */
  public updateRecipe(material: CraftedMaterial): void {
    this.recipes[material.idMaterial] = this.computeService.computeRecipe(material);
  }

  /**
   * Create a new recipe for the material if needed (ie. not known by the StateService)
   * @param material New Material to handle
   */
  private addRecipe(material: CraftedMaterial): void {
    if (!this.recipes[material.idMaterial]) {
      this.recipes[material.idMaterial] = this.computeService.computeRecipe(material);
    }
  }

  /**
   * Update the list of all required Material for the wanted Consumables.
   * - Get Recipes
   * - Merge all Materials and required amount
   * - Push to Subject
   * @param type Type of Consumable
   */
  private updateRequiredMaterial(type: ConsumableType): void {
    let requiredMaterialsSubject, wantedConsumables;
    if (type === ConsumableType.Alchemy) {
      requiredMaterialsSubject = this.requiredMaterialsAlchemySubject;
      wantedConsumables = this.wantedAlchemyConsumables;
    } else {
      requiredMaterialsSubject = this.requiredMaterialsCookingSubject;
      wantedConsumables = this.wantedCookingConsumables;
    }

    // Pushing new subject
    requiredMaterialsSubject.next(this.computeService.updateRequiredMaterial(wantedConsumables, this.recipes));
  }
}
