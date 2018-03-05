const http = require('http');

var server = http.createServer(function(req,res){


    if(req.url.indexOf('?') != -1){
        var arr1 = req.url.split('?');
        var arr2 = arr1[1].split('&');
        var GET = {}

        for(var i = 0;i<arr2.length;i++){

            var arr3 = arr2[i].split('=')

            GET[arr3[0]] = arr3[1];

        }

    }else{
        var url = req.url;
        GET = {};
    }

    console.log(GET);

    res.write('aqaaaaa');
    res.end();


})

server.listen(8080);