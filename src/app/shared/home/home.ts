import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  public title = 'World of Warcraft - Consumables';
  public subtitle = 'BETA VERSION';

  constructor() {}
}