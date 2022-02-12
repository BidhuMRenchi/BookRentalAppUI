import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentallistComponent } from './rentallist.component';

describe('RentallistComponent', () => {
  let component: RentallistComponent;
  let fixture: ComponentFixture<RentallistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentallistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
