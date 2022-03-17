//global scope
//local scope

// enclosing Something
/*
var a = 10
function add(){
    var b = 20;
    return a+b
}

console.log(">>>>add>>>", add())
console.log(">>>>a>>>", a)
console.log(">>>>b>>>", b)

/*
>>>>add>>> 30
>>>>a>>> 10
/Users/aakash/Desktop/api/Jan/edu_intern_jan /javascript/24clouser.js:14
console.log(">>>>b>>>", b)
*/


var a = 10
for(i=0;i<5;i++){
    let  b = 20
    console.log(">>>>add>>",a+b+i)
}

console.log(">>>>a>>>", a)
console.log(">>>>b>>>", b)

// >>>>add>> 30
// >>>>add>> 31
// >>>>add>> 32
// >>>>add>> 33
// >>>>add>> 34
// >>>>a>>> 10
// >>>>b>>> 20