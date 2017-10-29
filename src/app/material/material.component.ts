import { Component, OnInit, Input } from '@angular/core';

import { Material } from '../model/material';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  @Input() material: Material;
  @Input() wantedNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
