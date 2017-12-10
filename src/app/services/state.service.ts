import { Injectable } from '@angular/core';
import '@rxjs';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { ComputeService } from './compute.service';

import {
  Consumable,
  CraftedMaterial,
  Feast,
  Fish,
  Flask,
  Food,
  Material,
  Meat,
  Plant,
  Potion,
  Reagent,
  Recipes,
  Specialization
} from '@model';
import { EXPORTDATA } from './mock-data';

@Injectable()
export class StateService {
  private refreshWowTooltip: ReplaySubject<any> = new ReplaySubject<any>();
  private requiredMaterialsSubject: ReplaySubject<
    Array<{ component: Material; amount: number }>
  > = new ReplaySubject(1);
  private wantedConsumables: { [idConsumable: number]: number } = {};
  private recipes: Recipes = new Recipes();

  constructor(private computeService: ComputeService) {}

  /**
   * Create a ReplaySubject
   * Subscribe to get when to refresh wow tooltip
   */
  public getRefreshWowTooltip(): ReplaySubject<any> {
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
   * Create a ReplaySubject
   * Subscribe to get updated list of required material
   */
  public getRequiredMaterial(): ReplaySubject<
    Array<{ component: Material; amount: number }>
  > {
    return this.requiredMaterialsSubject;
  }

  public getSpecializations(): Observable<Specialization[]> {
    return Observable.of(EXPORTDATA.SPECIALIZATIONS);
  }

  public getReagents(): Observable<Reagent[]> {
    return Observable.of(EXPORTDATA.REAGENTS);
  }

  public getPlants(): Observable<Plant[]> {
    return Observable.of(EXPORTDATA.PLANTS);
  }

  public getMeats(): Observable<Meat[]> {
    return Observable.of(EXPORTDATA.MEATS);
  }

  public getFishs(): Observable<Fish[]> {
    return Observable.of(EXPORTDATA.FISHS);
  }

  public getFlasks(): Observable<Flask[]> {
    return Observable.of(EXPORTDATA.FLASKS);
  }

  public getPotions(): Observable<Potion[]> {
    return Observable.of(EXPORTDATA.POTIONS);
  }

  public getFoods(): Observable<[Food[]]> {
    return Observable.of(EXPORTDATA.FOODS);
  }

  public getFeasts(): Observable<[Feast[]]> {
    return Observable.of(EXPORTDATA.FEASTS);
  }

  /**
   * Update list of wanted materials
   * @param consumable New Consumable to handle
   */
  public updateWantedConsumables(consumable: Consumable): void {
    if (consumable.wantedNumber) {
      this.wantedConsumables[consumable.idMaterial] = consumable.wantedNumber;
      this.addRecipe(consumable);
      this.updateRequiredMaterial();
    } else {
      delete this.wantedConsumables[consumable.idMaterial];
      this.updateRequiredMaterial();
    }
  }

  /**
   * Create a new recipe for the material if needed (ie. not known by the StateService)
   * @param material New Material to handle
   */
  private addRecipe(material: CraftedMaterial): void {
    if (!this.recipes[material.idMaterial]) {
      this.recipes[material.idMaterial] = this.computeService.computeRecipe(
        material
      );
    }
  }

  /**
   * Update the list of all required Material for the wanted Consumables.
   * - Get Recipes
   * - Merge all Materials and required amount
   * - Push to ReplaySubject
   */
  private updateRequiredMaterial(): void {
    this.requiredMaterialsSubject.next(
      this.computeService.updateRequiredMaterial(
        this.wantedConsumables,
        this.recipes
      )
    );
  }
}
