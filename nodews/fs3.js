var fs = require('fs'); 

var stream = fs.createReadStream("fs3.js");

stream.on("data", (chuck) => {
    console.log(chuck.toString());
});

stream.on("end", () => {
    console.log("END!!!");
});

