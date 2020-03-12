import { Injectable, EventEmitter } from "@angular/core";
import { Theme } from "src/app/model";

@Injectable()
export class ThemeStorage {
  static storageKey = "wow-consumable-theme-storage-current";

  setTheme(theme: Theme) {
    try {
      window.localStorage[ThemeStorage.storageKey] = JSON.stringify(theme);
    } catch (e) {}
  }

  getTheme(): Theme {
    try {
      return JSON.parse(window.localStorage[ThemeStorage.storageKey] || null);
    } catch (e) {
      return null;
    }
  }
}
