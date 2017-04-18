var http = require("http");//core module to node - dont need to install

//capatalized because it is a constant
var PORT1 = 7000; //port not in use 
var PORT2 = 7500;

function handleRequest1(request, response){
	response.end("You are beautiful!");
}//function that fires when we get a request

function handleRequest2(request, response){
	response.end("You need to wash your hair!");
}//function that fires when we get a request

//declare server
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

//listner - first arg port num, second arg callback
server1.listen(PORT1, function(){
	console.log("server listening on http://localhost:" + PORT1)
});

server2.listen(PORT2, function(){
	console.log("server listening on http://localhost:" + PORT2)
});