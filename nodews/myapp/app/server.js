const converter = require('./converter');
const http = require('http');
const url = require('url');

var server = http.createServer( (req,res) => {
    // http://localhost:3000/rgbToHex?red=255&green=15&blue=100
    // pathname is "rgbToHex"
    let pathname = url.parse(req.url).pathname;
    //red=255  green=15 blue=100
    let query = url.parse(req.url,true).query;
   
    if(pathname === "/rgbToHex") {
        var result = converter.rgbToHex(parseInt(query["red"]), parseInt(query["green"]), parseInt(query["blue"]));
        res.write(result);
        res.end();
    } else if (pathname === "/hexToRgb") {
        //http://localhost:3000/hexToRgb?hex=ff0023
        var result = converter.hexToRgb(query["hex"]);
        res.end(result.toString());
    }

});

server.listen(3000, () => console.log("server started!!!"));

