import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankSelectorComponent } from './rank-selector.component';

describe('RankSelectorComponent', () => {
  let component: RankSelectorComponent;
  let fixture: ComponentFixture<RankSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
