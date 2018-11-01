import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ConsumableCategory } from 'src/app/shared/model';

@Component({
  selector: 'app-consumable-grid',
  templateUrl: './consumable-grid.component.html',
  styleUrls: ['./consumable-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumableGridComponent {
  @Input()
  consumableCategory: ConsumableCategory;
  @Input()
  displayMaterial: boolean = false;

  constructor() {}
}
