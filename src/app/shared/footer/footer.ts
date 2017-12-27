import { Component } from '@angular/core';

import { Content } from '@model';
import { StateService } from 'app/services/state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {
  public content: Content;

  constructor(private stateService: StateService) {
    this.stateService.getContent().subscribe(content => {
      this.content = content;
    });
  }
}
