"use strict";
function make_sandwich(...items) {
    console.log(`Making a sandwich with: ${items.join(' , ')}. `);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomatto");
make_sandwich("acocado", "mustard", " sprouts", "mayo");
