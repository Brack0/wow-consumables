import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MaterialCategory } from '../../shared/model';

@Component({
  selector: 'app-material-grid',
  templateUrl: './material-grid.component.html',
  styleUrls: ['./material-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialGridComponent {
  @Input()
  materialCategory: MaterialCategory;

  constructor() {}
}
