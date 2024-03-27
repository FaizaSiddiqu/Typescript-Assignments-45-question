function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log(" Making a \"".concat(size, "\" sized t-shirt with the message \"").concat(message, "\" printed on it"));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "code is life");
