var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    rootFolder = '/webroot/',
    defaultFileName = '/webroot/index.html',
    host = '0.0.0.0',
    port = 80;


http.createServer(function(req, res) {
    var fileName = url.parse(req.url).pathname;
    fileName = (fileName == "/") ? defaultFileName : rootFolder + fileName;

    fs.readFile(__dirname + decodeURIComponent(fileName), 'binary',function(err, content){
        if (content != null && content != '' ){
            res.writeHead(200,{'Content-Length':content.length});
            res.write(content);
        }
        res.end();
    });
}).listen(port, host);

console.log('Webserver running on ' + host + ':' + port);
