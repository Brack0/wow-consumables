import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { StateService } from 'src/app/shared/services';
import { Logger } from 'src/logger';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetComponent {
  constructor(private stateService: StateService, private logger: Logger) {}

  public callReset(): void {
    this.logger.info('Reseting all forms');
    this.stateService.callResetAllForms();
  }
}
