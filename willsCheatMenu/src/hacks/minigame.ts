import { category, Toggler } from "../index";
import { _ } from "../utils/util";

new Toggler(category.minigames, "69x Walk Speed", "Walk really fast!").setEnabled(async () => {
	_.instance.game.state.states.get("DinoDig").walkSpeed = 69;
}).setDisabled(async () => {
	_.instance.game.state.states.get("DinoDig").walkSpeed = 1.5;
});
