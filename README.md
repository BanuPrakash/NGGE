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

=====================

6) Promise API with async and await
=====================================================



