"use strict";
let guestarray = ["Sana", "Zoya", "Areesha"];
let unableToAttend = "Zoya";
console.log(`${unableToAttend} can't make it to dinner.`);
// Replace the Guest
let newGuest = "Sahar";
guestarray[guestarray.indexOf(unableToAttend)] = newGuest;
console.log(guestarray);
// New Invitation
guestarray.map((items) => console.log(`Hello ${items} would you like to join me for dinner?`));
