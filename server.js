var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.use('/scripts', express.static(__dirname + '/node_modules/jquery-i18n-properties/'));
app.use('/i18n', express.static(__dirname + '/i18n/'));
app.use("/",router);

app.listen(3000,function(){
  console.log("Live at Port 3000");
});

