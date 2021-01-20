import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/common/customer';

@Component({
  selector: 'app-customers-card',
  templateUrl: './customers-card.component.html',
  styleUrls: ['./customers-card.component.css']
})
export class CustomersCardComponent implements OnInit {

  @Input()
  customers:Customer[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
