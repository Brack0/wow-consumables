import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Content } from 'src/app/new-model/content.model';
import { Material } from 'src/app/new-model/material.model';
import { ContentSchema, MaterialSchema } from 'src/app/new-model/schema';

const jsonPath = 'assets/json/data/';

@Injectable({ providedIn: 'root' })
export class DataService {
  private contentSubject = new Subject<Content>();
  private materialsSubject = new Subject<Material[]>();

  constructor(private httpClient: HttpClient) {}

  initData() {
    this.getContentData();
    this.getMaterialData();
  }

  public getContent() {
    return this.contentSubject.asObservable();
  }

  public getMaterials() {
    return this.materialsSubject.asObservable();
  }

  private getContentData() {
    this.httpClient
      .get(`${jsonPath}content.json`)
      .subscribe((data: ContentSchema) => {
        delete data.$schema;
        this.contentSubject.next(data);
      });
  }

  private getMaterialData() {
    this.httpClient
      .get(`${jsonPath}material.json`)
      .subscribe((data: MaterialSchema) => {
        this.materialsSubject.next(data.materials);
      });
  }
}
