var guests = ["sana", "muskan", "alina"];
console.log(guests);
console.log("Unfortunately,you can invite only two people for dinner");
while (guests.length > 2) {
    var removedguest = guests.pop();
    console.log("\nsorry,".concat(removedguest, " , I can't invite you to dinner."));
}
guests.forEach(function (guests) {
    console.log("\nDear , ".concat(guests, ", you are still invited to dinner."));
});
guests.pop();
guests.pop();
console.log(guests); //shows an epmty array
