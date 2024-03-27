function describe_city(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("\"".concat(city, " city \" is in \"").concat(country, "\""));
}
describe_city("Karcahi");
describe_city("Lahore");
describe_city("Islamabad");
describe_city("Berlin", "Germony");
