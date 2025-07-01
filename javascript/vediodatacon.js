var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Swanand@2003",
    database:"cafecrush"
})

module.exports=con;