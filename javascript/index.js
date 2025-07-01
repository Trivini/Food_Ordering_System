const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Swanand@2003',
    database: 'cafecrush'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});
app.get('/data', (req, res) => {
    connection.query('SELECT * FROM new_orders', (err, results) => {
        if (err) {
            console.error('Error querying MySQL:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
});
