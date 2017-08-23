import { Injectable } from '@angular/core';
import { Specialization } from './specialization';
import { Plant } from './plant';
import { Flask } from './flask';
import { SPECIALIZATIONS, PLANTS, FLASKS } from './mock-data';

@Injectable()
export class DataService {
    getSpecializations(): Promise<Specialization[]> {
        return Promise.resolve(SPECIALIZATIONS);
    }

    getPlants(): Promise<Plant[]> {
        return Promise.resolve(PLANTS);
    }

    getFlasks(): Promise<Flask[]> {
        return Promise.resolve(FLASKS);
    }
}