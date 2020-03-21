import { Injectable } from '@angular/core';
import { Theme } from 'src/app/model';

@Injectable()
export class ThemeStorageService {
  static storageKey = 'wow-consumables-theme-storage-current';

  setTheme(theme: Theme) {
    try {
      window.localStorage[ThemeStorageService.storageKey] = JSON.stringify(
        theme
      );
    } catch (e) {}
  }

  getTheme(): Theme {
    try {
      return JSON.parse(
        window.localStorage[ThemeStorageService.storageKey] || null
      );
    } catch (e) {
      return null;
    }
  }
}
