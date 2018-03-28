import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionbibliothequesComponent } from './gestionbibliotheques.component';

describe('GestionbibliothequesComponent', () => {
  let component: GestionbibliothequesComponent;
  let fixture: ComponentFixture<GestionbibliothequesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionbibliothequesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionbibliothequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
