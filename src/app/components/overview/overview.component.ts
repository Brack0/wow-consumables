import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StateService } from '../../services';
import { MaterialCategory, Specialization } from '../../shared/model';
import { ProfessionComponent } from '../abstract/profession/profession.abstract';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent extends ProfessionComponent implements OnInit {
  public specializations: Specialization[];
  public materialCategories: MaterialCategory[];

  constructor(protected stateService: StateService, protected cd: ChangeDetectorRef) {
    super(stateService, cd);
  }

  ngOnInit() {
    super.ngOnInit();
    this.getData();
  }

  /**
   * Gather data from StateService
   */
  protected getData(): void {
    this.stateService.getSpecializations().subscribe(specializations => {
      this.specializations = specializations;
    });

    this.stateService.getMaterials().subscribe(materialCategories => {
      this.materialCategories = materialCategories;
    });
  }
}
