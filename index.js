var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
//TODO: Write a algorithm to get all selectors without hardcoding them.
let data = {
    "PS1": {
        "levels": [
            { "option": "PayBySpace", "path": "#ps1 > tbody > tr:nth-child(1) > td.rightalign" },
            { "option": "Purple", "path": "#ps1 > tbody > tr:nth-child(2) > td.rightalign" },
            { "option": "Orange", "path": "#ps1 > tbody > tr:nth-child(3) > td.rightalign" },
            { "option": "Orange", "path": "#ps1 > tbody > tr:nth-child(4) > td.rightalign" },
            { "option": "Gold", "path": "#ps1 > tbody > tr:nth-child(5) > td.rightalign" },
            { "option": "Gold", "path": "#ps1 > tbody > tr:nth-child(6) > td.rightalign" },
            { "option": "Green", "path": "#ps1 > tbody > tr:nth-child(7) > td.rightalign" }
        ]
    },
    "PS3": {
        "levels": [
            { "option": "PayBySpace", "path": "#ps3 > tbody > tr:nth-child(1) > td.rightalign" },
            { "option": "Purple", "path": "#ps3 > tbody > tr:nth-child(2) > td.rightalign" },
            { "option": "Orange", "path": "#ps3 > tbody > tr:nth-child(3) > td.rightalign" },
            { "option": "Orange", "path": "#ps3 > tbody > tr:nth-child(4) > td.rightalign" },
            { "option": "Gold", "path": "#ps3 > tbody > tr:nth-child(5) > td.rightalign" },
            { "option": "Gold", "path": "#ps3 > tbody > tr:nth-child(6) > td.rightalign" },
            { "option": "Green", "path": "#ps3 > tbody > tr:nth-child(7) > td.rightalign" }
        ]
    }
};
function parseDataFromPage() {
    request('https://www.utdallas.edu/services/transit/garages/_code.php', function (err, resp, html) {
    
    var html = fs.readFileSync( err ? html : './docs/erroringDom.html', 'utf8');
    const $ = cheerio.load(html);
    Object.keys(data).forEach(PSkeys => { //Iterates over Parking Structures
        console.log(PSkeys);
        data[PSkeys]["levels"].forEach((levels, index) => { //Iterates over levels
            console.log(`${levels.option}: ${$(levels.path).text()}`);
        });
    })

    });
}

parseDataFromPage();