
let usernames : string[] = ["Admin" , "_Sanaurooj", "_Sadiaiqbal", "_muskanshiekh" , "Rameenkhan"];

usernames.forEach(usernames => {
if (usernames === "Admin") {
       console.log("Hello Admin, would you like to see a status report?");
} else {
    console.log(`Hello ${usernames},  thank you for logging in again.`);
}
});

