const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Swanand@2003',
  database: 'cafecrush'
});

app.use(express.static('public'));

app.get('/getData', (req, res) => {
  con.query('SELECT * FROM new_orders', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
