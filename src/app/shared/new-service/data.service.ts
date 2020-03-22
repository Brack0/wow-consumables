import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Content } from 'src/app/new-model/content.model';
import { Material } from 'src/app/new-model/material.model';
import { ContentSchema, MaterialSchema } from 'src/app/new-model/schema';

const jsonPath = 'assets/json/data/';

@Injectable({ providedIn: 'root' })
export class DataService {
  public content: Content;
  public materials: Material[];

  constructor(private httpClient: HttpClient) {}

  initData() {
    this.getContentData();
    this.getMaterialData();
  }

  public getContent() {
    return this.content;
  }

  public getMaterials() {
    return this.materials;
  }

  private getContentData() {
    this.httpClient
      .get(`${jsonPath}content.json`)
      .subscribe((data: ContentSchema) => {
        delete data.$schema;
        this.content = data;
      });
  }

  private getMaterialData() {
    this.httpClient
      .get(`${jsonPath}material.json`)
      .subscribe((data: MaterialSchema) => {
        this.materials = data.materials;
      });
  }
}
