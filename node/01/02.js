const http = require('http');
var server = http.createServer(function(req,res){

    res.write('abc');
    res.end();

}).listen(8080)