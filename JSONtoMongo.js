'use strict';

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
var listingData;

mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true});

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
  //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

   DONT FORGET THIS IT WILL SAVE YOUR LIFE- DAKOTA    Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
 */

fs.readFile('listings.json', 'utf8', function(err, data) 
{
  listingData = JSON.parse(data);

  listingData.entries.forEach(function(element)
  {
    new Listing(element).save(function(err, listing){});
  });
});

/*  
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */ 