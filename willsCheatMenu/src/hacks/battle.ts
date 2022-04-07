import { Toast, NumberInput } from "../utils/swal";
import { Hack, category, Toggler } from "../index";
import { _, prodigy, game } from "../utils/util";

new Toggler(category.battle, "Disable math").setEnabled(async () => {
	_.constants.constants["GameConstants.Debug.EDUCATION_ENABLED"] = false;
}).setDisabled(async () => {
	_.constants.constants["GameConstants.Debug.EDUCATION_ENABLED"] = true;
});

new Hack(category.battle, "Escape Battle", "Escape any battle!").setClick(async () => {
	const currentState = game.state.current;
	if (currentState === "PVP") Object.fromEntries(_.instance.game.state.states).PVP.endPVP();
	else if (currentState === "CoOp") prodigy.world.$(_.player.data.zone);
	else if (!["Battle", "SecureBattle"].includes(currentState)) {
		Toast.fire(
			"Invalid State.",
			"You are currently not in a battle.",
			"error"
		);
	} else {
		Object.fromEntries(_.instance.game.state.states)[currentState].runAwayCallback();
		Toast.fire(
			"Escaped!",
			"You have successfully escaped from the battle.",
			"success"
		);
	}
});

new Hack(category.battle, "Win Battle", "Instantly win a monster battle.").setClick(async () => {
	const currentState = game.state.current;
	if (currentState === "PVP" || currentState === "CoOp") {
		return Toast.fire(
			"Invalid State.",
			"PVP is not supported for this hack.",
			"error"
		);
	} else if (currentState === "Battle") {
		Object.fromEntries(_.instance.game.state.states).Battle.startVictory();
		Toast.fire(
			"Victory!",
			"You have successfully won the battle.",
			"success"
		);
	} else if (currentState === "SecureBattle") {
		Object.fromEntries(_.instance.game.state.states).SecureBattle.battleVictory();
		Toast.fire(
			"Victory!",
			"You have successfully won the battle.",
			"success"
		);
	} else {
		Toast.fire(
			"Invalid State.",
			"You are currently not in a battle.",
			"error"
		);
	}
});

new Hack(category.battle, "Set Battle Hearts", "Sets your hearts in battle. Automatically raises max hearts.").setClick(async () => {
	const hp = await NumberInput.fire("Health Amount", "How much HP do you want?", "question");
	if (hp.value === undefined) return;
	_.player.getMaxHearts = () => +hp.value;
	_.player.pvpHP = +hp.value;
	_.player.data.hp = +hp.value;
	Toast.fire("Success!", "Your hearts have been set.", "success");
});
new Hack(category.battle, "Fill Battle Energy", "Fills up your battle energy.").setClick(async () => {
	const state = game.state.getCurrentState();
	if (!("teams" in state)) return Toast.fire("Error", "You are currently not in a battle.", "error");
	state.teams[0].setEnergy(99);
	Toast.fire("Success!", "Your battle energy has been filled.", "success");
});

new Hack(category.battle, "Heal Team").setClick(async () => {
	const currentState = game.state.current;
	if (["Battle", "SecureBattle"].includes(currentState)) {
		_.player.heal();
		Toast.fire(
			"Success!",
			"Your team has been healed successfully!",
			"success"
		);
	} else {
		Toast.fire(
			"Invalid State.",
			"Your are currently not in a battle.",
			"error"
		);
	}
});
