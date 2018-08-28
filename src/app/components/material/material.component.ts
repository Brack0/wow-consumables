import { Component, Input } from '@angular/core';
import { Material } from '../../shared/model';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent {
  @Input()
  material: Material;
  @Input()
  wantedNumber: number;
  @Input()
  craftNumber: number;

  constructor() {}
}
