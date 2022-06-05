
var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'))
app.use(express.static(__dirname+'/views'))

app.listen(3000,()=>{
  console.log("server runing http://127.0.0.1:3000")
});