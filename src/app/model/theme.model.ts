export class Theme {
  primary: string;
  href: string;
  label: string;
  logoUrl: string;
  isDark?: boolean;
  isDefault?: boolean;

  constructor(primary: string, href: string, label: string, logoUrl: string, isDefault?: boolean) {
    this.primary = primary;
    this.href = href;
    this.label = label;
    this.logoUrl = logoUrl;
    this.isDefault = isDefault;
  }
}
