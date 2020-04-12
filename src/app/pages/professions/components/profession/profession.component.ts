import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'wowc-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
