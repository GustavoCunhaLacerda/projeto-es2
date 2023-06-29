import express from 'express';


const app = express();

const PORT = process.env.PORT || 8080;

const items = [
    {
        name: "laptop",
        price: 500
    },
    {
        name: "imac",
        price: 5000
    },
];

app.listen(PORT, () => console.log("started"));

app.get('/api/items', (req, res) => {
    res.send(items);
})

