var express = require('express');
var bodyParser = require('body-parser');
//server.js file is responsible for our routes
var {mongoose} = require("./db/mongoose");
var {Todo} = require('./models/Todo');
var {User} = reuqire('./models/User');

//configuring our routes
 var app = express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
console.log(req.body);//stored by body parser
});

 app.listen(8000 ,()=> {
console.log('started on port 8000');
 });