const academy = {
    name: "GOA",
    courses: `"JavaScript", "Python", "HTML"`, 
    socialLink: "GOA.links",  
    reviews: [
      {
        name: "Amiko",
        status: "student",
        review: "good."
      },
      {
        name: "gio",
        status: "student",
        review: "amazing"
      },
      {
        name: "nino",
        status: "parent",
        review: "recomended"
      }
    ]
  };

  let entries=Object.entries(academy)
  console.log(entries)

  let keys=Object.keys(academy)
  console.log(keys)

  let values=Object.values(academy)
  console.log(values)

    let has=Object.hasOwn(realeaseDate)
    console.log(has)

    Object.freeze(academy);

    console.log(Object.isFrozen(academy)); 