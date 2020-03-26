import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'wowc-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubHeaderComponent {
  @Input()
  title: string;
  @Input()
  subtitle: string;
}
