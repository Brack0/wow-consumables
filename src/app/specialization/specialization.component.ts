import { Component, OnInit, Input } from '@angular/core';
import { Specialization } from '../model/specialization';

@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.scss']
})
export class SpecializationComponent implements OnInit {
  @Input() specialization: Specialization;

  constructor() {}

  ngOnInit() {}
}
