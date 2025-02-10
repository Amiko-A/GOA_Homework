    let password = "Group 25 is best";
    let attempt = 3;

    while(attempt > 0){
        let inp = prompt("Enter password")
        if (inp === password){
            console.log("Your password is correct");
            break;
        }else {
            attempt--;
            if (attempt===2){
                console.log("Your password is incorect you have 2 more tryes")
            }else if(attempt===1){
                console.log("Your password is incorect you have 1 more tryes")
            }
        }
    }
    if(attempt === 0){
        alert("You have ran out of tryes you can try later")
    }