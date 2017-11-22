/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/
var newElem = document.getElementById("rating1");
newElem.innerHTML = "Rating: 5 Stars";
console.log(newElem);

//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/
var newPrice = document.getElementById("price2");
newPrice.innerHTML = "price: $$$";
console.log(newPrice);

var newAddress = document.getElementById("addy2");
newAddress.innerHTML = "Address: 525 Kapahulu Ave, Honolulu, HI 96815";
console.log(newAddress);

//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/
var newDiv = document.createElement("div");
newDiv.id = "hours3";
newDiv.innerHTML="Hours: 6pm - 12am Sun - Sat";
text3.appendChild(newDiv);

//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/
var newDiv = document.createElement("div");
newDiv.id = "price4";
newDiv.innerHTML="Price: $$$";
text4.appendChild(newDiv);

/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/
var newDiv = document.createElement("div");
newDiv.id = "addy4";
newDiv.innerHTML="Address: 1620 N. School St, Honolulu, HI 96817";
text4.appendChild(newDiv);

/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/
var newDiv = document.createElement("div");
newDiv.id = "hours4";
newDiv.innerHTML="Hours: 9am - 10pm Sun - Sat";
text4.appendChild(newDiv);
/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/
var newPar = document.createElement("p");
newPar.id = "update4";
newPar.innerHTML="I'd leave a blank space for this oxtail soup!";
comment4.appendChild(newPar);

//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/
var newDiv = document.createElement("div");
newDiv.id = "name5";
newDiv.innerHTML="5. The Death Star Cafe";
text5.appendChild(newDiv);

var newDiv = document.createElement("div");
newDiv.id = "rating5";
newDiv.innerHTML="Rating: 2 Stars";
text5.appendChild(newDiv);

var newDiv = document.createElement("div");
newDiv.id = "price5";
newDiv.innerHTML="Price: $$";
text5.appendChild(newDiv);

var newDiv = document.createElement("div");
newDiv.id = "addy5";
newDiv.innerHTML="Address: A galaxy far, far away.";
text5.appendChild(newDiv);

var newDiv = document.createElement("div");
newDiv.id = "hours5";
newDiv.innerHTML="Hours: We never close.";
text5.appendChild(newDiv);