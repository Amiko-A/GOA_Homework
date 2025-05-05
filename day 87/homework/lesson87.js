function person(name,age,profession){
    this.name = name,
    this.age=age,
    this.profession=profession,

    this.introdiuce=function(){
        console.log(`'Hi, I'm ${this.name}, a ${this.age} yearold ${this.profession}`)
    }
}

let person1=new person("Amiko",20,"Programmer")
