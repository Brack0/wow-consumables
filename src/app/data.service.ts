import { Injectable } from '@angular/core';
import { Plant } from './plant';
import { PLANTS } from './mock-data';

@Injectable()
export class DataService {
    getPlants(): Promise<Plant[]> {
        return Promise.resolve(PLANTS);
    }
}