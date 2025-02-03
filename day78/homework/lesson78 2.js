    let num = Number(prompt("Enter number and i will tell you whitch day of week it's "))

    let week = (num === 1)?"It's Monday":
               (num === 2)?"It's Tuesday":
               (num === 3)?"It's Wensday":
               (num === 4)?"It's Thursday":
               (num === 5)?"It's Friday":
               (num === 6)?"It's Saturday":
               (num === 7)?"It's Sunday":"Invalid Number"
    console.log(week);