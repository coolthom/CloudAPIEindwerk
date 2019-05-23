import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindGuitarComponent } from './find-guitar.component';

describe('FindGuitarComponent', () => {
  let component: FindGuitarComponent;
  let fixture: ComponentFixture<FindGuitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindGuitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindGuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
