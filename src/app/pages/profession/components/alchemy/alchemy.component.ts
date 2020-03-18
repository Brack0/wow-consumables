import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from "@angular/core";
import { StateService } from "src/app/shared/services";
import { ConsumableCategory, ConsumableType } from "src/app/model";
import { ProfessionComponent } from "../../abstract";

@Component({
  selector: "app-alchemy",
  templateUrl: "./alchemy.component.html",
  styleUrls: ["./alchemy.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlchemyComponent extends ProfessionComponent implements OnInit {
  public alchemyCategories: ConsumableCategory[];

  constructor(
    protected stateService: StateService,
    protected cd: ChangeDetectorRef
  ) {
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
    this.stateService.getAlchemy().subscribe(alchemyCategories => {
      this.alchemyCategories = alchemyCategories;
    });

    this.getRequiredMaterial(ConsumableType.Alchemy);
  }
}
