/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

// Declare and instantiate a variable to hold my name
const fullName = 'Amornrat Dizon (Kukkik)';

// Declare and instantiate a variable to hold the current year
const currentYear = 2023;

// Declare and instantiate a variable to hold the file path and name of the image
const profilePicture = 'images/zonta_kk.png';

/* Step 3 - Element Variables */

// Use the document.getElementById() method to get the HTML element with the name
const nameElement = document.getElementById('name');

// Use the document.getElementById() method to get the HTML element with the id of food
const foodElement = document.getElementById('food');

// Use the document.querySelector() method to get the element with the id of "year"
const yearElement = document.querySelector('#year');

// To get the profile image element, you can use the document.querySelector() method with a class or other attributes.
const imageElement = document.querySelector('#home picture img');

/* Step 4 - Adding Content */

// Assign the nameElement's innerHTML property the fullName variable value surrounded by <strong> tags using a template literal
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Use the textContent property to set the value of the element to the value of the variable currentYear
yearElement.textContent = currentYear;

// Use the setAttribute method to set the src property of the image element to the file path variable
imageElement.setAttribute('src', profilePicture);

// Use the setAttribute method to set the alt property of the image element with a template literal
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */

// Declare an array variable to hold your favorite foods
const favoriteFoods = ['Somtum (Papaya Salad)', 'Pad-thai', 'Chocolate', 'Tomyum'];

// Modify the HTML element with the id of food to display your favorite foods array
foodElement.innerHTML = favoriteFoods.join(', '); // (', ') in the same line, if ('<br>') will show the line break

// Declare and instantiate a variable to hold another single favorite food item
const newFavoriteFood = 'Ice Cream';

// Add the value stored in this new variable to your favorite food array using push()
favoriteFoods.push(newFavoriteFood);

// Append the new array values onto the displayed content of the HTML element with the id of food
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;  // (', ') in the same line, if ('<br>') will show the line break

// Remove the first element in the favorite food array using shift()
favoriteFoods.shift();

// Append the array output showing the modified array, using a line break
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`; // (', ') in the same line, if ('<br>') will show the line break

// Remove the last element in the favorite food array using pop()
favoriteFoods.pop();

// Append the array output with this final modified favorite foods array
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`; // (', ') in the same line, if ('<br>') will show the line break


//debugging
console.log('Favorite Foods:', favoriteFoods);
