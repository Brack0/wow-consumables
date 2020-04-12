import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionRecipesComponent } from './profession-recipes.component';

describe('ProfessionRecipesComponent', () => {
  let component: ProfessionRecipesComponent;
  let fixture: ComponentFixture<ProfessionRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
