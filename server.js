const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb'
});

app.use(express.urlencoded({ extended: true }));

app.get('/user', (req, res) => {
    const username = req.query.username;
    connection.query(`SELECT * FROM users WHERE username = '${username}'`, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`<h1>Search Results for ${query}</h1>`); 
});

app.listen(3000, () => console.log('Server running on port 3000'));
