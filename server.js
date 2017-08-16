var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('/etc/letsencrypt/live/daimont.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/daimont.com/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/daimont.com/chain.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);
