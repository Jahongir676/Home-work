import express from 'express';
import fs from 'fs';


app = express();

app.use(express.json())
const readBooks = () => {
    try {
        const data = fs.readFileSync('books.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading books.json:', err);
        return [];
    }
};
const books = readBooks();

app.get("/books", (req, res) =>{
    return res.send(books)
});

app.get("/books/:id", (req, res) =>{
    const id = req.params.id
    const book = books.find(book => book.id === id)
    if(!book) return res.status(404).send("Book not found")
    return res.send(book)
});

app.post("books", (req, res) =>{
    const book = req.body
    books.push(book)
    return res.send(book)
});

app.pot("/books/:id", (req, res) =>{
    const id = req.params.id
    const book = books.find(book => book.id === id)
    if(!book) return res.status(404).send("Book not found")
    book.title = req.body.title
    book.author = req.body.author
    book.published = req.body.published
    return res.send(book)
});

app.delete("/books/:id", (req, res) =>{
    const id = req.params.id
    const book = books.find(book => book.id === id)
    if(!book) return res.status(404).send("Book not found")
    books.splice(books.indexOf(book), 1)
    return res.send(book)
});