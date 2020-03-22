import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Profession, Material } from 'src/app/new-model/material.model';

@Injectable({ providedIn: 'root' })
export class MaterialService {
  constructor(private dataService: DataService) {}

  getMaterialById(id: number): Material | undefined {
    return this.dataService
      .getMaterials()
      .find(material => material.idMaterial === id);
  }

  getMaterials(): Material[] {
    return this.dataService.getMaterials();
  }

  getMaterialsByProfession(profession: Profession): Material[] {
    return this.dataService
      .getMaterials()
      .filter(material => material.profession === profession);
  }
}
