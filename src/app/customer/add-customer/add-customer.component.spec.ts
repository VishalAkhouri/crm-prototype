import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { PanelsModule } from 'src/app/shared/panels/panels.module';
import { CustomerStore } from '../store/customer.store';
import { AddCustomerComponent } from './add-customer.component';

class MockCustomerStore {
  public customersList$ = of([]);
  public listCustomers() {}
  public saveCustomer() {}
}

describe('AddCustomerComponent', () => {
  let component: AddCustomerComponent;
  let fixture: ComponentFixture<AddCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerComponent ],
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
    fixture = TestBed.createComponent(AddCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
