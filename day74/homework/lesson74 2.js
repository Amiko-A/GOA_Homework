let weather = Number(prompt("Enter number from 1-4:"))

switch(weather){
    case "1":
        console.log("Weather is sunny")
    case "2":
        console.log("Weather is rainy")
    case "3":
        console.log("Day of week is cloudy")
    case "4":
        console.log("Day of week is windy")
    default: {
        alert("not defined")
    }
}