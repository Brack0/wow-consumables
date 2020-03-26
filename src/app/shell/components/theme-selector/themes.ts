import { Theme } from 'src/app/model';

export const THEMES: Theme[] = [
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
