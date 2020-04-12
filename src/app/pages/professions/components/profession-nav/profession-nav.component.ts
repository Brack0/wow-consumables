import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Profession } from 'src/app/new-model/profession.model';

@Component({
  selector: 'wowc-profession-nav',
  templateUrl: './profession-nav.component.html',
  styleUrls: ['./profession-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionNavComponent implements OnInit {
  professions: string[] = Object.values(Profession);

  constructor() {}

  ngOnInit() {}
}
