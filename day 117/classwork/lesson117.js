let car = {
    brand:"Porche",
    description:{
        model:"918 spyder",
        color:"gray",
    }
}

let {brand,description} = car;

let person = {
    name:"Amiko",
    lastName:"Amiridze",
    livingArea:{
        country:"Georgia",
        city:"Gori",
    }
}

let {name,livingArea:{city}} = person;

let person2 = {
    name:"Gio",
    lastName:"Gioshvili",
    livingArea:{
        country:"Germany",
        city:"Munchen",
    }
}

let { name: personsName, city: personsCity } = person2;

let nums = [1,2,3,4,5];

let [firstNumber,SecondNumber] = nums;

let fruits = ["banana","mango","strawberry","peach","cherry"];

let [firstFruit,,secondFruit] = fruits;

let colors = ["red","blue"];

let [firstColor="red",secondColor="blue",thirdColor="green"] = colors;