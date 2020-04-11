import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'wowc-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
  @Input()
  categoryTitle: string;
}
