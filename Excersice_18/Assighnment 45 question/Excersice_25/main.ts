//pass (green alien):
let alien_color : string = "green";

if(alien_color == "green") {
    console.log("you just earned 5 points!");
}

//fail(red alien):
alien_color = "red";
if(alien_color == "green") {
   // No output becouse the condition is false
};