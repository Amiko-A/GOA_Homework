document.getElementById("myDiv").classList.add("highlight");
document.getElementById("myDiv").classList.remove("highlight");

document.getElementById("toggleButton").addEventListener("click", function () {
document.getElementById("targetDiv").classList.toggle("active");
});

console.log(document.getElementById("checkParagraph").classList.contains("important"));

document.getElementById("replaceDiv").classList.replace("red", "blue");

console.log(document.getElementById("itemDiv").classList.item(1));