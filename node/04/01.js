const http = require('http');
const querystring = require('querystring');

const server = http.createServer(function(req,res){
    var str = ''
    req.on('data',function(data){
        str+= data;
    });
    req.on('end',function(){
        var POST = querystring.parse(str)
        console.log(POST);
    })

})

server.listen(8080)