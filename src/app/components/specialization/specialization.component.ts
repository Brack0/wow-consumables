import { Component, Input, OnInit } from '@angular/core';

import { Specialization } from '@model';

@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.scss']
})
export class SpecializationComponent {
  @Input() specialization: Specialization;

  constructor() {}
}
