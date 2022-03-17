function human(name,city){
    this.name = name;
    this.city = city;
}

function robot(name){
    this.name = name;
    this.legs = 2;
    this.age = 10
}

var john  = new human('John','Delhi')
undefined
john
human {name: 'John', city: 'Delhi'}
john.legs
undefined
var pepper = new robot('Pepper')
undefined
pepper
robot {name: 'Pepper', legs: 2, age: 10}
pepper.city
undefined

human.prototype = new robot()
robot {name: undefined, legs: 2, age: 10}
var Anti = new human('Anti','Venice')
undefined
Anti
human {name: 'Anti', city: 'Venice'}
Anti.legs
2
Anti.age
10