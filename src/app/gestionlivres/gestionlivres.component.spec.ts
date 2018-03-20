import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionlivresComponent } from './gestionlivres.component';

describe('GestionlivresComponent', () => {
  let component: GestionlivresComponent;
  let fixture: ComponentFixture<GestionlivresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionlivresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionlivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
