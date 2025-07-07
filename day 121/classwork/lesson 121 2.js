class dog{
    constructor(name){
        this.name = name
    }

    bark() {
        console.log("Woof")
    }
}

let newDog = new dog("Bombora");
newDog.bark()