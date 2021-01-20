import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customer/customers/customers.component';
import { CustomersCardComponent } from './customer/customers-card/customers-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersCardComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
