import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/common/customer';
import { DataService } from 'src/app/common/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  isCard:boolean = true;

  customers:Customer[] = []; //state
  original:Customer[] = [];
  searchText:string = "";

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCustomers().subscribe(data => {
      this.original = this.customers = data;
    });
  }

  filterCustomers() {
    this.customers = this.original.filter(c =>  c.firstName.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0 
    ||   c.lastName.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0);
    
  }

  deleteData(id:number):void {
    this.customers = this.original = this.original.filter(c => c.id != id);

    this.dataService.deleteCustomer(id).subscribe(res => console.log(res));
  }
  
}
