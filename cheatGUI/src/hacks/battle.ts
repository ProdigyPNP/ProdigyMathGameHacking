// Battle Hacks



// BEGIN IMPORTS
import { Toast, NumberInput } from "../utils/swal"; // Import Toast and NumberInput from swal
import { Hack, category, Toggler } from "../index"; // Import the Cheat GUI bases.
import { _, prodigy, game, VERY_LARGE_NUMBER } from "../utils/util"; // Import prodigy typings
// END IMPORTS



// BEGIN BATTLE HACKS



// Begin Disable Math
new Toggler(category.battle, "Disable math [PvP, PvE]", "Disable math in PvP, PvE, anywhere! This doesn't work in the Floatling town.").setEnabled(async () => {

    // Use Prodigy's debug stuff to set EDUCATION_ENABLED to false
    _.constants.constants["GameConstants.Debug.EDUCATION_ENABLED"] = false;
    return Toast.fire("Enabled!", "You will no longer do Math!", "success");


}).setDisabled(async () => {

    // Use Prodigy's debug stuff to set EDUCATION_ENABLED to true
    _.constants.constants["GameConstants.Debug.EDUCATION_ENABLED"] = true;
    return Toast.fire("Disabled!", "You will now do Math!", "success");

});
// End Disable Math






// Begin Instant Kill
new Toggler(category.battle, "Instant Kill [PvE]", "Makes your spells do insane damage in PvE!").setEnabled(async () => {
    _.player.modifiers.damage = VERY_LARGE_NUMBER;
    return Toast.fire("Enabled!", "You will now do insane damage in PvE!", "success");

}).setDisabled(() => {
    _.player.modifiers.damage = 1;
    return Toast.fire("Disabled!", "You will no longer do insane damage in PvE!", "success");
});
// End Instant Kill






// Begin PvP Health
new Hack(category.battle, "PvP Health [PvP]", "Increases your HP in PvP by a hell ton.").setClick(async () => {
    _.player.pvpHP = VERY_LARGE_NUMBER;
    _.player.getMaxHearts = () => VERY_LARGE_NUMBER;
    return Toast.fire("Success!", "You now have lots of health!", "success");
});
// End PvP Health






// Begin Escape Battle
new Hack(category.battle, "Escape Battle [PvP, PvE]", "Escape any battle, PvP or PvE!").setClick(async () => {
    const currentState = game.state.current;
    if (currentState === "PVP") {
        Object.fromEntries(_.instance.game.state.states).PVP.endPVP();
        return Toast.fire(
            "Escaped!",
            "You have successfully escaped from the PvP battle.",
            "success"
        );
    } else if (currentState === "CoOp") {
        prodigy.world.$(_.player.data.zone);
        return Toast.fire(
            "Escaped!",
            "You have successfully escaped from the battle.",
            "success"
        );
    } else if (!["Battle", "SecureBattle"].includes(currentState)) {
        return Toast.fire(
            "Invalid State.",
            "You are currently not in a battle.",
            "error"
        );
    } else {
        Object.fromEntries(_.instance.game.state.states)[currentState].runAwayCallback();
        return Toast.fire(
            "Escaped!",
            "You have successfully escaped from the PvE battle.",
            "success"
        );
    }
});
// End Escape Battle





// Begin Win Battle
new Hack(category.battle, "Win Battle [PvE]", "Instantly win a battle in PvE.").setClick(async () => {
    const currentState = game.state.current;
    console.log("Current State: " + currentState);

    if (currentState === "PVP" || currentState === "CoOp") {
        return Toast.fire(
            "Invalid State.",
            "PvP is not supported for this hack.",
            "error"
        );
    } else if (currentState === "Battle") {
        Object.fromEntries(_.instance.game.state.states).Battle.startVictory();
        return Toast.fire(
            "Victory!",
            "You have successfully won the battle.",
            "success"
        );
    } else if (currentState === "SecureBattle") {
        Object.fromEntries(_.instance.game.state.states).SecureBattle.battleVictory();
        return Toast.fire(
            "Victory!",
            "You have successfully won the battle.",
            "success"
        );
    } else {
        return Toast.fire(
            "Invalid State.",
            "You are currently not in a battle.",
            "error"
        );
    }
});
// End Win Battle






// Begin Set Battle Hearts
new Hack(category.battle, "Set Battle Hearts [PvP, PvE]", "Sets your hearts in battle, automatically raise your max hearts in PvP or PvE.").setClick(async () => {
    const hp = await NumberInput.fire("Health Amount", "How much HP do you want?", "question");
    if (hp.value === undefined) return;
    _.player.getMaxHearts = () => +hp.value;
    _.player.pvpHP = +hp.value;
    _.player.data.hp = +hp.value;
    return Toast.fire("Success!", "Your hearts have been set.", "success");
});
// End Set Battle Hearts





// Begin Fill Battle Energy
new Hack(category.battle, "Fill Battle Energy [PvP, PvE]", "Fills up your battle energy, if you are in PvP or PvE.").setClick(async () => {
    const state = game.state.getCurrentState();
    if (!("teams" in state)) return Toast.fire("Error", "You are currently not in a battle.", "error");
    state.teams[0].setEnergy(99);
    return Toast.fire("Success!", "Your battle energy has been filled.", "success");
});
// End Fill Battle Energy






// Begin Heal Team
new Hack(category.battle, "Heal Team [PvE]", "Instantly heals you and your pets, if you are in PvE.").setClick(async () => {


    const currentState: string = game.state.current;


    if (currentState === "PVP" || currentState === "CoOp") {

        return Toast.fire("Invalid State.", "PvP is not supported for this hack.", "error");

    } else if (["Battle", "SecureBattle"].includes(currentState)) {
        _.player.heal();
        return Toast.fire("Success!", "Your team has been healed successfully!", "success");
    } else {
        return Toast.fire("Invalid State.", "Your are currently not in a battle.", "error");
    }
});
// End Heal Team



// END BATTLE HACKS
