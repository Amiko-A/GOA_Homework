    let sportclub = {  
        clubName:"Leakers",
        sportType:"Basketball",
        foundedYear:"2006",
        achievements:{
            achievement1:" Edward Snowden",
            achievement2:"Chelsea Manning",
            achievement3:"Julian Assange",
        }
    };

    let keys = Object.keys(sportclub);

    let values = Object.values(sportclub);

    let has = Object.hasOwn("sponsors");

    let stadiuminfo = {
        stadiumCapacity:10000,
    };

    let assign = Object.assign(sportclub,stadiuminfo);

    let x = Object.freeze(stadiuminfo);

    let y = Object.isFrozen(stadiuminfo);