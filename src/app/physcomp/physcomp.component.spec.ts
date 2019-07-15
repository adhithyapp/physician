import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhyscompComponent } from './physcomp.component';

describe('PhyscompComponent', () => {
  let component: PhyscompComponent;
  let fixture: ComponentFixture<PhyscompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhyscompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhyscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
