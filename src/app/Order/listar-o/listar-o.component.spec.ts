import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOComponent } from './listar-o.component';

describe('ListarOComponent', () => {
  let component: ListarOComponent;
  let fixture: ComponentFixture<ListarOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
