import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import '@rxjs';

import { Specialization } from '../model/specialization';
import { Plant } from '../model/plant';
import { Flask } from '../model/flask';
import { Potion } from '../model/potion';
import { EXPORTDATA } from './mock-data';

@Injectable()
export class DataService {
  getSpecializations(): Observable<Specialization[]> {
    return Observable.of(EXPORTDATA.SPECIALIZATIONS);
  }

  getPlants(): Observable<Plant[]> {
    return Observable.of(EXPORTDATA.PLANTS);
  }

  getFlasks(): Observable<Flask[]> {
    return Observable.of(EXPORTDATA.FLASKS);
  }

  getPotions(): Observable<Potion[]> {
    return Observable.of(EXPORTDATA.POTIONS);
  }
}
