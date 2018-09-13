import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services';
import { ConsumableType, Flask, Potion } from '../../shared/model';
import { ProfessionComponent } from '../abstract/profession/profession.abstract';

@Component({
  selector: 'app-alchemy',
  templateUrl: './alchemy.component.html',
  styleUrls: ['./alchemy.component.scss']
})
export class AlchemyComponent extends ProfessionComponent implements OnInit {
  protected flasks: Flask[];
  protected potions: Potion[];

  constructor(protected stateService: StateService) {
    super(stateService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.getData();
  }

  /**
   * Gather data from StateService
   */
  protected getData(): void {
    this.stateService.getFlasks().subscribe(flasks => {
      this.flasks = flasks;
    });

    this.stateService.getPotions().subscribe(potions => {
      this.potions = potions;
    });

    this.stateService.getRequiredMaterial(ConsumableType.Alchemy).subscribe(materials => {
      this.requiredMaterials = materials;
      this.stateService.callRefreshWowTooltip();
    });
  }
}
