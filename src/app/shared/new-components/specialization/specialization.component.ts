import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Specialization } from 'src/app/new-model/specialization.model';

@Component({
  selector: 'wowc-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecializationComponent {
  @Input()
  specialization: Specialization;
}
