var express = require("express");
const { join } = require("path");
var path = require("path");
var app = express();
app.set("port",3000);
app.use(express.static(path.join(__dirname, "/public")));
/*
app.get("/",function(req,resp){
    console.log("Get received");
    resp.status(200).sendFile(path.join(__dirname,"public","index.html"));
})
*/
var server = app.listen(app.get("port"),function(){
    var port = server.address().port;
    console.log("Listening to port "+ port );
});