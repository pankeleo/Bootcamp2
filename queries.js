/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/

mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true});

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */

  Listing.find({name: 'Library West'}, function(err, output){
    if(!err)
    {
      console.log(output);
    }
    else
    {
      console.log('Cant find Library West');
    }
  });


  };
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.deleteOne({code: 'CABL'}, function(err, output){
    if(!err)
    {
      console.log('CABL deleted');
    }
    else
    {
      console.log('Cant find document with code CABL');
    }

  });

};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
  var name = 'Phelps Lab'
  var address = '1953 Museum Rd, Gainesville, FL 32603'
  Listing.updateOne({name: 'Phelps Lab'},{ address: '1953 Museum Rd, Gainesville, FL 32603'});

};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  //console.log(JSON.stringify(listings, null, 1));
  Listing.find(null, null, function(err, output)
  {
    console.log(output);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
