import { Component, Input, OnInit } from '@angular/core';

import { Consumable } from '../model/consumable';

@Component({
  selector: 'app-consumable',
  templateUrl: './consumable.component.html',
  styleUrls: ['./consumable.component.scss']
})
export class ConsumableComponent implements OnInit {
  @Input() consumable: Consumable;
  @Input() displayMaterial = false;

  constructor() {}

  ngOnInit() {}
}
