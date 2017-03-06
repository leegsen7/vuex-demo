var express = require('express');
var app = express();

app.use(express.static('./'));

app.use(function (req, res) {
    res.sendfile('index.html');
});

app.listen(8080,'0.0.0.0',function(){
	console.log('启动服务器');
});