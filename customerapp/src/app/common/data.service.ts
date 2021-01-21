import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    customersUrl:string = 'http://localhost:1234/customers';
    ordersUrl:string = 'http://localhost:1234/orders';

    constructor(private http: HttpClient) { }

    getCustomers(): Observable<Customer[]> {
      return this.http.get<Customer[]>(this.customersUrl);
    }

    getCustomer(id:number): Observable<Customer> {
      return this.http.get<Customer>(`${this.customersUrl}/${id}`);
    }

    updateCustomer(customer:Customer): Observable<any> {
      return this.http.put(`${this.customersUrl}/${customer.id}`, customer);
    }


    deleteCustomer(id:number): Observable<any> {
      return this.http.delete(`${this.customersUrl}/${id}`);
    }

}
