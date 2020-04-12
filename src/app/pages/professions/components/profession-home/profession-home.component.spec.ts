import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionHomeComponent } from './profession-home.component';

describe('ProfessionHomeComponent', () => {
  let component: ProfessionHomeComponent;
  let fixture: ComponentFixture<ProfessionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
