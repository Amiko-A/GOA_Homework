let books = {
  "Harry Poter": "j.k rolling",
  "War and peace": "Leo Tolstoy",
  "Clean Code": "Robert C. Martin"
};

let bookTitles = [];

for (let title in books) {
  bookTitles.push(title);
}