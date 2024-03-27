"use strict";
function make_great(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`Great ${magician}`);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians = ["Harry", "Hermione", "Ron"];
let greatMagicians = make_great([...magicians]);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Magicians made Great:");
show_magicians(greatMagicians);
