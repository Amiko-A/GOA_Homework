let score = prompt("Enter your score:");

if (score <= 100) {
    alert("A");
} else if (score  < 90) {
    alert("B");
} else if (score < 80) {
    alert("C");
} else if (score  < 70) {
    alert("D");
} else if (score < 60) {
    alert("F");
} else {
    alert("Invalid score");
}
