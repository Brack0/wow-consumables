import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/new-model/material.model';
import { MaterialService, WowheadService } from 'src/app/shared/new-services';

@Component({
  selector: 'wowc-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  materials: Material[];

  constructor(
    private materialService: MaterialService,
    private wowheadService: WowheadService
  ) {}

  ngOnInit() {
    this.materialService.getMaterials().subscribe((materials) => {
      this.materials = materials;
      this.wowheadService.callRefreshWowTooltip();
    });
  }
}
