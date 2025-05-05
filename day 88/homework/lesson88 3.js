    let hotel = {
        hotelName:"goriINN",
        stars:4,
        location:"Georgia,Gori",
        guestReviews:{
            guest1:3.2,
            guest2:5,
            guest3:4,
        }
    };

    let keys = Object.keys(hotel);

    let has = Object.hasOwn("spa");

    let hotelinfo = {
        roomsCount:400,
    };

    let assign = Object.assign(hotel,hotelinfo);

    let x =Object.freeze(hotelinfo);

    let y =Object.isFrozen(hotelinfo);