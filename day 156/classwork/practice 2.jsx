import React from "react";

const userAge=19;

if(userAge > 18){
    return "გილოცავ შენ შეგიძლია აიღო მართვის მოწმობა"
}else{
    return "სამწუხაროდ შენ არ შეგიძლია აიღო მართვის მოწმობა"};

const drinkingAge = 19;

const message = (
  <h1>
    { age >= drinkingAge ? 'Go drink' : 'dont buy alcohol dude , not cool' }
  </h1>
);

const judgmental = Math.random() < 0.5;

const favWater = (
  <div>
    <h1>My Favorite water in Georgia</h1>
    <ul>
      <li>Bakuriani</li>
      <li>ცივი წყალი ღამე</li>
      {!judgmental && <li>თბილი წყალი</li>}
      <li>წყაროს წყარი</li>
    </ul>
  </div>
);
