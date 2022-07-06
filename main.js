var http = require('http');
var fs = require('fs');
var url = require('url');
//require
/*
필요한 모듈을 Node.js에 요구
parameter: 아마도 모듈명, str
return: 해당 모듈
*/
var app = http.createServer(function(request, response) {
    var _url = request.url;
    console.log(_url); //request.url이 무얼 담고 있는 지 알 수 있다, localhost:3001/?id=HTML이라 치면 에러가 뜨면서 콘솔에 /?=HTML이 출력된다
    if (_url == '/') {
        _url = '/index.html';
    }
    if (_url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);  
});

app.listen(3001);