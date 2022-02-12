import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistmemberComponent } from './booklistmember.component';

describe('BooklistmemberComponent', () => {
  let component: BooklistmemberComponent;
  let fixture: ComponentFixture<BooklistmemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklistmemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklistmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
