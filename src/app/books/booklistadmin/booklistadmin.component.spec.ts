import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistadminComponent } from './booklistadmin.component';

describe('BooklistadminComponent', () => {
  let component: BooklistadminComponent;
  let fixture: ComponentFixture<BooklistadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklistadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
