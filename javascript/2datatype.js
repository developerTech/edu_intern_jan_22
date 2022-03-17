var a = true
var b = false
var c = true

a+c
2
a+b
1

true is equivalet to 1
false is equivalet to 0

a+c
2
a+b
1
10+true
11
10/false
Infinity

"hii"+true
'hiitrue'

"true"+"true"
'truetrue'
"false"+"true"
'falsetrue'

var a = "10"
var b = "20"
a+b
'1020'

var a = "10"
var b = "20"
parseInt(a)
10
parseInt(a)+parseInt(b)
30

var a = "10.34"
var b = "20.12"
parseInt(a)+parseInt(b)
30

var a = "10.34"
var b = "20.12"
undefined
parseFloat(a)+parseFloat(b)
30.46
var a = "10"
var b = "20"
undefined
//es5
parseFloat(a)+parseFloat(b)
30

//es6
Number(a)+Number(b)
30.46

var a = "London"
undefined
parseInt(a)
NaN
var a = true
undefined
parseInt(a)
NaN

var a = "10Delhi"
var b = "Delhi10"
var c = "10Delhi123"
parseInt(a)
10
parseInt(b)
NaN
parseInt(c)
10

Number(a)
NaN
Number(b)
NaN
Number(c)
NaN