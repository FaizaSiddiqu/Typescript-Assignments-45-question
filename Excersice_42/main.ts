

let magicians: string[] = ["magicians1", "magicians2", "magicians3"];

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The Great";
    }
}

function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

make_great(magicians);
show_magicians(magicians);
