import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiflivreComponent } from './modiflivre.component';

describe('ModiflivreComponent', () => {
  let component: ModiflivreComponent;
  let fixture: ComponentFixture<ModiflivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModiflivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiflivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
