let pElement = document.createElement("p");

pElement.textContent("This is paragraph");

document.body.appendChild(pElement);

let h2Element = document.createElement("h2");

hElement.textContent("Subheading");

document.body.appendChild(hElement);

hElement.textContent("Updated Subheading");

let divElement = document.createElement("div");

divElement.textContent('divElement')

document.body.appendChild(divElement);

document.body.removeChild(divElement)

let ulElement = document.createElement("ul");

for(let i = 1;i <= 3;i++){
    let li = document.createElement("li");
    document.body.appendChild(ulElement)
};

console.log(ulElement.firstChild.textContent);

console.log(ulElement.lastChild.textContent);

let h3Element = document.createElement("h3");

h3Element.textContent('h3Element');

h3Element.insertBefore(h3Element,list.firstChild);

let spanElement = document.createElement("span");

spanElement.textContent("This is span");

let conteiner = document.getElementById("conteiner");
document.divElement.appendChild(spanElement);

console.log(spanElement.parentElement)