import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionempruntsComponent } from './gestionemprunts.component';

describe('GestionempruntsComponent', () => {
  let component: GestionempruntsComponent;
  let fixture: ComponentFixture<GestionempruntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionempruntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionempruntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
