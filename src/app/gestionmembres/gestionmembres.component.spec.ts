import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionmembresComponent } from './gestionmembres.component';

describe('MembresComponent', () => {
  let component: GestionmembresComponent;
  let fixture: ComponentFixture<GestionmembresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionmembresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionmembresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
