import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Theme } from 'src/app/model';
import { ContentService } from 'src/app/shared/new-services';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Logger } from 'src/logger';
import { StyleService } from '../../services/style.service';
import { THEMES } from './themes';

@Component({
  selector: 'wowc-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSelectorComponent implements OnInit {
  currentTheme: Theme;
  defaultThemeId: number = 8;
  themes: Theme[] = THEMES;

  constructor(
    private styleService: StyleService,
    private contentService: ContentService,
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

    this.contentService.updateLogoUrl(this.currentTheme.logoUrl);
    this.localStorageService.setItem('themeId', this.currentTheme.id);
  }

  private getTheme(id: number) {
    return this.themes.find((theme) => theme.id === id);
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
