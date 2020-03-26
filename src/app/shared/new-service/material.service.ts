import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Material, Profession } from 'src/app/new-model/material.model';
import { DataService } from './data.service';

@Injectable({ providedIn: 'root' })
export class MaterialService {
  constructor(private dataService: DataService) {}

  getMaterialById(id: number): Observable<Material> {
    return this.dataService.getMaterials().pipe(
      first(),
      map(materials => materials.find(material => material.idMaterial === id))
    );
  }

  getMaterials(): Observable<Material[]> {
    return this.dataService.getMaterials().pipe(first());
  }

  getMaterialsByProfession(profession: Profession): Observable<Material[]> {
    return this.dataService.getMaterials().pipe(
      first(),
      map(materials =>
        materials.filter(material => material.profession === profession)
      )
    );
  }
}