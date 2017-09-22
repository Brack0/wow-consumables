import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumableComponent } from './consumable.component';

describe('ConsumableComponent', () => {
  let component: ConsumableComponent;
  let fixture: ComponentFixture<ConsumableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
