var firstName = "Michal";
var lastName = "Peter";

/*
var sayHi = {
    firstName:'Zoe',
    lastName:'Lisa',
    greet:function(){
        return `Say Hi to ${firstName} ${lastName}`
    }
}

console.log(sayHi.greet())
//Say Hi to Michal Peter
*/

var sayHi = {
    firstName:'Zoe',
    lastName:'Lisa',
    greet:function(){
        return `Say Hi to ${this.firstName} ${this.lastName}`
    }
}

console.log(sayHi.greet())
//Say Hi to Zoe Lisa


