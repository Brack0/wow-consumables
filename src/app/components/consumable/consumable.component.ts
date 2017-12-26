import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { Consumable, RankedConsumable } from '@model';
import { StateService } from '../../services/state.service';
import { CustomValidators } from '../../shared/validators.imports';

@Component({
  selector: 'app-consumable',
  templateUrl: './consumable.component.html',
  styleUrls: ['./consumable.component.scss']
})
export class ConsumableComponent implements OnInit, OnDestroy {
  @Input() consumable: Consumable;
  @Input() consumableArray: Consumable[];
  @Input() displayMaterial: boolean = false;
  @Input() rank: boolean = false;
  public form: FormGroup;
  public errorMessage: string;
  private rankNumber: number;

  constructor(private fb: FormBuilder, private stateService: StateService) {}

  public ngOnInit() {
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
          Validators.max(100 * this.consumable.craftNumber),
          CustomValidators.inputStep(this.consumable.craftNumber)
        ]
      ]
    });

    // subscribe to input value and update with a debounce time of 500ms
    const wantedNumberControl = this.form.get('wantedNumber');
    wantedNumberControl.valueChanges
      .debounceTime(500)
      .subscribe((n: number) => this.computeWantedNumber(wantedNumberControl));

    if (this.rank) {
      const rankNumberControl = this.form.get('rankNumber');
      rankNumberControl.valueChanges.subscribe((n: number) => {
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

  public ngOnDestroy(): void {
    this.consumable.wantedNumber = 0;
    this.stateService.updateWantedConsumables(this.consumable);
  }

  /**
   * Either update data or create a message
   * @param n input value
   * @param c input control
   */
  private computeWantedNumber(c: AbstractControl): void {
    if (c.touched || c.dirty) {
      if (c.errors) {
        if (c.errors.min || c.errors.max) {
          this.errorMessage = `Please enter a number between 0 and ${100 *
            this.consumable.craftNumber}`;
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
