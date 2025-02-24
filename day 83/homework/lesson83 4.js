function fizzbuzz(division){
    if(division%3===0 && division%5===0){
        console.log("FizzBuzz")
    }else if(division%3===0){
        console.log("Fizz")
    }else if(division%5===0){
        console.log("Buzz")
    }else{
        console.log("Not a number")
    }
}


