=  // assignment
== // compare the value
=== // use to compare data and datatype

var a = 10
var b = 10
a == b
true
a === b
true

var a = 10
var b = '10'

a == b
true
a === b
false

var a = true
var b = 1
a == b
true
a === b
false

var b = 10
a == b
false
a === b
false

/// javascript is case sensitive
var a = "hi"
undefined
var b = "Hi"
undefined
a == b
false
a === b
false


10 >5
true
10<5
false
10 !== 2
true
10 !== 10
false
10 => 1
VM613:1 Uncaught SyntaxError: Malformed arrow function parameter list
10 >= 1
true
10 <= 1
false

////// negation /////
var a = true
!a
false

var b = false
!b
true

var a = 1
!a
false

var a = 0
!a
true

var a = 10
!a
false

var a = "hii";
!a
false

var a = -1
!a
false

var a = null
!a
true

//truthy 
> any number expect 0 either +ve or -ve is truthy
> any string 
> true

//falsy
> 0
> false
> null and undefined

isNaN("hii") > is not a number
true

isNaN(10)
false

isNaN('10')
false

isNaN('10a')
true