import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  static storageKey = 'wow-consumables';

  setItem(key: string, value: any) {
    const data = JSON.parse(localStorage.getItem(LocalStorageService.storageKey) || '{}');
    data[key] = value;
    localStorage.setItem(LocalStorageService.storageKey, JSON.stringify(data));
  }

  getItem(key: string) {
    const data = JSON.parse(localStorage.getItem(LocalStorageService.storageKey) || '{}');
    return data[key];
  }
}
