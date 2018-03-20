import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutbibliothequeComponent } from './ajoutbibliotheque.component';

describe('AjoutbibliothequeComponent', () => {
  let component: AjoutbibliothequeComponent;
  let fixture: ComponentFixture<AjoutbibliothequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutbibliothequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutbibliothequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
