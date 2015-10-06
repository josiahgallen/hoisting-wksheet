'use strict';

//1)
// var myvar = 'my value'; 

// (function() { 
//     console.log(myvar);
//     var myvar = 'local value'; 
// })();

//OUTPUT - undefined

//WHY - the instance of var myvar is being hoisted to top of function but not the value, so trying to log myvar without a value

//W/O HOISTING -

// var myvar = 'my value';
// (function() {
// 	var myvar;
// 	console.log(myvar);
// 	myvar = 'local value';
// })();

/////////////////////////////////////////////////////////////////////////////////////
//2)
// var flag = true; 

// function test() {
//     if(flag) {
//         var flag = false;
//         console.log('Switch flag from true to false');
//     }
//     else {
//         flag = true;
//         console.log('Switch flag from false to true');
//     }
// }
// test();

//OUTPUT - Switch flag from false to true

//WHY - var flag hoisted from inside if to top of function stack, var flag; evaluates to falsy

//W/O HOISTING - 

// var flag = true; 

// function test() {
// 	var flag;
//     if(flag) {
//         flag = false;
//         console.log('Switch flag from true to false');
//     }
//     else {
//         flag = true;
//         console.log('Switch flag from false to true');
//     }
// }
// test();

////////////////////////////////////////////////////////////////////////////////////
//3)

// var message = 'Hello world'; 

// function saySomething() {
//     console.log(message);
//     var message = 'Foo bar';
// }
// saySomething();

//OUTPUT - undefined

//WHY - var message hoisted above console.log w/o value, evaluates to falsy value

//W/O HOISTING - 

// var message = 'Hello world'; 

// function saySomething() {
// 	var message;
//     console.log(message);
//     message = 'Foo bar';
// }
// saySomething();

////////////////////////////////////////////////////////////////////////////////////
//4)

// var message = 'Hello world'; 

// function saySomething() {
//     console.log(message);
//     message = 'Foo bar';
// }
// saySomething();

//OUTPUT - Hello World

//WHY - message is not reasigned a value until after console.log

//W/O HOISTING - 

// var message = 'Hello world'; 

// function saySomething() {
// 	message = 'Foo bar';
//     console.log(message);
// }
// saySomething();

////////////////////////////////////////////////////////////////////////////////////
//5)

// function test() {
//     console.log(a);
//     console.log(foo());

//     var a = 1;
//     function foo() {
//         return 2;
//     }
// }

// test();

//OUTPUT - undefined, 2

//WHY - var a is hoisted w/o value, function and return value both hoisted

//W/O HOISTING - 
//  var a = 1;
//     function foo() {
//         return 2;
//     }
// function test() {
//     console.log(a);
//     console.log(foo());
// }

// test();

////////////////////////////////////////////////////////////////////////////////////
//6)

// (function() {
//     console.log(bar);
//     foo();

//     function foo() {
//         console.log('aloha');
//     }

//     var bar = 1;
//     baz = 2;
// })();

//OUTPUT - undefined, aloha, error thrown because baz is undefined

//WHY - var bar hoisted w/o value is falsy, function foo hoisted with value, baz is never declared

//W/O HOISTING - 

// (function() {
// 	function foo() {
//         console.log('aloha');
//     }

//     var bar = 1;
//     baz = 2;

//     console.log(bar);
//     foo();
// })();


////////////////////////////////////////////////////////////////////////////////////
//7)

// var run = false;

// function fancy(arg1, arg2) {
//     if(run) {
//         console.log('I can run');
//     }
//     else {
//         console.log('I can\'t run');
//     }

//     function run() {
//         console.log('Will I run?');
//     }
// }
// fancy();

//OUTPUT - I can run

//WHY - function run and value hoisted(takes precident over var run), evaluates to truthy

//W/O HOISTING - 

// var run = false;

// function fancy(arg1, arg2) {
// 	function run() {
//         console.log('Will I run?');
//     }
//     if(run) {
//         console.log('I can run');
//     }
//     else {
//         console.log('I can\'t run');
//     }
// }
// fancy();

////////////////////////////////////////////////////////////////////////////////////
//8)

// var run = false;

// function fancy(arg1, arg2) {
//     if(run) {
//         console.log('I can run');
//     }
//     else {
//         console.log('I can\'t run');
//     }

//     var run = function() {
//         console.log('Will I run?');
//     }
// }
// fancy();

//OUTPUT - I can't run

//WHY - var run is hoisted w/o value and evaluates to false, takes precedents over var run = false

//W/O HOISTING - 


// var run = false;

// function fancy(arg1, arg2) {
// 	var run = function() {
//         console.log('Will I run?');
//     }
//     if(run) {
//         console.log('I can run');
//     }
//     else {
//         console.log('I can\'t run');
//     }
// }
// fancy();









