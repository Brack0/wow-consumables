import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { Content } from 'src/app/new-model/content.model';
import { DataService } from './data.service';

@Injectable({ providedIn: 'root' })
export class ContentService {
  logoUrlSubject = new Subject<string>();

  constructor(private dataService: DataService) {}

  getContent(): Observable<Content> {
    return this.dataService.getContent().pipe(first());
  }

  getLogoUrl() {
    return this.logoUrlSubject.asObservable();
  }

  updateLogoUrl(logoUrl: string) {
    this.logoUrlSubject.next(logoUrl);
  }
}
