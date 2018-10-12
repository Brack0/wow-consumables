import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { StateService } from '../../services';
import { ConsumableCategory, ConsumableType } from '../../shared/model';
import { ProfessionComponent } from '../abstract/profession/profession.abstract';

@Component({
  selector: 'app-alchemy',
  templateUrl: './alchemy.component.html',
  styleUrls: ['./alchemy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlchemyComponent extends ProfessionComponent implements OnInit {
  public alchemyCategories: ConsumableCategory[];

  constructor(
    protected stateService: StateService,
    private cd: ChangeDetectorRef
  ) {
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
    this.stateService.getAlchemy().subscribe(alchemyCategories => {
      this.alchemyCategories = alchemyCategories;
    });

    this.stateService
      .getRequiredMaterial(ConsumableType.Alchemy)
      .subscribe(materials => {
        this.requiredMaterials = materials;
        this.stateService.callRefreshWowTooltip();
        this.cd.markForCheck();
      });
  }
}
