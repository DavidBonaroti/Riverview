# Riverview
Revised website for the Riverview Real Estate website. 
Original website URL: http://www.riverview-realestate.com/

Features to be completed:

Listings.ejs

1. Zillow API AJAX request. Request works succesfully using Postman but the same request fails within the application
and receives an error in the console: XMLHttpRequest cannot load: No 'Access-Control-Allow-Origin' header is present on the 
requested resource.

2. EJS syntax for element ID name. JS file can not recognize <%= listings[i].id %>, which prevents function from running.

3. Multiple Google Map API requests during iteration. Current error: "initMap is not a function".

4. Re-evaluate CSS layout. Each div should contain two rows. First row will contain carousel, JSON Data, and ZillowInfo + ZillowLink button.
   Second row will be full width Google Map of current listing. Long and Lat coordinates will be puleed from JSON file and inserted into
   initMap function.
   
About.ejs

1. Transfer "about" information from original website with styling.


Contact.ejs

1. Generate footer to contain social media and zillow agent links. Footer coul dbe extended to Listings.ejs and About.ejs.
