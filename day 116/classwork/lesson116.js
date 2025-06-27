let name = "Amiko";

let age = 15;

let person = {
    name:name,
    age:age,
    meeting:function(){
        return `Hello my name is ${this.name} and i am ${this.age} years old`
    }
}

let name2 = "Gio";

let age2 = 14;

let person2 = {
    name2,
    age2,
    meeting() {
    return `Hello, ${this.name} , are you ${this.age} ?`;
  },
}