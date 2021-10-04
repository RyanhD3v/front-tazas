import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOComponent } from './add-o.component';

describe('AddOComponent', () => {
  let component: AddOComponent;
  let fixture: ComponentFixture<AddOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
