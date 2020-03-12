import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from "@angular/core";
import { StateService } from "src/app/services";
import { Content } from "src/app/model";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  public content: Content;
  public logoUrl: string;

  constructor(
    private cd: ChangeDetectorRef,
    private stateService: StateService
  ) {}

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
