import { Component, Input, OnInit } from '@angular/core';

import { Material } from '@model';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent {
  @Input() material: Material;
  @Input() wantedNumber: number;
  @Input() craftNumber: number;

  constructor() {}
}
