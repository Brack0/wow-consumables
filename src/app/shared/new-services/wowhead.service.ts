import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WowheadService {
  private refreshWowTooltipSubject: Subject<void> = new Subject<void>();
  refreshWowTooltip$ = this.refreshWowTooltipSubject.asObservable();

  /**
   * Call a refresh of wow tooltip
   */
  callRefreshWowTooltip(): void {
    this.refreshWowTooltipSubject.next();
  }
}
