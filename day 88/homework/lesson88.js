  let university = {
      name: "GOA",
      departments: 12,
      website: "website.com",
      ratings: { 
        student1: 5,
        student2: 4,
        student3: 3
      }
    };

    console.log(university.name, university.departments, university.website, university.ratings)
    
    let has = Object.hasOwn("scholarship");

  let studentsCount={
    students:13000,
  };

    let assign = Object.assign(university , studentsCount);

    let x = Object.freeze(studentsCount);

    let y = Object.isFrozen(studentsCount);