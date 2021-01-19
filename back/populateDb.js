const fs = require("fs");

function readData() {
    let rawdata = fs.readFileSync("./data/names.json");
    let names = JSON.parse(rawdata);
    console.log(names);
}

module.exports = { readData }
