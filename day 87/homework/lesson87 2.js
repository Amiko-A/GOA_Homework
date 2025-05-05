function book(title, author, year){
    this.title=title,
    this.author=author,
    this.year=year,

    this.getSummary=function(){
        console.log(`${title} by ${Author}, published in ${year}`)
    }
}

let book1=new book("Lord of the rings", "J.R.R. Tolkien",1955);
let book2=new book("Treasure Island ","Robert Louis Stevenson",1883);
let book3=new book("Star Wars","George Lucas",1977);