import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Theme } from 'src/app/model';
import { StateService } from 'src/app/shared/services';
import { StyleService } from '../../services/style.service';
import { Logger } from 'src/logger';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSelectorComponent implements OnInit {
  currentTheme: Theme;
  defaultThemeId: number = 8;

  themes: Theme[] = [
    {
      id: 8,
      primaryColor: '#051F46',
      href: 'assets/custom-themes/bfa-theme.css',
      label: 'Battle for Azeroth',
      logoUrl: 'assets/images/png/wow-bfa-icon.png',
      isDark: false,
    },
    {
      id: 7,
      primaryColor: '#1B5E20',
      href: 'assets/custom-themes/legion-theme.css',
      label: 'Legion',
      logoUrl: 'assets/images/png/wow-legion-icon.png',
      isDark: false,
    },
    {
      id: 6,
      primaryColor: '#520000',
      href: 'assets/custom-themes/wod-theme.css',
      label: 'Warlords of Draenor',
      logoUrl: 'assets/images/png/wow-wod-icon.png',
      isDark: false,
    },
    {
      id: 5,
      primaryColor: '#14AA6C',
      href: 'assets/custom-themes/mop-theme.css',
      label: 'Mists of Pandaria',
      logoUrl: 'assets/images/png/wow-mop-icon.png',
      isDark: true,
    },
    {
      id: 4,
      primaryColor: '#660000',
      href: 'assets/custom-themes/cataclysm-theme.css',
      label: 'Cataclysm',
      logoUrl: 'assets/images/png/wow-cataclysm-icon.png',
      isDark: false,
    },
    {
      id: 3,
      primaryColor: '#4FC3F7',
      href: 'assets/custom-themes/wotlk-theme.css',
      label: 'Wrath of the Lich King',
      logoUrl: 'assets/images/png/wow-wotlk-icon.png',
      isDark: true,
    },
  ];
  constructor(
    private styleService: StyleService,
    private stateService: StateService,
    private localStorageService: LocalStorageService,
    private logger: Logger
  ) {}

  ngOnInit(): void {
    this.initTheme();
  }

  installTheme(theme: Theme) {
    this.logger.info(
      `Switching theme from ${this.currentTheme.label} to ${theme.label}`
    );
    this.setTheme(theme);
  }

  private setTheme(theme: Theme) {
    this.currentTheme = theme;

    if (this.currentTheme.isDefault) {
      this.styleService.removeStyle('theme');
    } else {
      this.styleService.setStyle('theme', this.currentTheme.href);
    }

    this.stateService.setLogo(this.currentTheme.logoUrl);
    this.localStorageService.setItem('themeId', this.currentTheme.id);
  }

  private getTheme(id: number) {
    return this.themes.find(theme => theme.id === id);
  }

  private initTheme() {
    const savedThemeId = this.localStorageService.getItem('themeId');

    if (savedThemeId) {
      const newTheme = this.getTheme(savedThemeId);
      this.logger.info(`Activating theme ${newTheme.label}`);
      this.setTheme(newTheme);
    } else {
      const defaultTheme = this.getTheme(this.defaultThemeId);
      this.logger.info(`Activating default theme ${defaultTheme.label}`);
      this.setTheme(defaultTheme);
    }
  }
}
