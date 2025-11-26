import React from "react";

const userAge=19;

if(userAge > 18){
    return "გილოცავ შენ ხარ სრულწლოვანი"
}else{
    return "შენ არ ხარ სრულწლოვანი"};

const secondUserAge = 19;
const age = 18;

const message = (
  <h1>
    { age < secondUserAge ? 'გილოცავ შენ შეგიძლია აიღო მართვის მოწმობა.' : 'სამწუხაროდ შენ ვერ აიღებ მართვის მოწმობას ' }
  </h1>
);

const judgmental = Math.random() < 0.5;

const favWater = (
  <div>
    <h1>My Favorite cars</h1>
    <ul>
      <li>Porche spyder 918</li>
      <li>Lamborghini Hurcan</li>
      {!judgmental && <li>Corvette c6 zr1</li>}
    </ul>
  </div>
);
