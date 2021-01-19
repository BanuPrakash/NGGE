var fs = require('fs'); 

var content = fs.readFileSync("fs1.js"); // Blocking mode

console.log(content.toString());

