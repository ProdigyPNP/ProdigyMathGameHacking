// Miscellaneous Hacks



// BEGIN IMPORTS
import { Toast, Confirm, Swal } from "../utils/swal"; // Import Toast and Confirm from swal
import { category } from "../index";  // Import the Cheat GUI bases.
import Toggler from "../class/Toggler";
import Hack from "../class/Hack";
import { current, player, _ } from "../utils/util"; // Import Prodigy typings
import { startFps, stopFps } from "../utils/fps";
// END IMPORTS


// BEGIN MISCELLANEOUS HACKS




// Begin FPS Counter
new Toggler(category.beta, "FPS Counter [BETA]", "Shows you a framerate counter").setEnabled(async () => {
    startFps();
}).setDisabled(async() => {
    stopFps();
});
// End FPS Counter


// Begin Unlimited Spins
try {
	const canSpinBackup = current.user.source.canSpin;
	new Toggler(category.misc, "Unlimited Spins", "Lets you spin the wheel as many times as you want!").setEnabled(async () => {
		player.canSpin = (() => { true; });
		return Toast.fire("Enabled!", "You can now spin the wheel as many times as you want!", "success");
	}).setDisabled(async() => {
		player.canSpin = canSpinBackup;
		return Toast.fire("Disabled!", "You can now spin the wheel only when allowed.", "success");
	});
	// End Unlimited Spins
} catch (error : unknown) {
	console.error("Unlimited Spins ERROR: " + error);
}


// Begin Bobbify
new Hack(category.misc, "Bobbify", "Converts your account into Bobby Fancywoman.").setClick(async () => {
	if (!(
		await Confirm.fire("Are you sure you want your account to be turned into Bobby Fancywoman?", "This action is not reversable.")
	).value) return;

	player.name.data.nickname = null;
	player.name.data.firstName = 44;
	player.name.data.middleName = 754;
	player.name.data.lastName = 882;
	player.data.stars = -1e22;
	player.data.level = 69;

	player.appearance.setGender("male");
	player.appearance.setEyeColor(1);
	player.appearance.setFace(4);
	player.appearance.setHair(19, 1);
	player.appearance.setSkinColor(1);
	player.equipment.setFollow(19);
	player.equipment.setHat(19);
	player.equipment.setBoots(19);
	player.equipment.setOutfit(19);
	player.equipment.setWeapon(19);

	return Toast.fire("Bobbified!", "You are now Bobby Fancywoman.", "success");
});
// End Bobbify



// Begin Reset Account
new Hack(category.misc, "Reset Account", "Completely resets your account.").setClick(async () => {
	if (!(await Confirm.fire("Are you sure you want to reset your account?", "This action is not reversible.")).value) return;
	player.resetAccount();
	return Swal.fire("Reset!", "Your account has been reset. Reload Prodigy for the full effect.", "success");
});
// End Reset Account





// Begin Chat Spammer
let retard: unknown | null = null;
let i : number = 0;

new Hack(category.misc, "Chat Spammer", "Cycles through chat messages pretty fast!").setClick(async () => {

	if (retard) {
        return Swal.fire("Already Enabled", "Chat Spammer is already enabled. To disable chat spammer, reload Prodigy.","error");
    } else {


	    retard = setInterval(async () => {

		    player.chatID = i;
		    i++;

		    if (i > 1164) {
			    i = 0;
		    }

	    }, 90);

	    return Toast.fire("Spamming!", "You're now sending a chat message every 90 milliseconds!", "success");

	}



});
// End Chat Spammer






// Begin High Chat Spammer
let retards: unknown | null = null;
let c : number = 0;

new Hack(category.misc, "High Chat Spammer", "Cycles through chat messages hella fast!").setClick(async () => {

	if (retards) {
	    return Swal.fire("Already Enabled", "High Chat Spammer is already enabled. To disable chat spammer, reload Prodigy.", "error")

    }
    else if (!(await Confirm.fire("Warning", "This hack may cause lag on weak computers (ex. School Chromebooks).")).value) {
			   return console.log("Cancelled");

	} else {

	    retards = setInterval(async () => {

    		    player.chatID = c;
    		    c++;

    		    if (c > 1164) {
    			    c = 0;
    		    }

    	}, 30);

        return Toast.fire("Spamming!", "You're now sending a chat message every 30 milliseconds!", "success");


	}







});
// End High Chat Spammer







// Begin Chat Spammer on Meth
let retarded: unknown | null = null;
let b : number = 0;

new Hack(category.misc, "Chat Spammer on Meth", "Cycles through chat messages FAST ASF!").setClick(async () => {

	if (retarded) {
	    return Swal.fire("Already Enabled", "Chat Spammer on Meth is already enabled. To disable chat spammer, reload Prodigy.", "error")
	}
    else if (!(await Confirm.fire("Warning", "This hack may cause lag on weak computers (ex. School Chromebooks).")).value) {
	    return console.log("Cancelled");

	} else {

	    retarded = setInterval(async () => {

    		player.chatID = b;
    		b++;

    		if (b > 1164) {
    			b = 0;
    		}

    	}, 1);

        return Toast.fire("Spamming!", "You're now sending a chat message every 1 millisecond!", "success");

	}



});
// End Chat Spammer on Meth



// Begin Fix Battle Crash
new Hack(category.misc, "[Fix] Fix Battle Crash").setClick(async () => {
	// @ts-expect-error
	player.kennel.petTeam.forEach(v => {
		if (v && (v as any).assignRandomSpells) (v as any).assignRandomSpells();
	});

	return Toast.fire("Success!", "Fixed kennel attack bug!", "success");
});
// End Fix Battle Crash











// END MISCELLANEOUS HACKS
