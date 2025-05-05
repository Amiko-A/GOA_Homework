let newItem = document.createElement(`li`)

newItem.textContent = "orange";

const list = document.getElementById('fruits');
list.insertBefore(newItem,list.firstElementChild);

list.removeChild(list.lastElementChild);

console.log(list.firstElementChild.textContent);

console.log(list.children[1].parentElement.textContent)