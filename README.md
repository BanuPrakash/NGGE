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


