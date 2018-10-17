import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMantComponent } from './book-mant.component';

describe('BookMantComponent', () => {
  let component: BookMantComponent;
  let fixture: ComponentFixture<BookMantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookMantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
