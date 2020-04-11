import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { MaterialCategory, Specialization } from 'src/app/model';
import { WowheadService } from 'src/app/shared/new-services';
import { StateService } from 'src/app/shared/services';
import { ProfessionComponent } from '../profession-old/abstract';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent extends ProfessionComponent implements OnInit {
  public specializations: Specialization[];
  public materialCategories: MaterialCategory[];

  constructor(
    protected stateService: StateService,
    protected wowheadService: WowheadService,
    protected cd: ChangeDetectorRef
  ) {
    super(stateService, wowheadService, cd);
  }

  ngOnInit() {
    super.ngOnInit();
    this.getData();
  }

  /**
   * Gather data from StateService
   */
  protected getData(): void {
    this.stateService.getSpecializations().subscribe((specializations) => {
      this.specializations = specializations;
    });

    this.stateService.getMaterials().subscribe((materialCategories) => {
      this.materialCategories = materialCategories;
    });
  }
}
