import { Component, OnInit } from '@angular/core';

import { StateService } from 'app/services';
import { Content } from 'app/shared/model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer implements OnInit {
  public content: Content;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.stateService.getContent().subscribe(content => {
      this.content = content;
    });
  }
}
