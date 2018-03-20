import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifmembreComponent } from './modifmembre.component';

describe('ModifmembreComponent', () => {
  let component: ModifmembreComponent;
  let fixture: ComponentFixture<ModifmembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifmembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifmembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
