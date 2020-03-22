import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Content } from 'src/app/new-model/content.model';
import { ContentService } from 'src/app/shared/new-service/content.service';

@Component({
  selector: 'wowc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  public content: Content;
  public logoUrl: string;

  constructor(
    private cd: ChangeDetectorRef,
    private contentService: ContentService
  ) {}

  ngOnInit() {
    this.contentService.getContent().subscribe(content => {
      this.content = content;
      this.cd.markForCheck();
    });

    this.contentService.getLogoUrl().subscribe(logoUrl => {
      this.logoUrl = logoUrl;
      this.cd.markForCheck();
    });
  }
}
