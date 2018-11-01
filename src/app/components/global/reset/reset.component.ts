import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { StateService } from 'src/app/services';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetComponent {
  constructor(private stateService: StateService) {}

  public callReset($event): void {
    this.stateService.callResetAllForms();
  }
}
