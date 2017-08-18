//this is simple basic http server
var http = require('http');

http.createServer(requestCallback).listen(8888);
console.log("server is running");

function requestCallback(request,response){
    console.log("Requested url is : "+request.url);
    response.writeHead(200,{'Context-Type':"text/plain"});
    response.write("Here is server data");
    response.end();
}