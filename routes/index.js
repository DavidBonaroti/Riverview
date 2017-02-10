var listingsData = require('../listings.json');


// home page
exports.home = function (req,res) {
  res.render('home', {
    //object literals
    title: "Riverview Real Estate",
    location: ["Oakmont", "Verona", "Penn Hills"]
  });
};

// property listings
exports.listings = function(req,res) {

  var listings = listingsData.listings;

  res.render('listings', {
    title: "Riverview Real Estate",
    // (amy) consistency with quotes, semicolons, spacing, etc.
    listings: listings //access to listings.json file
  });
};

// about information
exports.about = function (req,res) {
  res.render('about');
};

// contact information
exports.contact = function(req,res) {
  res.render('contact');
};

// error end point
exports.notFound = function(req,res) {
  res.send("The page you are looking for could not be found.");
};
