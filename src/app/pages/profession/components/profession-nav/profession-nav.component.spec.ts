import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionNavComponent } from './profession-nav.component';

describe('ProfessionNavComponent', () => {
  let component: ProfessionNavComponent;
  let fixture: ComponentFixture<ProfessionNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
