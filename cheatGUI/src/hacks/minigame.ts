// Minigame Hacks

// BEGIN IMPORTS
import { category, Toggler } from "../index"; // Import the Cheat GUI bases.
import { _ } from "../utils/util";  // Import Prodigy Typings.
import { Toast } from "../utils/swal"; // Import Toast and NumberInput from swal
// END IMPORTS


// BEGIN MINIGAME HACKS



// Begin 69x Walk Speed
new Toggler(category.minigames, "69x Walk Speed [Dyno Dig]", "Walk so fast that you're teleporting, in Dyno Dig.").setEnabled(async () => {
    _.instance.game.state.states.get("DinoDig").walkSpeed = 69;
    return Toast.fire("Enabled!", "You will now walk so fast that you're teleporting in Dyno Dig.", "success");

}).setDisabled(async () => {
    _.instance.game.state.states.get("DinoDig").walkSpeed = 1.5;
    return Toast.fire("Disabled!", "You will now walk at normal speed, in Dyno Dig.", "success");
});
// End 69x Walk Speed



// END MINIGAME HACKS
