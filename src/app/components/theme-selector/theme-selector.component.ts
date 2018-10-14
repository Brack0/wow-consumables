import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StateService, StyleService } from 'src/app/services';
import { Theme } from 'src/app/shared/model';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSelectorComponent implements OnInit {
  currentTheme: Theme;

  themes: Theme[] = [
    {
      primary: '#051F46',
      href: 'assets/bfa-theme.css',
      label: 'Battle for Azeroth',
      logoUrl: 'assets/images/png/wow-bfa-icon.png',
      isDark: false,
      isDefault: true
    },
    {
      primary: '#1B5E20',
      href: 'assets/legion-theme.css',
      label: 'Legion',
      logoUrl: 'assets/images/png/wow-legion-icon.png',
      isDark: false
    },
    {
      primary: '#520000',
      href: 'assets/wod-theme.css',
      label: 'Warlords of Draenor',
      logoUrl: 'assets/images/png/wow-wod-icon.png',
      isDark: false
    },
    {
      primary: '#14aa6c',
      href: 'assets/mop-theme.css',
      label: 'Mists of Pandaria',
      logoUrl: 'assets/images/png/wow-mop-icon.png',
      isDark: true
    },
    {
      primary: '#660000',
      href: 'assets/cataclysm-theme.css',
      label: 'Cataclysm',
      logoUrl: 'assets/images/png/wow-cataclysm-icon.png',
      isDark: false
    },
    {
      primary: '#4fc3f7',
      href: 'assets/wotlk-theme.css',
      label: 'Wrath of the Lich King',
      logoUrl: 'assets/images/png/wow-wotlk-icon.png',
      isDark: true
    }
  ];
  constructor(private styleService: StyleService, private stateService: StateService) {
    // const currentTheme = getThemeFromLocalStorage();
    // this.installTheme(currentTheme);
  }

  ngOnInit(): void {
    this.currentTheme = this.themes[0];
    this.stateService.setLogo(this.themes[0].logoUrl);
  }

  installTheme(theme: Theme) {
    this.currentTheme = this._getCurrentThemeFromHref(theme.href);

    if (theme.isDefault) {
      this.styleService.removeStyle('theme');
    } else {
      this.styleService.setStyle('theme', theme.href);
    }

    this.stateService.setLogo(this.currentTheme.logoUrl);
  }

  private _getCurrentThemeFromHref(href: string): Theme {
    return this.themes.find(theme => theme.href === href);
  }
}
