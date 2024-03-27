
let current_users : string[] = ["user1", "admin", "user3","user4", "user5"];
let new_users : string[] = ["user1", "user6", "user7", "admin" , "user9"];

new_users.forEach((newUsers) => {
    if(
        current_users.some(
    (currentUsers) => currentUsers.toLowerCase() === newUsers.toLocaleLowerCase()
)
) {
console.log(`${newUsers} will need to enter a new username.`);
} else {
console.log(`${newUsers} is available.`);
}
});

