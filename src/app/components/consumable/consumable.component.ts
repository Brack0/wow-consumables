import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { StateService } from '../../services';
import { Consumable } from '../../shared/model';
import { CustomValidators } from '../../shared/validators';

@Component({
  selector: 'app-consumable',
  templateUrl: './consumable.component.html',
  styleUrls: ['./consumable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumableComponent implements OnInit {
  @Input()
  consumable: Consumable;
  @Input()
  consumableArray: Consumable[];
  @Input()
  displayMaterial: boolean = false;
  @Input()
  rank: boolean = false;
  public form: FormGroup;
  public errorMessage: string;
  private rankNumber: number;

  constructor(private fb: FormBuilder, private stateService: StateService) {}

  public ngOnInit() {
    // init consumable from array (only for consumable with rank)
    if (this.consumableArray) {
      if (!this.rankNumber) {
        // Rank 3 by default
        this.rankNumber = 3;
      }
      this.consumable = this.consumableArray[this.rankNumber - 1];
    }

    // init form
    this.form = this.fb.group({
      rankNumber: [this.rankNumber],
      wantedNumber: [
        this.consumable.wantedNumber ? this.consumable.wantedNumber : '',
        [
          Validators.min(0),
          Validators.max(this.consumable.maxNumber),
          CustomValidators.inputStep(this.consumable.craftNumber)
        ]
      ]
    });

    // subscribe to input value and update with a debounce time of 500ms
    const wantedNumberControl = this.form.get('wantedNumber');
    wantedNumberControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((n: number) => this.computeWantedNumber(wantedNumberControl));

    if (this.rank) {
      const rankNumberControl = this.form.get('rankNumber');
      rankNumberControl.valueChanges.subscribe((n: number) => {
        // Reset model value
        this.consumable.wantedNumber = 0;

        // Update consumable
        this.rankNumber = n;
        this.consumable = this.consumableArray[n - 1];

        // Refresh validators
        wantedNumberControl.setValidators([
          Validators.min(0),
          Validators.max(100 * this.consumable.craftNumber),
          CustomValidators.inputStep(this.consumable.craftNumber)
        ]);
        wantedNumberControl.updateValueAndValidity();

        // Update recipe
        this.stateService.updateRecipe(this.consumable);
        this.stateService.callRefreshWowTooltip();
      });
    }
  }

  /**
   * Either update data or create a message
   * @param c input control
   */
  private computeWantedNumber(c: AbstractControl): void {
    if (c.touched || c.dirty) {
      if (c.errors) {
        if (c.errors.min || c.errors.max) {
          this.errorMessage = `Please enter a number between 0 and ${this.consumable.maxNumber}`;
        } else if (c.errors.step) {
          this.errorMessage = c.errors.step.message;
        } else {
          this.errorMessage = `Please enter a valid number.`;
        }
      } else {
        this.consumable.wantedNumber = c.value;
        this.stateService.updateWantedConsumables(this.consumable);
      }
    }
  }
}
