import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/new-model/material.model';
import { MaterialService } from 'src/app/shared/new-services';

@Component({
  selector: 'wowc-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  materials: Material[];

  constructor(private materialService: MaterialService) {}

  ngOnInit() {
    this.materialService.getMaterials().subscribe((materials) => {
      this.materials = materials;
    });
  }
}
