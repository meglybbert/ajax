//INCLUDES
// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";
// @codekit-prepend "airtable.js";

console.log('Hello, World!');

//`load` method
//$('#data').load('/data/data.html');

//Handshake with AirTable
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyDmRaxoESviMOwB'}).base('appbi9SCPcVjSi1wj');

base('Entertainers').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});


// If you only want the first page of records, you can
// use `firstPage` instead of `eachPage`.
base('Entertainers').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });
});