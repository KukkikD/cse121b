/* LESSON 3 - Programming Tasks */

/* Profile Object  */
// Declare a new object literal variable named myProfile and assign an empty object to it.         
let myProfile = {};



/* Populate Profile Object with placesLive objects */
// Add a property named name and set its value to my name as a string.
myProfile.name = "Amornrat Dizon";

// Add a property named photo and set its value to an image's path and name as a string.
myProfile.photo = "images/zonta_kk.png";

// Add a property named favoriteFoods and set its value to an array of my favorite foods as strings.
myProfile.favoriteFoods = [
    'Somtum (Papaya Salad)',
    'Pad-thai',
    'Chocolate',
    'Tomyum',
    'Ice Cream'
  ];

// Add a property named hobbies and set its value to an array of my hobbies as strings.
myProfile.hobbies = [
    'Running',
    'Cycling',
    'Cooking',
    'Serving other',
    'Photography'
  ];

// Add a property named placesLived and set its value to an empty array.
myProfile.placesLived = [];

// Using code outside of the myProfile definition, add an item to the placesLived array.
myProfile.placesLived.push({
      place: 'Udon Thani, Thailand',
      length: '2 year'
    });

// Add additional objects to the placesLived array for each place that I have been lived.
myProfile.placesLived.push({
      place: 'Bangkok, Thailand',
      length: '12 years'
    });

myProfile.placesLived.push({
      place: 'Cha-am, Thailand',
      length: '6 years'
    });

/* DOM Manipulation - Output */

/* Name */
// Assign the value of the name property to the HTML element with ID 'name'.
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
// Assign the value of the photo property as the src attribute of the HTML <img> with ID 'photo'.
document.querySelector('#photo').src = myProfile.photo;

// Assign the value of the name property as the alt attribute of the HTML <img> with ID 'photo'.
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
// Create a list of items for each favorite food and append them to the HTML <ul> with ID 'favorite-foods'.
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
// Create a list of items for each hobby and append them to the HTML <ul> with ID 'hobbies'.
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */
// For each object in the placesLived property, create <dt> and <dd> elements and append them to the <dl> element.
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    let dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
  });

