let week = Number(prompt("Enter number from 1-7 and i will tell you whitch day it is:"))

switch(week){
    case "1":
        console.log("Day of week is Monday")
    case "2":
        console.log("Day of week is TUesday")
    case "3":
        console.log("Day of week is Wednesday")
    case "4":
        console.log("Day of week is Thursday")
    case "5":
        console.log("Day of week is Friday")
    case "6":
        console.log("Day of week is Saturday")
    case "7":
        console.log("Day of week is Sunday")

    default: {
        alert("Invalid number")
    }
}