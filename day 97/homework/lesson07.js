let idelement = document.getElementById("paragraph");
let classElement = document.getElementsByClassName("h1")[3];
let element = document.getElementsByTagName("button")[0];

idelement.style.color = "blue";
classElement.style.color = "red";
classElement.textContent = "Newer Text";
element.style.width = "300px";
element.innerHTML = "New Text";
