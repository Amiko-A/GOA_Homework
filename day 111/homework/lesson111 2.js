let person = ({ firstName, lastName = "Dato" }) => `${firstName} ${lastName}`;

console.log(person({ firstName: "Amiko", lastName: "Amiridze" }));
console.log(person({ firstName: "Gio" }));
