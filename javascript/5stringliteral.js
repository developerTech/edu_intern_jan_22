let name = "Avengers";
let ind = "Hollywood";
let type = "Actions";
let rating = 3.8

//es5
let a ="An "+name+" is an "+type+" movie with rating of "+rating+" and from ind "+ind+"."
//'An Avengers is an Actions movie with rating of 3.8 and from ind Hollywood.'
console.log(">>>a",a)

//es6
let b = `An ${name} is an ${type} movie with rating of ${rating} and from ind ${ind}.`
//'An Avengers is an Actions movie with rating of 3.8 and from ind Hollywood.'
console.log(">>>b",b)



function checkUser(userinput){
    if(userinput == "John"){
        console.log(`Hi ${userinput} you are admin`)
    }else if(userinput == "Bhumika"){
        console.log(`Hi ${userinput} you are super admin`)
    }else{
        console.log(`Hi ${userinput} you unknown`)
    }
}

checkUser("John")
=
