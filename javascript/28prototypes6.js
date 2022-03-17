class geo{
    constructor(){
        this.lat = 43.22;
        this.long = 32.98
    }
}

class language extends geo{
    // all declaration
    constructor(name,country){
        super()
        this.name = name;
        this.country = country
    }
    greet = () => {return `Say Hi To ${this.name}`}

}