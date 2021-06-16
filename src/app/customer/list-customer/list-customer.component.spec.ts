import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { PanelsModule } from 'src/app/shared/panels/panels.module';
import { CustomerStore } from '../store/customer.store';
import { ListCustomerComponent } from './list-customer.component';

class MockCustomerStore {
  public customersList$ = of([]);
  public listCustomers() {}
}

describe('ListCustomerComponent', () => {
  let component: ListCustomerComponent;
  let fixture: ComponentFixture<ListCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCustomerComponent ],
      imports: [
        FormsModule, ReactiveFormsModule, PanelsModule
      ],
      providers: [
        { provide: CustomerStore, useClass: MockCustomerStore }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
