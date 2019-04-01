import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSongComponent } from './find-song.component';

describe('FindSongComponent', () => {
  let component: FindSongComponent;
  let fixture: ComponentFixture<FindSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
