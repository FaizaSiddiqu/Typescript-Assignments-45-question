"use strict";
// function make_album(artist :string , tittle : string); (artist :string , tittle : string)  {
//     const dictionaries = {
//         artist: artist.charAt(0).toUpperCase() + artist.slice(1),
//         tittle: tittle.charAt(0).toUpperCase() + tittle.slice(1)
//     };
//     return dictionaries;
// }
//  let Album = make_album("Artist one" , "The First Album");
//  console.log(Album);
//   Album = make_album("Artist two" , "The Second Album");
//  console.log(Album);
//   Album = make_album("Artist Three" , "The Third Album");
//  console.log(Album);
function make_album(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let Album = make_album("Artist one", "The First Album");
console.log(Album);
Album = make_album("Artist two", "The Second Album");
console.log(Album);
Album = make_album("Artist Three", "The Third Album");
console.log(Album);
