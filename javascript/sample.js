const express = require('express');
const mysql = require('mysql');
const app = express();

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Swanand@2003",
  database: "cafecrush"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

app.use(express.static('public')); // Serve static files from the 'public' directory

app.get('/', function(req, res) {
  con.query("SELECT * FROM new_orders", function (err, result) {
    if (err) throw err;
    res.render('index', { data: result });
  });
});

const port = 3000;
app.listen(port, function() {
  console.log(`Server started on http://localhost:${port}`);
});
