import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Step validator on input number
 * @param step
 */
export function inputStep(step: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if ((control.touched || control.dirty) && control.value % step !== 0) {
      return {
        step: {
          value: step,
          message: `Please enter a multiple of ${step}.`
        }
      };
    }
    return null;
  };
}
