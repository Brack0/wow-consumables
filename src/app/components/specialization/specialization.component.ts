import { Component, Input } from '@angular/core';
import { Specialization } from '../../shared/model';

@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.scss']
})
export class SpecializationComponent {
  @Input()
  specialization: Specialization;

  constructor() {}
}
