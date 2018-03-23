import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodiquesComponent } from './periodiques.component';

describe('PeriodiquesComponent', () => {
  let component: PeriodiquesComponent;
  let fixture: ComponentFixture<PeriodiquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodiquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
