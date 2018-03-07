const express = require('express');

var server = express();

server.use('/',function(req,res){
    res.send({a:'1',b:'2',c:'3'})
    res.end();
})

server.listen(8080);