import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'wowc-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent implements OnInit {
  @Input()
  categoryTitle: string;

  constructor() {}

  ngOnInit(): void {}
}
