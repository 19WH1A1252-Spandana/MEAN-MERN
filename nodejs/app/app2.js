var http = require('http');
var myServer = http.createServer(function(req,res)
{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write('<h3>connection successfull!!! welcome to Node Server!!!</h3>');
    res.end();
});
myServer.listen(3000);
console.log('use url localhost:3000');