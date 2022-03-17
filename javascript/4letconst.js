var > we can declare and reassign
let > we cannot redeclare but can reassign
const > we cannot redeclare nor reassign

var a = 10;

var a; /// declare 
a = 10; /// assignment


> var a= 10
> a
10
> var a= 20
> a
20
> a = 30
30

> let b = 20
undefined
> b
20
> let b = 30
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 30
30
> 

> const c = 10
undefined
> c
10
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 12
Uncaught TypeError: Assignment to constant variable.