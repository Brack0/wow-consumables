import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionCraftsComponent } from './profession-crafts.component';

describe('ProfessionCraftsComponent', () => {
  let component: ProfessionCraftsComponent;
  let fixture: ComponentFixture<ProfessionCraftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionCraftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionCraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
