import { Injectable } from '@angular/core';
import { Plant } from './plant';
import { Flask } from './flask';
import { PLANTS, FLASKS } from './mock-data';

@Injectable()
export class DataService {
    getPlants(): Promise<Plant[]> {
        return Promise.resolve(PLANTS);
    }

    getFlasks(): Promise<Flask[]> {
        return Promise.resolve(FLASKS);
    }
}