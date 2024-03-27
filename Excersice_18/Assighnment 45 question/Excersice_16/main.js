"use strict";
let guests = ["sana", "muskan", "alina"];
console.log("Graet news! I found a bigger dinner table");
// Adding more guests
guests.unshift("Areesha");
guests.splice(guests.length / 2, 0, "Zoya");
guests.push("Ainy");
guests.forEach(guests => {
    console.log(`\nDear ${guests} , would you like to join me for diner`);
});
