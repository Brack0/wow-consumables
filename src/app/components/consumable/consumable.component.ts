import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { Consumable } from '@model';
import { StateService } from '@services';
import { CustomValidators } from '@validators';

@Component({
  selector: 'app-consumable',
  templateUrl: './consumable.component.html',
  styleUrls: ['./consumable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumableComponent implements OnInit {
  @Input() consumable: Consumable;
  @Input() displayMaterial = false;
  private form: FormGroup;
  private errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private stateService: StateService,
    private cd: ChangeDetectorRef
  ) {}

  public ngOnInit() {
    // init form
    this.form = this.fb.group({
      wantedNumber: [
        '',
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
      .subscribe((n: number) =>
        this.computeWantedNumber(n, wantedNumberControl)
      );
  }

  /**
   * Either update data or create a message
   * @param n input value
   * @param c input control
   */
  private computeWantedNumber(n: number, c: AbstractControl): void {
    if (c.touched || c.dirty) {
      if (c.errors) {
        this.errorMessage = `Please enter a number between 0 and ${100 *
          this.consumable.craftNumber}`;
        this.cd.markForCheck();
      } else {
        this.consumable.wantedNumber = n;
        this.stateService.updateWantedConsumables(this.consumable);
        this.cd.markForCheck();
      }
    }
  }
}
