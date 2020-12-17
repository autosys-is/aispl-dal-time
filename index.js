var http = require('http');
var moment = require('moment');
require('dotenv').config()

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  var url = req.url;
  if (url === '/time-utc') {
    res.write(moment().utc().format('YYYY-MM-DD HH:mm:ss')); 
    res.end(); 
  } else if (url === '/time-local') {
    res.write(moment().local().format('YYYY-MM-DD HH:mm:ss')); 
    res.end(); 
  } else {
    res.write(`Invalid endpoint! The only valid endpoints are /time-utc or /time-local`); 
    res.end(); 
  }
}).listen(process.env.PORT, function () {
  console.log("Server started at port " + process.env.PORT); 
});
