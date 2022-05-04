import mysql from "mysql";
import express from 'express';
import 'dotenv/config';
import cors from "cors";
import path from "path"

const app = express()
let connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DATABASE
});
 




app.get('/', function(req, res){
    var options = {
        root: path.join(__dirname, '/51780.jpg')
    };
    res.sendFile(options)
});

app.get('/values', (req, res) => {
     connection.query('SELECT * FROM Users', function (err, result) {
        if (err) console.log(err);
        res.send(result)
});
})



app.listen(process.env.PORT , (ok, err) =>{
    if(err) connection.end();
})

