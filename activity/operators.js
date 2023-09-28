// operators.js

// Initialize ship health, ship ammo, and target health
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

// Function to check if the ship can fire
function shipCanFire() {
  return shipHealth > 0 && shipAmmo > 0;
}
  
  // Function to check if the ship hits the target
function isHit() {
  return Math.random() > 0.5; // Returns true if a randomly generated number is greater than 0.5, false otherwise
}
  
  // Function to check if a target is destroyed
function isDestroyed(health) {
  return health <= 0; // Returns true if health is zero or less
}

// Function to reload the ship
function reloadShip() {
  if (shipAmmo === 0) {
    shipHealth--; // Reduce ship health by 1 if it runs out of ammo
    shipAmmo = 3; // Increase ammo by 3
  }
}

// Function to fire the ship at the target
function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

// Function to simulate an encounter
function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

// Call the encounter function to start the simulation
encounter();