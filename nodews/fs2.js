var fs = require('fs'); 

var content = "";

fs.readFile("fs2.js", (err, data) => {
    content = data.toString();
    console.log("inside :", content);
});

console.log("outside :", content);

