const books = new Map();
books.set(237, "Introduction to Algorithms");
books.set(247, "Suck it");
books.set("sherlock", {email: "holmes@scotlandyard.com", address: "221B Baker Stree, Londeon"});

for (let [key, value] of books.entries()){
    console.log(`${key}:${value}`);
}

console.log(books);