# JavaScript and Angular Training

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: 
banu@lucidatechnologies.com; 
banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/NGGE
----------------------------------------

Softwares required: [OSS]
1) Chrome web browser
2) Node.js latest LTS
3) Visual Studio Code
----------------------------------------

JavaScript
	==> Scripting language, loosely typed, interpretted language
	==> ECMA Std
	ECMA Script: 5

	file.js ==> JavaScript engine
========================================

	first.js

	var a = 10;

	function add(x, y) {
		var res = x + y;
		return res;
	}

	var res = add(4,5);

	console.log(res);
============================================================

a.js

var g = 100; // global variable

function doTask() {
	var a =  10; //function scope

	if(g > a) {
		var b = 15; //function scope ==> hoisting ==> hoisted to function scope
		c = 50; // execution phase, tries to assign 50 to c; check if "c" is available; 
		//it creates "c" on global context
	}
	console.log(g, a, b, c); // 100 10 15 50
}

doTask();
console.log(g,  c); // 100 50

==============================


var g = 100; // global variable

function doTask() {
	var a =  10; //function scope

	if(g < a) {
		var b = 15; //function scope ==> hoisting ==> hoisted to function scope
		c = 50;  // hoisted to global scope
	}
	console.log(g, a, b, c);  
}

doTask();
console.log(g,  c);   // c is undefined

===========

var g = 100; // global variable

function doTask() {
	var a =  10; //function scope

	if(g < a) {
		var b = 15; //function scope ==> hoisting ==> hoisted to function scope
		c = 50;  
	}
	console.log(g, a, b);  
}

doTask();
console.log(g);    
=====================================

function add(x,y) {
	return
		x + y;
}

var res = add(4,5);

console.log(res); // undefined
======================================

JS engine AST ==> semi-colon insertion

function add(x,y) {
	return;
		x + y; 
}

var res = add(4,5);

console.log(res); // undefined
=======
function add(x,y) {
	console.log(x+y);
}

var res = add(4,5); 

res value will be "undefined"
======================================================

OOP with JS
===========

var add = function (x,y) {
	return x + y;
}


var sub = new Function("x", "y", "return x - y");
===============================================

1) var obj = new Object();
obj.name = "Raj"; //state

obj.getDetails = function() { // behaviour
	return this.name;
}

2) function constructor // Object owned instance methods

function Person(name, age) {
	this.name = name;
	this.age = age;

	this.getName = function() {
		return this.name;
	}
}

var p1 = new Person("Tim", 34);
var p2 = new Person("Terry", 24);

console.log(p1.getName());

3) class owned instance methods //Addy Osmani

function Person(name, age) {
	this.name = name;
	this.age = age;
}


Person.prototype.getName = function() {
		return this.name;
	}
	
// static behaviour
Person.equals = function(p1,p2) {
	
}
var p1 = new Person("Tim", 34);
var p2 = new Person("Terry", 24);

var res = Person.equals(p1,p2);
console.log(p1.getName());
=====================================================

4) JSON {} key value pair

JavaScript Object Notation

var obj = {
	"id" : 1,
	"name": "Raj"	
};

values can be : number, string, boolean, object, function , array, undefined, null
==============================================================

var product = {
	"name" : "iPhone 12"
}

var obj = {
	"id" : 1,
	"name": "Raj",
	getName: function() {
		return this.name;
	}	
};

var ref = obj.getName; // context is lost

ref(); // undefined

ref.call(obj); // Raj

ref.call(product); // iPhone 12

========

	Method m = clazz.getDeclaredMethods()[0]
	m.invoke(obj); // Reflection API
=====================================


var obj = {
	"id" : 1,
	"name": "Raj",
	getName: function() {
		return this.name;
	}	
};

var ref = obj.getName.bind(obj);
ref(); 
============================================================

Functional style of Programming
-------------------------------
OOP ==> methods ==> tightly coupled to state of object
deposit(amt); ==> Account ==> mutate balance


Functional style of Programming ==> functions which are not coupled to any object
	==> High Order Functions
		1) functions which accept other functions as arguments
		2) function returns a function
		==> treat functions as first-class members [ like primitives or objects]

		Commonly used HOF are:
			1) map
			2) forEach
			3) filter
			4) reduce
			5) flatMap
			6) limit
			7) skip
			....


		filter ==> predicate ==> subset
		map ==> transform data
============================================
 var data = [5, 2, 1, 3, 21, 46];
===============

HOF: function returns a function

// pure function
function greeting(msg, name) {
	return msg + " " + name;
}

console.log(greeting("Good morning", "Smith")); 

console.log(greeting("Good morning", "Anna")); 

================
// Closure

function greeting(msg) {
	return function(name) {
		return msg + " " + name;
	}
}

var gm = greeting("Good Morning");

gm("Smith");
gm("Anna");

==============

function adder(base) {
	return function(no) {
		return base + no;
	}
}

var fiveAdder = adder(5);

console.log(fiveAdder(2)); // 7
 

var tenAdder = adder(10);
console.log(tenAdder(4)) // 14
======================================================


	getEmployee(12); 
		==> REST call
		==> Fetch data and cache it

	getExamplee(12);
		==> get it from cache

	getEmployee(55);
		==> REST call
		==> Fetch data and cache it

	getEmployee(55);
		==> get it from cache
 =========================

 Memoize pattern ==> Cache
 ==================================================================

 ES2015 => ECMAScript 6
 ----------------------

 Source Code ES2015/ES6 ==> Transcompiler ==> ES5 or below ==> JS engine

 Transpiler ==> Babel/ Tracuer

 Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines.
=====================================================

Features of ES2015:

1) Scope variables and constants
JS5 ==> global and function scope
ES2105 ==> block scope

"let" and "const"

var g = 100; // global variable
const PI = 3.14159; 

function doTask() {
	var a =  10; //function scope

	if(g > a) {
		let b = 15;  // block scope
		c = 50;  
	}
	console.log(g, a); // b is not visible  
}

doTask();
console.log(g);   
==================================

2) Arrow functions and default arguments

let add = (x = 0, y = 0, z = 0) => {
	return x + y + z;
}

add(4,5,7);

add(56,1); // 57

========

function map(elems, transformFn) {
    var data = [];
    forEach(elems, (elem) => data.push(transformFn(elem)));
    return data;
}
=======================================

3) Deconstruction
	3.1) Array

	var colors = ["red", "green", "blue","orange"];

	JS 5 way:
	var r = colors[0];
	var g = colors[1];

	ES2015 way:

	let [r,g,...other] = colors;

	3.2) Object

		var product =  { 
			"id": 1, 
			"name": "iPhone", 
			"price": 124447.44, 
			"category": "mobile" };

		let {name,category} = product;
		// let name = product.name

		let {name:x} = product;
		// let x = product.name;
=================================================================
4) Clone

         var colors = ["red", "green", "blue","orange"];

         var ref = colors ; // reference

         ref[0] = "Gold";

        let r = [...colors]; // clone


        ======

        	var product =  { 
				"id": 1, 
				"name": "iPhone", 
				"price": 124447.44, 
				"category": "mobile" };

			var prdCopy = {...product}; 
====================================================================

5) Promise API ==> Async calls to be made
	==> like Callable and Future

	promise chain :
	fetch("https://jsonplaceholder.typicode.com/users")
	.then(res => res.json())
	.then(data => console.log(data));


	doTask().
	then(..).
	then(...).
	catch(err => console.log(err));



=====================

6) Promise API with async and await
=====================================================

7) keyword class:

class Person {
	constructor(name, age) {
		this.name = name || "";
		this.age = age || 0;
	}

	getName() {
		return this.name;
	}

	getAge() {
		return this.age;
	}
}

let p1 = new Person("Tim", 34);

let p2 = new Person("Raj");

let p3 = new Person();
==========================================================

8) class Product {
	...	
}


class Tv extends Product {
	constructor(id,name,price,screenType) {
		super(id,name,price);
		this.screenType = screenType;
	}
	..
}
======================================================

9) New String literal [ ticks ``] ==> useful for view templates


"" or ''

var name = "Peter";

var msg = `

	Welcome to Angular Training,

	Welcome ${name}

	Happy Learning
`;


older way:

"Welcome to Angular Training," + "Welcome " + name + ...
=============================================================================

10) Generators: Saga of events to execute 

function* doTask() {
	console.log("one");

	yield 12;

	console.log("two");

	yield "Hello";
}

let iter = doTask();

iter.next() //  {value: 12, done: false}

iter.next() // {value: "Hello", done: false}
======================================================

Proxy, Reflection
============================================================



======================================================

11) Proxy, Reflection
============================================================

12) ES 6 Module system

lib.js

export let map = function(elems, transformFn) {
	...
}

export const filter = function(elems, predicate) {
	...
}

let forEach = function (..) {}
=--===
other.js

import { map, filter} from './lib';

map(..)
filter(...)

---
some.js

import * as library from './lib';

library.map()
library.filter()
==========================================================

ES2015 or ESNext
	Transpile to 
ES 5
=================================
function Upper() {
    return function(target: Object, key: string) {
        let val = target[key];

        const setter = (data:string) => {
            val = data.toUpperCase();
        }

        const getter = () => val;

        Object.defineProperty(target, key , {
            get: getter,
            set : setter
        });
    }
}

class User {
    @Upper()
    firstName: string;

    @Upper()
    lastName: string;
}

let u = new User();
u.firstName = "Banu";
u.lastName = "prakash";
console.log(u.firstName);
console.log(u.lastName);
=====================

Node Js
===============

	==> Node.JS == JavaScript environment with V8 JavaScript engine ==> headless JS engine

	Chrome ==> V8 engine

	=======> Why Node.JS
		1) As an environment to build web application
			Vue, react, Angular, Backbone
			TypeScript, ES2015 ==> ES5

			100+ files ==> bundle.js
			minify, uglify
			Running test scripts
		2) Run standalone application written in JS
		3) Write Server side RESTendpoints, Web application [ like servlets, ASP, PHP, ...]
=============================================================

Day 2:
-----
	Object, function constructor ==> class owned and object owned methods, static methods, JSON [ UI ]

	functional style of programming ==> HOF ==> Function accept function as argument, function return a function

	Filter, map, reduce, forEach ==> big data

	closure ==> inner function has an access to all the members of outer
	
	ES2015 ECMAScript 6
	arrow, default arguments, deconstructing array and objects, promise api, async and await, class, ES6 modules, string literal ``, Generator
--------------------------------------------
Node.js [ 14 LTS version]
-------------------------
	1) as an environment for building web applications [ React, Vue, Angular,..]
		Transcompiler, linting, testing, bundling
	2) Server side application
	3) Standalone application using JS

	JS event loop [ timers, pendingOStask,..]

	NodeJS ==> platform with unified interface to interact with V8 and libuv

	JS [ 100% js] ==> Node.JS [ JS and C++] ==> V8[ C++] and libuv [ C++ ]

	Each Node.JS has only one event loop [ one thread ]
---------------------------------------------------------------
Pure vanilla Module System:
cart.js
//IIFE
(function() {
	var cart[]; //scope of module

	function addToCart(item) {
		cart.push(item);
	}

	function getItems() {
		return cart;
	}
})();

checkout.js
(function() {
	var cart[]; // scope of module
	function pay() {

    }
})();

index.js
<script src="cart.js"></script>
<script src="checkout.js"></script>

AMD ==> Asynchronous Module Definition

ES6 module system

Node.JS uses CommonJS module system

module.exports ==> export of ES 6
require() ==> import of ES 6
======================================

Servlet / ASP / PHP ==> thread based

NodeJS ==> Event loop

Prefer NodeJS for server side only if real-time streaming of data is required.
Never use NodeJS for CPU intense operations, DataBase, but prefer for Reactive Database [ Postgres, MongoDB]
=====================================================================

Node JS Application / modules

NPM ==> Node Package Manager / YARN ==> Maven / Gradle / PIP
	: manages packages ==> install dependecies [ 3rd party]
	: to run goals [ build, test, lint]

package.json ==> pom.xml [ Maven]



npm i -D mocha chai request [ Development dependencies]


npm i express [ production dependeincies]

Maven: <scope>test</scope>



 	"chai": "^4.2.0",
    "mocha": "~8.2.1",
    "request": "2.88.2"
=======================================================

JS Unit Testing:
	many frameworks are available:
	1) JEST [ RTL ]
	2) JASMINE 
	3) MOCHA
		Mocha uses 3rd party assertion library

	AAA ==> Assemble Action Assert	
==================================================

JavaScript Build tools
----------------------

Web applications:
	1) transcompile or transpile ==> ES2015 or ESnext or Typescript or CoffeeScript or Dart ==> ES5
	2) minify the code ==> remove empty spaces
	3) uglify ==> longer names ==> shorter form
	4) Linting ==> static code analysis
	5) tests
	6) bundle [ #no of files into chunk ==> bundle.js]
	reduce network calls
		<script src="person.js"></script>
		<script src="user.js"></script>
		<script src="product.js"></script>
		<script src="checkout.js"></script>

		-------------------------------------
		<script src="bundle.js"></script>

Grunt, gulp, webpack, ... are JS build tools

Webpack:
webpack is an open-source JavaScript module bundler. 
It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included.
 
==> create-react-app ==> comes with webpack
==> @angular/cli ==> comes with webpack
====================================================================

	npm test
	npm serve
	npm run build-dev
	npm run build-prod 
==============================

gulpex.zip ==> extract ==> npm i

 // executable node modules install globally

$ npm i -g gulp

========================
Webpack and Gulp
=========================

TypeScript
----------

JS ==> loosely typed

var name = "Smith"; // string
 
name = 10; // number
name++;
name = true; // boolean
if(name)

JS engine ==> JS code
=============

Dart, CoffeeScript, TypeScript ==> concept of data types and better coding at source code level. 
Compilers detect issues with source code level ==> transpile ==> engine
=====================
ESNext is addapting most of TS features
=========================================

TypeScript ==> introduces data types

	Number, String, Boolean, Array, Enum, Void, Any

	let name:String = "Smith";

	name = 45; // error ==> detected by tsc

	let age:Number = 10;
===================
"use strict";

function() {
	c = 10; // error
}

=================================================

Day 3
-----

Angular v11 

Angular 1.6 and Angular 2+ [ 2016 ]
--------------------------------------

Single Page Application ==> Web application frameworks : React, Angular , Backbone

Server Side Rendering and client side rendering

SSR: PHP, ASP, ASP.NET, Servlet, EJS, JADE, PUG

Client Side Rendering:
-----------------------

Templates libraries: jquery, Mustache, Handlebars, Underscore

----------------------------------

SPA ==> we have a single HTML page but multiple views [ products, user management, orders, payment, ..]

Challenges faced in building SPA:
1) Data binding [ JSON data <===> HTML elements]
	one-way binding or two-way binding
2) Dependency Injection
		Without DI:
			<script src="a.js"></script>
			<script src="b.js"></script>
			<script src="c.js"></script>
			<script src="d.js"></script>
			<script src="e.js"></script>
3) Different URIs for different views ==> routing
		http://server.com ==> index.html

		http://ge.com

		http://ge.com/products
		http://ge.com/locations
		http://ge.com/healthcare/offices

		==> SEO
		==> Bookmark
		==> Naviagation between views
===========================================

React, Angular, Vue, Backbone ,... are libraries / Frameworks for building web application
===========================================================================================

Library ==> helpers; partial solution
			jQuery is a library for simplify DOM handling
			Handlebars is a template libary ==> simplifies view creation


Framework ==> complete solution


For React library ==> gives me solution for templates alone. 

		HTTP ==> axios, restful, fetch
		Security

Angular Framework ==> complete solution
================================================================================

Angular building blocks:
	Module, Component, Service, Directives, Pipe, Guard, Router

	npm i -g @angular/cli

	npm install -g @angular/cli@latest

	============

	ng new customerapp
	===> Strict Y
	==> routing N
	==> all other defaults
===========================================

 Angular built using TypeScript // can use ES6 or Dart
 ======================================================

 ng new customerapp
 ==> builds scaffolding code and internally uses webpack
 webpack uses ==> angular.json

customer component ==> sleector will be <app-customer>

product component -=> selector will be <app-product>

HTML 5 <section> ==> <div>
=========================

Angular Compiler options : JIT and AOT
Just In Time ==> Browser loads Compiler [ ~1 MB ] Angular to HTML happens as and when required
Ahead of Time ==> Angular code ==> JS and HTML and this is what is loaded on to browser [ Angular Compiler not required], Any template errors will be detected on the fly


=======================


@NgModule({
  declarations: [all components and directives of the module],
  imports: [  BrowserModule and other modules ],
  providers: [services],
  bootstrap: [AppComponent]
})
export class AppModule { }


==============

ng serve

Structural directive: *ngFor



<div *ngFor="let customer of customers">
    {{customer.firstName}} {{customer.lastName}}
</div>



[] ==> to bind to variable
() ==> events

[()] ==> 2 way binding
===================================================================================

 
 Parent ==> Child ==> @Input

 Child ==> Parent ==> @Output



chrome web store ==> Augury
=====================================================

Testing
	E2E testing ==> Protractor
	Unit Testing ==> Jasmine + ATF
==================================

@Input()
@Output() EventEmitter
Karma + jasmine for Unit testing
Protroctor for e2e
==========================================

Change Detection Example:

import { Component } from "@angular/core";

app.component.ts

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  foods = ["Burger", "Rolls", "Pizza"];

  addFood(food) {
  // this.foods = [...this.foods, food];
  this.foods.push(food);
}
}


<input #newFood type="text" placeholder="Enter a new food">
<button (click)="addFood(newFood.value)">Add food</button>

<app-child [data]="foods"></app-child>

child.component.ts
=======================
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() data: string[];

  constructor(private cd: ChangeDetectorRef) {}

  refresh() {
    this.cd.detectChanges();
  }
}

<ul>
  <li *ngFor="let item of data">{{ item }}</li>
</ul>

<button (click)="refresh">Refresh</button>



==============

Angular Template Variable:
#newFood
<input #newFood type="text" placeholder="Enter a new food">
<button (click)="addFood(newFood.value)">Add food</button>

ChildComponent:
Default:
changeDetection: ChangeDetectionStrategy.Default
==> any data which is injected to child gets changed [ mutation or referece]
	child component is re-rendered [ Change Detection is triggred]

changeDetection: ChangeDetectionStrategy.OnPush
	==> First time when component is created [ Child component] data is passed on as @Input()
	then child change detection happens
 ==>
 	In parent if any new reference is injected to child then only the child gets refreshed
	 If @Input() if mutation happens child is not getting refreshed
==========================

1) 
 a) Test with ChangeDetectionStrategy.OnPush and ChangeDetectionStrategy.Default
 b) test with 
 	 this.foods = [...this.foods, food];
 	 and
    this.foods.push(food);


import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  foods = ["Burger", "Rolls", "Pizza"];

  addFood(food) {
   // this.foods = [...this.foods, food];
    this.foods.push(food);
  }
}

<input #newFood type="text" placeholder="Enter a new food">
<button (click)="addFood(newFood.value)">Add food</button>

<app-child [data]="foods"></app-child>
==============================================

import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() data: string[];

  // constructor(private cd: ChangeDetectorRef) {}

  // refresh() {
  //   this.cd.detectChanges();
  // }
}

<ul>
  <li *ngFor="let item of data">{{ item }}</li>
</ul>

<!-- <button (click)="refresh">Refresh</button> -->
===============================================

import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() data: string[];

  constructor(private cd: ChangeDetectorRef) {}

  refresh() {
    this.cd.detectChanges();
  }
}
===========
https://change.stackblitz.io

https://stackblitz.com/edit/change?file=src/app/app.module.ts
https://stackblitz.com/edit/change?file=src/app/app.component.ts
https://stackblitz.com/edit/change?file=src/app/app.component.html
https://stackblitz.com/edit/change?file=src/app/child.component.ts
https://stackblitz.com/edit/change?file=src/app/child.component.html
========================================================================

@ViewChild and @ViewChildren
	This gets a pointer/ refrence to underlying DOM or Child Component

export class AppComponent {
  name = "Angular " + VERSION.major;

  @ViewChild("ref")
  txtRef: ElementRef;

  ngAfterViewInit() {
    this.txtRef.nativeElement.value = "TEST";
    this.txtRef.nativeElement.focus();
    console.log("called", this.txtRef);
  }


  <input #ref type="text" />

  ==============

import { Component, ElementRef, VERSION, ViewChild } from "@angular/core";
import { SecondComponent } from "./second.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  @ViewChild("ref")
  txtRef: ElementRef;
  
  @ViewChild(SecondComponent)
  secondRef:SecondComponent;

  ngAfterViewInit() {
    this.txtRef.nativeElement.value = "TEST";
    this.txtRef.nativeElement.focus();
    console.log("called", this.txtRef);

    this.secondRef.doTask();
  }
}
 ==========
 <input #ref type="text" />

<second></second>

===========



import { Component, ElementRef, VERSION, ViewChild } from "@angular/core";

@Component({
  selector: "second",
  template: "<h1>Second</h1>"
})
export class SecondComponent {
  doTask() {
    console.log("Task executed!!!");
  }
}
==================================

@ViewChildren(SecondComponent)

<second></second>
<second></second>
<second></second>
<second></second>
====================================


============

const routes:Route[] = [
  {
    path: 'home',
    component : HomeComponent
  },
  {
    path: 'customers',
    component : CustomersComponent,
   // canActivate: [LinkActivate]
  },
  {
    path: 'customers/edit/:id',
    component : CustomerEditComponent
  },
  {
    path : 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  }, 
  {
    path : '**',
    component: HomeComponent
  }
];


const routes: Routes = [
    {
      path: '',
      component: OrderComponent,
      children: [
          {
              path : 'report',
              component : ReportComponent
          }
      ]
    } 
  ];
  ============
@NgModule({
   declarations:[OrderComponent, ReportComponent],
    imports: [RouterModule.forChild(routes),ChartModule],
    exports: [RouterModule] 
})
export class OrdersModule{}

===================
 ===============

 @Injectable()
export class LinkActivate implements CanActivate {
    constructor(private router: Router){}

    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, 
            state: import("@angular/router").RouterStateSnapshot): boolean | 
            import("@angular/router").UrlTree | 
            import("rxjs").Observable<boolean | 
            import("@angular/router").UrlTree> | Promise<boolean | 
            import("@angular/router").UrlTree> {
        let user = window.sessionStorage.getItem("user");

        if(user) {
            return true;
        } else {
             this.router.navigate(['/home']);
        }

    }

}
=============

import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el:ElementRef, private renderer: Renderer2) { }

 
  @HostBinding('style.border') border: string

  @HostListener("mouseover")
  onMouseOver(){
    let part = this.el.nativeElement.querySelector('.img') 
    this.renderer.setStyle(part, 'display', 'block'); 
    this.border = '5px solid red';
  }

  @HostListener("mouseout")
  onMouseOut() {
    let part = this.el.nativeElement.querySelector('.img') 
    this.renderer.setStyle(part, 'display', 'none'); 
    this.border = '';
  }

}

===================

import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: "convert"
})
export class Upper implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if(args[0] === 'upper') {
        return value.toUpperCase();
         }
    }
    
}

=============

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './Customer';

@Injectable()
export class DataService {
    customerUrl:string =  'http://localhost:3000/customers';
    ordersUrl:string = 'http://localhost:3000/orders';

    constructor(private http: HttpClient) {
    }

    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.customerUrl);
    }

    getCustomer(id:number): Observable<Customer> {
        return this.http.get<Customer>(`${this.customerUrl}/${id}`);
    }

    addCustomer(customer:Customer) : Observable<any> {
        return this.http.post(this.customerUrl, customer);
    }

    updateCustomer(customer:Customer) :  Observable<any> {
        return this.http.put(`${this.customerUrl}/${customer.id}`, customer);
    }

    deleteCustomer(id:number) : Observable<any> {
        return this.http.delete(`${this.customerUrl}/${id}`);
    }

}
====================
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
  from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/tap';

@Injectable({
    providedIn: 'root'
})
export class MyInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req);
    return next.handle(req) ;

  }
}

======================


====================================================================

Day 4:
=======

	Angular building blocks:
		Module ==> @NgModule ==> 
		configure a) components b) Directives c) Services d) Router
		e) Pipe f) dependent Module

		prefer multi-module application if its big app==> Webpack implements
		code splitting
			customer.module chunk [ js ]
			product.module chunk [ js ]
		==> helps in lazy loading

		@NgModule

		-------------

		Components: @Component
			==> state and behaviour
			==> templateUrls ==> html
			==> styleUrl
			==> selector

			@Input() and @Output() ==> EventEmitter

			Structural Directives ==> *ngFor ==> DOM creation is controlled by Angular
			*ngIf

			[] ==> property binding
			() ==> event binding
			[(ngModel)] ==> for 2 way binding
			#ref ==> template refrence

			@ViewChild 
			ComponentChangeDetection Default and OnPush
------------------------------------------------------------------------
component: <app-customers></app-customers>
		state and behaviour ==> Model data ==> Customer

Directive
		Unlike Component directives won't have templates and styleUrl
		used along with DOM or Component
		Example:
		<div *ngFor=...></div>
		<div *ngIf="!isCard">List View</div>

		basically used to control underlying elements state / behaviour
		-------
		styling; show / hide
		non-model data
=====================================================

	ng new customerapp
	ng g interface Customer
	ng g c customer-card
	ng g class util
	ng g directive hover

	<div input-box [name]=”’lightcyan’” [value]=”’CYAN’”></div>
	 @Directive({
 		selector: ‘[input-box]’
	 })
 	export class TestDirectives implements OnInit {
    	   @Input() name: string;
     	   @Input() value: string;
      	 constructor(private elementRef: ElementRef) {
      	 }
     	 ngOnInit() {
      	     console.log(“input-box keys : “, this.name, this.value);
   	   }
	 }
===================================

Pipe used to transform data
{{customers | json}}  

{{hireDate  | date:'dd-MM-yyyy'}}


ng g pipe textconvert	

--
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textconvert'
})
export class TextconvertPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if(args[0] === 'upper') {
      return value.toUpperCase();
    } else if (args[0] === 'lower') {
      return value.toLowerCase();
    }
    return value;
  }

}

{{customer.firstName | textconvert:'upper'}} {{customer.lastName | textconvert:'lower'}}
===============================================================================================

Pure function
	function add(x,y) {
		return x + y;
	}


Impure function
	function getNumber() {
		return Math.random();
	}
===================================================

npm i -g json-server
RESTFul endpoint ==> file system as end point ==> CRUD

Service
=========================================================

rxjs ==> Reactive programming [Flux and Mono; reactor; netty]

import { from } from 'rxjs';

const observable = from([10, 20, 30]); // next(10); next(20); next(30); complete()

const observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

const subscription = observable.subscribe(observer);

observable.subscribe(x => console.log(x));


// Later:
subscription.unsubscribe();
=========================================================
 

import { fromEvent } from "rxjs";

import { debounceTime } from "rxjs/operators";

let clicks = fromEvent(document, "click");

let result = clicks.pipe(debounceTime(1000));

result.subscribe(x => console.log(x));


===========

document.addEventListener("click", () => {
	
});

==========

Amazon search text box ==> keypress ==> iphone

fromEvent() ==> pipe(map(), filter(), flatMap(), zip(), ...)
==========

Traditional DOM handling:

const button = document.querySelector('button');
const output = document.querySelector('output');

button.addEventListener('click', e => {
  output.textContent = Math.random().toString(36).slice(2);
});


Reactive way:
-------------
import { fromEvent } from "rxjs";

//I want only every 3rd click to generate the random string.
	fromEvent(button, 'click')
	  .bufferCount(3) // <--------- only added this line!
	  .subscribe(() => {
	    output.textContent = Math.random().toString(36).slice(2);
	  });
================================
pipe() for manipulatikng the stream data:

import { range } from "rxjs";
import { map, filter, scan } from "rxjs/operators";

const source$ = range(0, 10);

source$
  .pipe(
    filter(x => x % 2 === 0),
    map(x => x + x),
    scan((acc, x) => acc + x, 0)
  )
  .subscribe(x => console.log(x));

0, 4, 12,

scan like reduce [aggregate]
===================================================================

using rxjs for component <==> Component communication
=====================================================

Subject ==> Observable + Observer

Component 1 ==> places data in Subject
Component 2 <== Subject push
=========================================================

Using services and Subject[rxjs] to communicate between components

Services are singleton by default; rootInjector

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  data: any[] = [];
  subject: Subject<any> = new Subject();
  constructor() { }

  getSubject(): Subject<any> {
    return this.subject;
  }

  addData(elem) {
    this.data.push(elem);
    this.subject.next(this.data); // emit ==> Observable
  }
}


@Component({
  selector: "hello",
  template: `
    <div *ngFor="let d of information">
        {{d}}
</div>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  information: any[] = [];
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.getSubject().subscribe(data => {
      this.information = data;
    });
  }
}
===============================================================================

Using HttpClient and rxjs in angular service:

  import { HttpClientModule } from "@angular/common/http";	

 @NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
====================================================================




import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
============

export class AppComponent {
    users: any[] = [];
   dataSubscription: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataSubscription = this.dataService.getUsers()
     						 .subscribe(data => (this.users = data));
   }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}

<div *ngFor="let user of users">
  {{user.name}}
</div>

===========

Modified AppComponent:
The async pipe subscribes to an Observable.
 When the component gets destroyed, the async pipe unsubscribes automatically to avoid potential memory leaks.


export class AppComponent {
   users$: Observable<any>;
  constructor(private dataService: DataService) {}

  ngOnInit() {
     this.users$ = this.dataService.getUsers(); // Observable
  }
 
}

<div *ngFor="let user of users$ | async">
  {{user.name}}
</div>
====================


 


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}


========

@Injectable()
export class DataService {

  constructor() { }
}

@NgModule({
  ...
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
====================================

Instead of adding in AppModule or configuring in @Injectable.

A sperate instance of DataService is available to HelloComponent [ no longer singleton]
@Component({
    selector:"hello",
    providers:[DataService]
})
export class HelloComponent {

}
       
  return this.http.get<Customer>(`${this.customersUrl}/${id}`);

  return this.http.get<Customer>(this.customersUrl + "/" + id);
===================================================================

Component, Pipe, Directive, Service, Module
=============================================
Routing 
	SPA ==> a single html pages exists ==> different UrIs different views to be displayed
		History API ==> Navigation between views

	RouterModule

	http://localhost:4200/customers

	customers ==> CustomerComponent

	orders ==> OrdersComponent

TEmplate Drive form:
Bind state to form field ==> 2 way binding happens

[(ngModel)]="customer.firstName"

============================

adding order module ==> Lazy loading of module ==> Routes
==========================================================	



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
    path: '**',
    component: HomeComponent
  }
]



Nested Routes:

AppComponent

	<router-outlet></router-outlet>

ParentComponent

	<div>
		some stuff here !!!
	</div>
	<router-outlet></router-outlet>

SecondComponent

ChildComponent


const routes: Route[]  = [
  {
    path: 'second',
    component : SecondComponent
  },
  {
    path: 'parent',
    component: ParentComponent,
    children: [
    	{
    	path:'first',
    	component: ChildComponent
    	}
    ]
  }

http://localhost:4200/parent/first
=========================================================

Lazy loading routes ==> code splitting

Route Guards

{
    path: 'orders',
    canActivate: [LinkActivate],
    loadChildren:() => import('./orders/orders.module').then(m => m.OrdersModule)
  }
==============

HttpInteceptor ==> use it add token headers, hashing, log, request, block, ....
===============================================














