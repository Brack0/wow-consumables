import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'wowc-rank-selector',
  templateUrl: './rank-selector.component.html',
  styleUrls: ['./rank-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RankSelectorComponent {
  @Input()
  rank: number;

  @Output()
  private rankChange: EventEmitter<number> = new EventEmitter<number>();

  readonly ranks: number[] = [1, 2, 3];

  constructor() {}

  updateRank(newRank: number) {
    this.rank = newRank;
    this.rankChange.emit(newRank);
  }
}
