import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { Profession } from 'src/app/new-model/profession.model';
import { Logger } from 'src/logger';

@Injectable({ providedIn: 'root' })
export class ProfessionResolver implements Resolve<Profession> {
  constructor(private router: Router, private logger: Logger) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Profession> {
    const professionParam = route.paramMap.get('profession');

    const profession: Profession = Profession[professionParam.toUpperCase()];
    if (profession) {
      return of(profession);
    } else {
      this.logger.warn(
        `Profession ${professionParam} not found, redirect to home page`
      );
      this.router.navigate(['/home']);
      return EMPTY;
    }
  }
}
