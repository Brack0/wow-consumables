import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'wowc-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {}
