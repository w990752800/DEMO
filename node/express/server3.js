const express = require('express');
const expressStatic = require('express-static');

var server = express();
server.listen(8081);

var user = {
    'w':1,
    'n':2,
    'f':3
}

server.get('/login',function(req,res){

})

server.use(expressStatic('./www'));