import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Content } from 'src/app/new-model/content.model';
import { Material } from 'src/app/new-model/material.model';
import { ContentSchema, MaterialSchema } from 'src/app/new-model/schema';

const jsonPath = 'assets/json/data/';

@Injectable({ providedIn: 'root' })
export class DataService {
  private content: Content;
  private materials: Material[];

  constructor(private httpClient: HttpClient) {}

  public getContent() {
    if (!this.content) {
      return this.getContentData();
    }
    return of(this.content);
  }

  public getMaterials() {
    if (!this.materials) {
      return this.getMaterialData();
    }
    return of(this.materials);
  }

  private getContentData() {
    return this.httpClient.get(`${jsonPath}content.json`).pipe(
      map((data: ContentSchema) => {
        delete data.$schema;
        this.content = data;
        return data;
      })
    );
  }

  private getMaterialData() {
    return this.httpClient.get(`${jsonPath}material.json`).pipe(
      map((data: MaterialSchema) => {
        this.materials = data.materials;
        return data.materials;
      })
    );
  }
}
