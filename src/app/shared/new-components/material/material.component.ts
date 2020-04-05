import { Component, Input } from '@angular/core';
import { Material } from 'src/app/new-model/material.model';

@Component({
  selector: 'wowc-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
})
export class MaterialComponent {
  @Input()
  material: Material;

  @Input()
  quantity: number;

  @Input()
  showTimesSymbol: boolean = false;
}
