Array is a collection homogenious as well as hetrigenious data type

let a = ["Hii","Hello","Test","Code"] > Array of string
let b = [4,67,34,89,555] > Array of Number;
let c = [true,false,false,true] > Array of boolean

let d = ["sgsd",35325,"cbcv",true,true,"bcvnb"]

var city = ["Delhi","Mumbai","London","Helsinki"]
undefined
typeof(city)
'object'
var city = ["Delhi","Mumbai","London","Helsinki"]
undefined
city.length
4
city[0]
'Delhi'
city[2]
'London'
city[4]

var city = ["Delhi","Mumbai","London","Helsinki"]
undefined
city.push('Venice')
5
city
(5) ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Venice']
city.push('Amsterdam')
6
city
(6) ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Venice', 'Amsterdam']

city
(6) ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Venice', 'Amsterdam']
city.pop()
'Amsterdam'
city
(5) ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Venice']
city.pop(2)
city
(6) ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Venice', 'Amsterdam']
city.pop()
'Amsterdam'
city
(5) ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Venice']
city.pop(2)
'Venice'
city.pop(2000)
'Helsinki'

var city = ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Venice', 'Amsterdam']

undefined
city.shift()
'Delhi'
city.unshift()
5
city.unshift('Nice')
6
city
(6) ['Nice', 'Mumbai', 'London', 'Helsinki', 'Venice', 'Amsterdam']

push > add value in the end of array
pop > remove the last value of array
shift > remove the first value of the array
unshift > add in the begining of array

var city = ['Nice', 'Mumbai', 'London', 'Helsinki', 'Venice', 'Amsterdam']

city.slice(2)
(4) ['London', 'Helsinki', 'Venice', 'Amsterdam']
city
(6) ['Nice', 'Mumbai', 'London', 'Helsinki', 'Venice', 'Amsterdam']
city.slice(2,6)
(4) ['London', 'Helsinki', 'Venice', 'Amsterdam']
city.slice(0,-1)
(5) ['Nice', 'Mumbai', 'London', 'Helsinki', 'Venice']

city.splice(start,deletecount,value)

var city = ['Nice', 'Mumbai', 'London', 'Helsinki', 'Venice', 'Amsterdam']
undefined
city.splice(2,2)
(2) ['London', 'Helsinki']
city
(4) ['Nice', 'Mumbai', 'Venice', 'Amsterdam']
city.splice(3,0,'Boston','Dubai')
[]
city
(6) ['Nice', 'Mumbai', 'Venice', 'Boston', 'Dubai', 'Amsterdam']
city.splice(1,1,'Rotterdam','Pune')
['Mumbai']
city
(7) ['Nice', 'Rotterdam', 'Pune', 'Venice', 'Boston', 'Dubai', 'Amsterdam']

var city = ['Nice', 'Mumbai', 'London', 'Helsinki', 'Venice', 'Amsterdam']

undefined
city.indexOf('London')
2
city.indexOf('Nice')
0
city.indexOf('Delhi')
-1
city.indexOf('Boston')
-1

var a = ['a','b','c',5]
var b = [1,'f',4,'g',6]
a+b
'a,b,c,51,f,4,g,6'
var a = ['a','b','c',5]
var b = [1,'f',4,'g',6]
undefined
a+b
'a,b,c,51,f,4,g,6'
a.concat(b)
(9) ['a', 'b', 'c', 5, 1, 'f', 4, 'g', 6]

var a = "hii";
undefined
var b = [2,6,'f']
undefined
Array.isArray(a)
false
Array.isArray(b)

var city = ['Nice', 'Mumbai',['Red',['Audi','Bmw','Merc'],'Yellow','Green','Olive'], 'Helsinki', 'Venice', 'Amsterdam']

undefined
city[1]
'Mumbai'
city[2]
(5) ['Red', Array(3), 'Yellow', 'Green', 'Olive']
city[2][0]
'Red'
city[2][1]
(3) ['Audi', 'Bmw', 'Merc']
city[2][1][0]
'Audi'
city[2][2]
'Yellow'
city[2][1][2]
    
'Merc'