import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaReactivoComponent } from './formula-reactivo.component';

describe('FormulaReactivoComponent', () => {
  let component: FormulaReactivoComponent;
  let fixture: ComponentFixture<FormulaReactivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaReactivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
