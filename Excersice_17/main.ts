
let guests : string[] = ["sana", "muskan","alina"];
console.log(guests);

console.log("Unfortunately,you can invite only two people for dinner");

while (guests.length > 2) {
    let removedguest = guests.pop();
    console.log(`\nsorry,${removedguest} , I can't invite you to dinner.`);
}

guests.forEach(guests => {
    console.log(`\nDear , ${guests}, you are still invited to dinner.`);
});
guests.pop();
guests.pop();
console.log(guests); //shows an epmty array