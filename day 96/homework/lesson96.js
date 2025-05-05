function calcAge(birthYear, birthMonth, birthDay) {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
  
    let age = currentYear - birthYear;
  
    return age;
  }
  