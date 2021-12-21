var express = require('express');
var app = express();

var dataFile = require('../data/data.json');

app.get("/",function(req,res)
{
    var info='';
    dataFile.employees.forEach(function(item){
       info +=`
       <li>
       <h3>${item.id}</h3>
       <h3>${item.name}</h3>
       <h3>${item.salary}</h3>
       `;
   });
   res.send(info);
});
app.server = app.listen(3000,function()
{
    console.log("Server started on port 3000");
});