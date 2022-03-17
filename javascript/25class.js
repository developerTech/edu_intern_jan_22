//// 
// function language(name,country){
//     this.name = name;
//     this.country = country;
//     this.greet = () => {return `Say Hi To ${name}`}
// }

class language{
    // all declaration
    constructor(name,country){
        this.name = name;
        this.country = country
    }
    greet = () => {return `Say Hi To ${this.name}`}

}


var Hindi = new language("Hindi",'India')
undefined
Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}
Hindi.greet()
'Say Hi To Hindi'