const http = require('http');
const querystring = require('querystring');
const urlLib = require('url');
const fs = require('fs');

var server = http.createServer(function(req,res){

    var obj = urlLib.parse(req.url,true);
    var url = obj.pathname;
    const GET = obj.query;

    var str = ''
    req.on('data',function(data){
        str+=data;

    });
    req.on('end',function(){
        const POST = querystring.parse(str);

        console.log(url,GET,POST);
    })


})

server.listen(8080)