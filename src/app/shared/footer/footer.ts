import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StateService } from '../../services';
import { Content } from '../model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer implements OnInit {
  public content: Content;
  public logoUrl: string;

  constructor(private cd: ChangeDetectorRef, private stateService: StateService) {}

  ngOnInit() {
    this.stateService.getContent().subscribe(content => {
      this.content = content;
    });

    this.stateService.getLogo().subscribe(logoUrl => {
      this.logoUrl = logoUrl;
      this.cd.markForCheck();
    });
  }
}
