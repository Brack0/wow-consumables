import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import {
  Consumable,
  ConsumableCategory,
  ConsumableType,
  Content,
  CraftedMaterial,
  MaterialCategory,
  Recipes,
  Specialization,
  WantedConsumables,
} from '../../model';
import { DATA } from '../data/bfa-data';
import { ComputeService } from './compute.service';

@Injectable({ providedIn: 'root' })
export class StateService {
  private refreshWowTooltip: Subject<any> = new Subject<any>();
  private resetAllForms: Subject<any> = new Subject<any>();
  private logoUrlSubject: Subject<string> = new Subject<string>();
  private requiredMaterialsAlchemySubject: Subject<
    MaterialCategory
  > = new Subject<MaterialCategory>();
  private requiredMaterialsCookingSubject: Subject<
    MaterialCategory
  > = new Subject<MaterialCategory>();
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
   * Subscribe to get when to reset all forms
   */
  public getResetAllForms(): Subject<any> {
    return this.resetAllForms;
  }

  /**
   * Call a reset of all forms
   * All subscribers will receive a event
   */
  public callResetAllForms(): void {
    this.resetAllForms.next();
  }

  /**
   * Create a Subject
   * Subscribe to get updated list of required material
   */
  public getRequiredMaterial(type: ConsumableType): Subject<MaterialCategory> {
    if (type === ConsumableType.Alchemy) {
      return this.requiredMaterialsAlchemySubject;
    } else {
      return this.requiredMaterialsCookingSubject;
    }
  }

  public getLogo(): Subject<string> {
    return this.logoUrlSubject;
  }

  public setLogo(logoUrl: string): void {
    this.logoUrlSubject.next(logoUrl);
  }

  public getContent(): Observable<Content> {
    return of(DATA.CONTENT);
  }

  public getSpecializations(): Observable<Specialization[]> {
    return of(DATA.SPECIALIZATIONS);
  }

  public getMaterials(): Observable<MaterialCategory[]> {
    return of(DATA.ALL_MATERIALS);
  }

  public getAlchemy(): Observable<ConsumableCategory[]> {
    return of(DATA.ALL_ALCHEMY);
  }

  public getFoods(): Observable<ConsumableCategory[]> {
    return of(DATA.ALL_FOODS);
  }

  /**
   * Update list of wanted materials
   * @param consumable New Consumable to handle
   */
  public updateWantedConsumables(consumable: Consumable): void {
    const consumableType = this.computeService.getConsumableType(consumable);
    let wantedConsumables: WantedConsumables;
    if (consumableType === ConsumableType.Alchemy) {
      wantedConsumables = this.wantedAlchemyConsumables;
    } else {
      wantedConsumables = this.wantedCookingConsumables;
    }

    // Update recipes for every consumables asked
    Object.values(wantedConsumables).forEach((wantedConsumable: Consumable) => {
      if (wantedConsumable.wantedNumber) {
        this.updateRecipe(wantedConsumable);
      }
    });

    if (consumable.wantedNumber) {
      // Update wantedConsumables
      wantedConsumables[consumable.idMaterial] = consumable;
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
    this.recipes[material.idMaterial] = this.computeService.computeRecipe(
      material
    );
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
   * - Push to Subject
   * @param type Type of Consumable
   */
  private updateRequiredMaterial(type: ConsumableType): void {
    let requiredMaterialsSubject: Subject<MaterialCategory>;
    let wantedConsumables: WantedConsumables;

    if (type === ConsumableType.Alchemy) {
      requiredMaterialsSubject = this.requiredMaterialsAlchemySubject;
      wantedConsumables = this.wantedAlchemyConsumables;
    } else {
      requiredMaterialsSubject = this.requiredMaterialsCookingSubject;
      wantedConsumables = this.wantedCookingConsumables;
    }

    // Pushing new subject
    requiredMaterialsSubject.next({
      category: 'Required Materials',
      requiredMaterialArray: this.computeService.updateRequiredMaterial(
        wantedConsumables,
        this.recipes
      ),
    });
  }
}
