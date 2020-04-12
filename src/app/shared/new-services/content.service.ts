import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Content } from 'src/app/new-model/content.model';
import { DataService } from './data.service';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private logoUrlSubject = new Subject<string>();

  constructor(private dataService: DataService) {}

  getContent(): Observable<Content> {
    return this.dataService.getContent();
  }

  getLogoUrl() {
    return this.logoUrlSubject.asObservable();
  }

  updateLogoUrl(logoUrl: string) {
    this.logoUrlSubject.next(logoUrl);
  }
}
