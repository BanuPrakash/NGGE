import { Customer } from '../common/customer';
import { OnInit, ViewChild, Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from '../common/data.service';

@Component({
  selector:'customer-edit',
  styleUrls: ['./customer-edit.component.css'],
  templateUrl:'./customer-edit.component.html'
})
export class CustomerEditComponent implements OnInit {

  customer: Customer = 
  {
    id: 0,
    firstName: '',
    lastName: '',
    gender: '',
    address: ''
  };
 
  errorMessage: any = null;
  
  @ViewChild('customerForm')
  customerForm!: NgForm;
  
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService) { }

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
        let id = +params['id'];
        if (id !== 0) {
              this.getCustomer(id);
        }
      });

  }

  getCustomer(id: number) {
      this.dataService.getCustomer(id).subscribe((customer: Customer) => {
        this.customer = customer;
      });
  }

  submit() {
     this.dataService.updateCustomer(this.customer)
          .subscribe((status: boolean) => {
            if (status) { 
              this.customerForm.form.markAsPristine();
            }
            else {
              const msg = 'Unable to update customer';
              this.errorMessage = msg;
            }
            this.router.navigate(['/customers']);
        },
        (err: any) => console.log(err));
      
  }
  
  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/customers']);
  }
}
