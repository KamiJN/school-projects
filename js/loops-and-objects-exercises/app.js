const books = [
    {
        title: "Demian",
        genre: "Opowieść"
    },
    {
        title: "Wilk stepowy",
        genre: "Opowieść"
    },
    {
        title: "Inny Świat",
        genre: "Pamiętnik"
    },
    {
        title: "Zbrodnia i kara",
        genre: "Opowieść"
    },
    {
        title: "Trzy Ciała",
        genre: "Fantastyka"
    },
    {
        title: "Sztuka wojny",
        genre: "Traktat"
    },
    {
        title: "Wyklucie",
        genre: "Horror"
    },
    {
        title: "Dracula",
        genre: "Horror"
    },
    {
        title: "Ekspozycja",
        genre: "Kryminał"
    },
    {
        title: "Doberman",
        genre: "Kryminał"
    },
];

for(const book of books) 
    console.log(book.title);

const genres = {};
for(const book of books)
    genres[book.genre] = genres[book.genre] ? genres[book.genre] + 1 : 1;  
console.log(genres);

for(const field in genres)
    console.log(`${field} - ${genres[field]}`);

//Zadanie 1. Filtrowanie książek po gatunku.
const GetTitlesByGenre = (books, genre) => {
    const tmpArr = [];
    for(const book of books) {
        if (book.genre.toLowerCase() === genre.toLowerCase())
            tmpArr.push(book.title);
    }
    return tmpArr;
} 
console.log(GetTitlesByGenre(books, "Opowieść"));

//Zadanie 7. Najrzadszy gatunek.
const FindRarestGenre = (books) => {
    const tmpObj = {};
    for(const book of books) {
        tmpObj[book.genre] = tmpObj[book.genre] ? tmpObj[book.genre] + 1 : 1;
    }
    let rarestGenre;
    let minCount = Infinity;
    for(const field in tmpObj) {
        if(tmpObj[field] < minCount) {
            minCount = tmpObj[field];
            rarestGenre = field;
        }
    }
    return rarestGenre;
}
console.log(FindRarestGenre(books)); 

/*
const dishes = [
    {
        name: "Rosół",
        category: "Obiad"
    },
    {
        name: "Pomidorowa",
        category: "Obiad"
    },
    {
        name: "Żeberka",
        category: "Obiad"
    },
    {
        name: "Ryż z warzywami",
        category: "Obiad"
    },
    {
        name: "Schabowy",
        category: "Obiad"
    },
    {
        name: "Naleśniki",
        category: "Śniadanie"
    },
    {
        name: "Tosty",
        category: "Śniadanie"
    },
    {
        name: "Kanapki",
        category: "Śniadanie"
    },
    {
        name: "Jajecznica",
        category: "Kolacja"
    },
    {
        name: "Sałatka owocowa",
        category: "Kolacja"
    },
];

for (const dish of dishes) //"Dla każdego dania wśród dań."
    console.log(dish.category);

for(let i = 0; i < dishes.length; i++)
    console.log(dishes[i].category);


//Pętla dla tablicy
const categories = {};
for (const dish of dishes)
    categories[dish.category] = categories[dish.category] ? categories[dish.category] + 1 : 1;

for(let i = 0; i < dishes.length; i++)
    categories[dishes[i].category] = categories[dishes[i].category] ? categories[dishes[i].category] + 1 : 1;


for(let i = 0; i < dishes.length; i++)
    categories[dishes[i].category] = categories[dishes[i].category] === undefined ? 1 : categories[dishes[i].category] + 1;


for(let i = 0; i < dishes.length; i++) {
    if(categories[dishes[i].category] === undefined)
        categories[dishes[i].category] = 1;
    else
        categories[dishes[i].category] + 1;
}

console.log(categories);

//Pętla dla obiektu
for (const field in categories)
    console.log(`${field} - ${categories[field]}`);
*/