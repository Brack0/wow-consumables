import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Profession } from 'src/app/new-model/profession.model';

@Injectable({ providedIn: 'root' })
export class ProfessionResolver implements Resolve<Profession> {
  resolve(route: ActivatedRouteSnapshot): Profession {
    const profession = route.paramMap.get('profession');
    return Profession[profession.toUpperCase()];
  }
}
