var a = 10;
var b = 20;
a+b
30

function nameoffunction(parameter){
    return output
}

function add(a,b){
    return a+b
}

add(1,2)
3
add(10,20)
30
add('a','b')
'ab'


function add(a,b,c){
    return a+b+c
}

add(1,2,3)
6


function isEven(userInput){
    if(userInput%2==0){
        console.log(`Number ${userInput} is even`)
    }else{
        console.log(`Number ${userInput} is odd`)
    }
}

isEven(10)
Number 10 is even

isEven(11)
Number 11 is odd


//es5
function add(a,b){
    return a+b
}
add(1,2)
3

//es6
let add = (a,b) => { return a+b }
add(2,3)
5