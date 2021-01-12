var expr = require("express");
var app = expr();
//app.set("port",3000);
// assigning 3000 to variable "port"
/*
app.listen(app.get("port"));
console.log("Listening port "+ app.get("port"));
*/

// =================== using call back 

app.set("port",5000);
var server = app.listen(app.get("port"),function(){
    var port = server.address().port;
    console.log("Listenning to port "+ port);
})