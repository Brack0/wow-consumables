import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Material } from 'src/app/model';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialComponent {
  @Input()
  material: Material;
  @Input()
  wantedNumber: number;
  @Input()
  craftNumber: number;

  constructor() {}
}
