import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation
} from "@angular/core";
import { StateService } from "src/app/shared/services";
import { Theme } from "src/app/model";
import { StyleService } from '../../services/style.service';
import { ThemeStorageService } from '../../services/theme-storage.service';

@Component({
  selector: "app-theme-selector",
  templateUrl: "./theme-selector.component.html",
  styleUrls: ["./theme-selector.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSelectorComponent implements OnInit {
  currentTheme: Theme;

  themes: Theme[] = [
    {
      primary: "#051F46",
      href: "assets/custom-themes/bfa-theme.css",
      label: "Battle for Azeroth",
      logoUrl: "assets/images/png/wow-bfa-icon.png",
      isDark: false,
      isDefault: true
    },
    {
      primary: "#1B5E20",
      href: "assets/custom-themes/legion-theme.css",
      label: "Legion",
      logoUrl: "assets/images/png/wow-legion-icon.png",
      isDark: false
    },
    {
      primary: "#520000",
      href: "assets/custom-themes/wod-theme.css",
      label: "Warlords of Draenor",
      logoUrl: "assets/images/png/wow-wod-icon.png",
      isDark: false
    },
    {
      primary: "#14AA6C",
      href: "assets/custom-themes/mop-theme.css",
      label: "Mists of Pandaria",
      logoUrl: "assets/images/png/wow-mop-icon.png",
      isDark: true
    },
    {
      primary: "#660000",
      href: "assets/custom-themes/cataclysm-theme.css",
      label: "Cataclysm",
      logoUrl: "assets/images/png/wow-cataclysm-icon.png",
      isDark: false
    },
    {
      primary: "#4FC3F7",
      href: "assets/custom-themes/wotlk-theme.css",
      label: "Wrath of the Lich King",
      logoUrl: "assets/images/png/wow-wotlk-icon.png",
      isDark: true
    }
  ];
  constructor(
    private styleService: StyleService,
    private stateService: StateService,
    private themeStorageService: ThemeStorageService
  ) {}

  ngOnInit(): void {
    const currentTheme = this.themeStorageService.getTheme();
    if (currentTheme) {
      this.installTheme(currentTheme);
    } else {
      this.installTheme(this.getDefaultTheme());
    }
  }

  installTheme(theme: Theme) {
    this.currentTheme = this.getCurrentThemeFromHref(theme.href);

    if (theme.isDefault) {
      this.styleService.removeStyle("theme");
    } else {
      this.styleService.setStyle("theme", theme.href);
    }

    this.stateService.setLogo(this.currentTheme.logoUrl);

    if (this.currentTheme) {
      this.themeStorageService.setTheme(this.currentTheme);
    }
  }

  private getCurrentThemeFromHref(href: string): Theme {
    return this.themes.find(theme => theme.href === href);
  }

  private getDefaultTheme(): Theme {
    return this.themes.find(theme => theme.isDefault);
  }
}
