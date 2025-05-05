function calculator(year){
    if (year % 4 === 0) {
        return "this year is leap year"
    }
    if (year % 100 === 0) {
        return "this year is leap year"
    }
    if (year % 400 === 0) {
        return "this year is leap year"
    } else {
        return "this year is not a leap year"
    }
}