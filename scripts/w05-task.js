/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    // Clear the displayed list of temples
    reset();
  
    temples.forEach((temple) => {
        const html = `
          <article>
            <h3>${temple.templeName}</h3>
            <img src="${temple.imageUrl}" alt="${temple.location}">
          </article>
        `;
    
        templesElement.innerHTML += html;
      });
    };
  
/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList.length = 0; // Clear the existing templeList
    templeList.push(...await response.json());
    displayTemples(templeList);
  };

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
  };

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    const filter = document.querySelector("#sortBy").value;
  
    switch (filter) {
      case "utah":
        displayTemples(temples.filter(temple => temple.location.includes("Utah")));
        break;
      case "notutah":
        displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
        break;
      case "older":
        displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case "all":
        displayTemples(temples);
        break;
    }
  };
  
/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templeList);
  });

//Initial call to getTemples to load data
getTemples();