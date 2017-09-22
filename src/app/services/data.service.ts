import { Injectable } from '@angular/core';
import { Specialization } from '../model/specialization';
import { Plant } from '../model/plant';
import { Flask } from '../model/flask';
import { Potion } from '../model/potion';
import { EXPORTDATA } from './mock-data';

@Injectable()
export class DataService {
    getSpecializations(): Promise<Specialization[]> {
        return Promise.resolve(EXPORTDATA.SPECIALIZATIONS);
    }

    getPlants(): Promise<Plant[]> {
        return Promise.resolve(EXPORTDATA.PLANTS);
    }

    getFlasks(): Promise<Flask[]> {
        return Promise.resolve(EXPORTDATA.FLASKS);
    }

    getPotions(): Promise<Potion[]> {
        return Promise.resolve(EXPORTDATA.POTIONS);
    }
}