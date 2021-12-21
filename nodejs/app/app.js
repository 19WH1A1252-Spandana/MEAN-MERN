// var http = require('http');
// var myServer = http.createServer(function(req,res)
// {
//     res.write('connection successful!!! welcome to Node Server!!!');
//     res.end();
// });
// myServer.listen(3000);
// console.log('use url localhost:3000');

var express = require('express');
var app = express();

app.get("/",function(req,res)
{
    res.send("<h1>Express Connnection Success...");
});
app.server = app.listen(3000,function()
{
    console.log("Server started on port 3000");
});