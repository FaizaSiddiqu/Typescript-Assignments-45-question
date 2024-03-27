"use strict";
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const myCar = createCar("Toyota", " corolla", { color: "silver", year: "2024" });
const myCar1 = createCar("Ford", "Fiesta", { color: "black", year: "2024" });
console.log(myCar, myCar1);
