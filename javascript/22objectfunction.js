let calc = {
    sum: function(a,b){return a+b},
    sub: (a,b) => { return a-b}
}
undefined
calc.sum(2,5)
7
calc.sub(5,3)
2

//// 
function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say Hi To ${name}`}
}

// construtor notation

var Hindi = new language("Hindi",'India')
Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}
Hindi.greet()
'Say Hi To Hindi'


var English = new language("English",'United KingDom')

var English = new language("English",'United KingDom')
undefined
English
language {name: 'English', country: 'United KingDom', greet: ƒ}