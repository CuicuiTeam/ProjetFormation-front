import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutlivreComponent } from './ajoutlivre.component';

describe('AjoutlivreComponent', () => {
  let component: AjoutlivreComponent;
  let fixture: ComponentFixture<AjoutlivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutlivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutlivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
