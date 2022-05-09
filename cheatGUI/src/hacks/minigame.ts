// Minigame Hacks

// BEGIN IMPORTS
import { category, Toggler } from "../index"; // Import the Cheat GUI bases.
import { _ } from "../utils/util";  // Import Prodigy Typings.
// END IMPORTS


// BEGIN MINIGAME HACKS



// Begin 69x Walk Speed
new Toggler(category.minigames, "69x Walk Speed", "Walk really fast!").setEnabled(async () => {
	_.instance.game.state.states.get("DinoDig").walkSpeed = 69;
}).setDisabled(async () => {
	_.instance.game.state.states.get("DinoDig").walkSpeed = 1.5;
});
// End 69x Walk Speed



// END MINIGAME HACKS