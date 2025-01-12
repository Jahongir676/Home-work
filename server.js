const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let weatherData = [];
let currentId = 1;

app.post('/weather', (req, res) => {
    const weatherEntry = { id: currentId++, ...req.body };
    weatherData.push(weatherEntry);
    res.status(201).json(weatherEntry);
});

app.delete('/weather/:id', (req, res) => {
    const id = parseInt(req.params.id);
    weatherData = weatherData.filter(entry => entry.id !== id);
    res.status(204).send();
});

app.put('/weather/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = weatherData.findIndex(entry => entry.id === id);
    if (index !== -1) {
        weatherData[index] = { id, ...req.body };
        res.json(weatherData[index]);
    } else {
        res.status(404).send();
    }
});

app.get('/weather/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const entry = weatherData.find(e => e.id === id);
    if (entry) {
        res.json(entry);
    } else {
        res.status(404).send();
    }
}); 

app.get('/weather', (req, res) => {
    const { page = 1, limit = 10, location, date } = req.query;
    let results = weatherData;

    if (location) {
        results = results.filter(entry => entry.location === location);
    }
    if (date) {
        results = results.filter(entry => entry.date === date);
    }

    const total = results.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedResults = results.slice(startIndex, endIndex);

    res.json({
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        data: paginatedResults
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});