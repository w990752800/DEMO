const http = require('http');
const server = http.createServer(function(){
    console.log('有人来了')
})
server.listen(8080)