import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import * as _ from "lodash";
import { debounceTime } from "rxjs/operators";
import { StateService } from "src/app/shared/services";
import { Consumable } from "src/app/model";
import { CustomValidators } from "src/app/shared/validators";

@Component({
  selector: "app-consumable",
  templateUrl: "./consumable.component.html",
  styleUrls: ["./consumable.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumableComponent implements OnInit {
  @Input()
  consumableInput: Consumable;
  @Input()
  displayMaterial: boolean = false;
  public consumable: Consumable;
  public form: FormGroup;
  public errorMessage: string;
  private rankNumber: number;

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private stateService: StateService
  ) {}

  public ngOnInit() {
    // Cloning consumable (Read only access to recipes)
    this.consumable = this.displayMaterial
      ? _.cloneDeep(this.consumableInput)
      : this.consumableInput;
    // Init slider on model
    this.rankNumber = this.consumable.rank;

    // Init form and behavior
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      // Slider
      rankNumber: [{ value: this.rankNumber, disabled: !this.rankNumber }],
      // Input number with custom validators
      wantedNumber: [
        this.consumable.wantedNumber || "",
        [
          Validators.min(0),
          Validators.max(this.consumable.maxNumber),
          CustomValidators.inputStep(this.consumable.craftNumber)
        ]
      ]
    });

    const wantedNumberControl = this.form.get("wantedNumber");
    const rankNumberControl = this.form.get("rankNumber");

    // subscribe to input value and update with a debounce time of 500ms
    wantedNumberControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((n: number) => {
        this.validityCheckAndUpdate(wantedNumberControl);
        this.cd.markForCheck();
      });

    // subscribe to slider
    rankNumberControl.valueChanges.subscribe((n: number) => {
      // Update consumable
      this.consumable.changeRank(n);

      if (!this.displayMaterial) {
        // Reset model value
        this.consumable.wantedNumber = 0;

        // Refresh validators
        wantedNumberControl.setValidators([
          Validators.min(0),
          Validators.max(100 * this.consumable.craftNumber),
          CustomValidators.inputStep(this.consumable.craftNumber)
        ]);

        if (wantedNumberControl.value) {
          // Update field validity, then update recipes and wanted consumables
          wantedNumberControl.updateValueAndValidity();
        } else {
          // Update recipes and wanted consumables
          this.stateService.updateWantedConsumables(this.consumable);
        }
      } else {
        this.stateService.callRefreshWowTooltip();
      }
    });

    this.stateService
      .getResetAllForms()
      .subscribe(reset =>
        this.form.reset({
          rankNumber: { value: this.rankNumber, disabled: !this.rankNumber }
        })
      );
  }

  /**
   * Generate error message and/or push value to compute service
   * @param c input control
   */
  private validityCheckAndUpdate(c: AbstractControl): void {
    if (c.touched || c.dirty) {
      if (c.errors) {
        if (c.errors.min || c.errors.max) {
          this.errorMessage = `Please enter a number between 0 and ${this.consumable.maxNumber}`;
        } else if (c.errors.step) {
          this.errorMessage = c.errors.step.message;
        } else {
          this.errorMessage = `Please enter a valid number.`;
        }
        this.consumable.wantedNumber = 0;
      } else {
        this.consumable.wantedNumber = c.value;
      }
    }
    this.stateService.updateWantedConsumables(this.consumable);
  }
}
