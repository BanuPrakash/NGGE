import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersComponent } from './customers.component';
import { CustomersCardComponent } from '../customers-card/customers-card.component';
import { Customer } from 'src/app/common/customer';
import { FormsModule } from '@angular/forms';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;
  let customers: Customer[] = [];
  beforeEach(async () => {
    customers = [
      {
        id: 1,
        firstName: 'Rachel',
        lastName: 'Green ',
        gender: 'female',
        address: 'Blore',
      },
      {
        id: 2,
        firstName: 'Chandler',
        lastName: 'Bing',
        gender: 'male',
        address: 'West Street',
      },{
        "id": 4,
        "firstName": "Monica",
        "lastName": "Geller",
        "gender": "female",
        "address": "some address"
    },
    {
        "id": 5,
        "firstName": "Ross",
        "lastName": "Geller",
        "gender": "male",
        "address": "some address "
    }
    ];
    await TestBed.configureTestingModule({
      declarations: [CustomersComponent, CustomersCardComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersComponent); // <app-customers></app-customers>
    component = fixture.componentInstance;
     fixture.detectChanges();
  });

  it('should create', () => {
    component.customers = customers;
    component.original = customers;
    expect(component).toBeTruthy();
  });

  it('should create 4 cards', () => {
    component.customers = customers;
    component.original = customers;
    fixture.detectChanges();
    let cards = fixture.nativeElement.querySelectorAll('.card');
    expect(cards.length).toEqual(4);
  });

  it('should delete a customer ', () => {
    component.customers = customers;
    component.original = customers;
    component.deleteData(2);
    fixture.detectChanges();
    let cards = fixture.nativeElement.querySelectorAll('.card');
    expect(cards.length).toEqual(3);
  });

});
