const http = require('http');

var server = http.createServer(function(req,res){

    var GET = {}

    var arr1 = req.url.split('?');
    console.log(arr1)
    var arr2 = arr1[1].split('&');
    console.log(arr2)
    for (var i = 0;i<arr2.length;i++){
        var arr3 = arr2[i].split('=');
        GET[arr3[0]] = arr3[1];
    }

    console.log(GET);
    res.write('aaaa');
    res.end();

})
server.listen(8080)