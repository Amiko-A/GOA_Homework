import React from "react";

export default function Map() {
  const numbers = [1, 2, 3, 4, 5];
  const users = [
    { id: 1, name: "Anri" },
    { id: 2, name: "Gia" },
  ];
  const colors = ["red", "green", "blue"];

  return (
    <div>
      <p>Square: {numbers.map(x => x * x)}</p>

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <p>Colors uppercase: {colors.map(y => y.toUpperCase())}</p>
    </div>
  );
}

import React from "react";

export default function Key() {
  const fruits = ["Apple", "Banana", "coconut"];
  const users = [
    { id: 111, name: "Nino" },
    { id: 122, name: "Santa" },
  ];
  const letters = ["A", "B", "C"];
  const numbers = [1, 2, 3];

  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <div>
        {letters.map(l => (
          <p key={l}>{l} </p>
        ))}
      </div>

      <div>
        {numbers.map(n => (
          <strong key={n}>{n} </strong>
        ))}
      </div>
    </div>
  );
}


import React from "react";

export default function CreateElement() {
  const h1Element = React.createElement("h1", null, "Hello World");

  const pElement = React.createElement(
    "p",
    { style: { color: "red" } },
    "This is a red paragraph"
  );

  const listElement = React.createElement(
    "ul",
    null,
    React.createElement("li", null, "Item 1"),
    React.createElement("li", null, "Item 2")
  );

  const buttonElement = React.createElement(
    "button",
    { onClick: () => alert("Clicked!") },
    "Click Me"
  );

}
