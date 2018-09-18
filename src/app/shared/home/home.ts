import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  public title = 'World of Warcraft - Consumables';
  public subtitle = 'Battle for Azeroth';

  constructor() {}
}
