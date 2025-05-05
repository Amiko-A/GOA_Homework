let cinema = {  
    cinemaName: "Tbilisi Cinema",
    moviesCount: 100,
    location: "Tbilisi, Georgia",
    movieReviews: {
        user1: 4.5,
        user2: 3.8,
        user3: 5,
    }
};

let keys = Object.keys(cinema);

let values = Object.values(cinema);

let hasVipSeats = cinema.hasOwn("vipSeats");

let ticketInfo = {
    ticketPrice: 12.99 
};

let assign =Object.assign(cinema, ticketInfo);

let freeze = Object.freeze(cinema);
 
let isFrozen = Object.isFrozen(cinema);