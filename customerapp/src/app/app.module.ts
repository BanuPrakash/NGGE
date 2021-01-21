import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {Route,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customer/customers/customers.component';
import { CustomersCardComponent } from './customer/customers-card/customers-card.component';
import {   HoverDirective } from './app.hover.directive';
import { TextconvertPipe } from './textconvert.pipe';
import { HomeComponent } from './home/home.component';
import { CustomerEditComponent } from './customer/customer-edit.component';
import { LinkActivate } from './common/link.activate';
import { MyInterceptor } from './common/my.interceptor';
 
 
const routes: Route[]  = [
  {
    path: 'home',
    component : HomeComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'customers/edit/:id',
    component: CustomerEditComponent
  },
  {
    path: 'orders',
    canActivate: [LinkActivate],
    loadChildren:() => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: '**',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersCardComponent,
    CustomerEditComponent,
    HoverDirective,
    TextconvertPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
