import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wowc-profession-home',
  templateUrl: './profession-home.component.html',
  styleUrls: ['./profession-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
