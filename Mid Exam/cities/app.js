var express = require("express");
require("./app/data/DBConnection");
var path = require("path");
var bodyParser = require("body-parser");
var routes = require("./app/routes");
var app = express();

app.set("port",3000);
app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
});
app.use(express.static(path.join(__dirname , "public")));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use("/api",routes);
var server = app.listen(app.get("port"),function(){
    var port = server.address().port;
    console.log("Listening to port "+ port );
});