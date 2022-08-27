// Miscellaneous Hacks



// BEGIN IMPORTS
import { Toast, Confirm, Swal } from "../utils/swal"; // Import Toast and Confirm from swal
import { Hack, category, Toggler } from "../index";  // Import the Cheat GUI bases.
import { current, player, _ } from "../utils/util"; // Import Prodigy typings
import { startFps, stopFps } from "../utils/fps";
// END IMPORTS


// BEGIN MISCELLANEOUS HACKS



// Begin Skip Tutorial
new Hack(category.misc, "Skip Tutorial").setClick(async () => {
	const setQuest = (t: string, i: number, n?: unknown, e?: unknown) => {
		_.instance.prodigy.world.getZone(t).testQuest(i, n, e);
		try {
			Object.fromEntries(_.instance.game.state.states).TileScreen.process();
		} catch {}
	};

	setQuest("house", 2);
	setQuest("academy", 2);
	player.state.set("tutorial-0", 4);
	player.backpack.addKeyItem(13, 0);
	player.tutorial.data.menus[14] = [1];
	_.instance.prodigy.open.map(true, []);
	player.onTutorialComplete();
	player.data.level = Math.max(player.data.level, 5);
});
// End Skip Tutorial



// Begin Disable Monster Encounters
new Toggler(category.misc, "Disable Monster Encounters").setEnabled(async () => {
	_.constants.constants["GameConstants.Debug.SCALE_ENCOUNTER_DISTANCE"] = 0;
	return Toast.fire("Enabled!", "Monsters will no longer battle you.", "success");

}).setDisabled(() => {
	_.constants.constants["GameConstants.Debug.SCALE_ENCOUNTER_DISTANCE"] = 1;
	return Toast.fire("Disabled!", "Monsters will now battle you.", "success");
});
// End Disable Monster Encounters



// Begin Skip enemy turn
new Toggler(category.misc, "Skip enemy turn").setEnabled(async () => {
	_.constants.constants["GameConstants.Battle.SKIP_ENEMY_TURN"] = true;
	return Toast.fire("Skipping!", "Enemy turns will now be skipped.", "success");


}).setDisabled(() => {
	_.constants.constants["GameConstants.Battle.SKIP_ENEMY_TURN"] = false;
	return Toast.fire("Disabled", "Enemy turns will no longer be skipped.", "success");
});
// End Skip enemy turn


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



// Begin Stuck in Unfinished Tower Fix
new Hack(category.misc, "[Fix] Stuck in Unfinished Tower Fix", "Takes you out of an unfinished tower if you're stuck in one.").setClick(async () => {
	_.instance.prodigy.world.zones["house"].teleport("exit");
	return Toast.fire("Success!", "You've been teleported outside of your house.", "success");
});
// End Stuck in Unfinished Tower Fix




// Begin uwu
new Hack(category.misc, "uwu", "OwO").setClick(async () => {

	if (!(
		await Confirm.fire("Are you sure that you want to UwU OwO?", "Reload Prodigy to revert UwU.")
	).value) return console.log("uwu cancelled");

	// @ts-ignore
	// eslint-disable-next-line
	Object.chance = t => { const e = {}; let r = 0; for (const n of Object.keys(t).sort((t, r) => e[t] - e[r]))e[n] = [], e[n][0] = r + 1, e[n][1] = t[n] + r, r = t[n] + r; return e; }, Object.random = t => { const e = Object.values(t); const r = e[e.length - 1][1]; const n = Math.randint(r); return Object.reverse(t)[e.find(t => n >= t[0] && n <= t[1])]; }, Array.prototype.join = function (t = ",") { return typeof t === "string" ? this.reduce((e, r, n, o) => e + (n < this.length - 1 ? r + t : r), "") : t instanceof Function ? this.reduce((e, r, n, o) => e + (n < this.length - 1 ? r + t(o[n], n, o) : r), "") : void 0; }, Array.prototype.leftJoin = function (t = ",") { return typeof t === "string" ? this.reduce((e, r, n) => e + (n ? t + r : r), "") : t instanceof Function ? this.reduce((e, r, n, o) => e + (n ? t(o[n], n, o) + r : r), "") : void 0; }, String.UWUFX = t => { const e = Object.chance({ "owo :3": 20, "✧w✧": 20, UwU: 20, OwO: 10, rawr: 10, "uwu :3": 5, ":3 meow": 15, ":3": 15, X3: 15, "*purrs*": 15, owo: 15, uwu: 15, "^w^": 15, "x3 rawr": 15, owowowowo: 15 }); return t.split(" ").leftJoin((t, e) => Math.floor(6 * Math.random()) === 0 && /[A-Za-z]/.test(t[0]) ? ` ${t[0]}-` : " ").split(" ").join((t, r) => Math.floor(5 * Math.random()) === 0 ? ` ${Object.random(e)} ` : " "); }, String.UWUTable = { y: "wy", l: "w", r: "w", ss: "zs", n: "nw", ove: "uv", ome: "um", x: "ks", com: "cum", stu: "stew", au: "aw" }, Math.randint = (t, e = 0) => Math.floor(Math.random() * t - e) + e, String.prototype.escapeRegex = function () { return this.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }, String.prototype.replaceAll = function (t, e) { return this.replace(new RegExp(t.toString().escapeRegex(), "gi"), t => e); }, Object.fromArrays = (t, e) => { const r = {}; return t.forEach((t, n) => { r[t] = e[n]; }), r; }, Object.reverse = t => Object.fromArrays(Object.values(t), Object.keys(t)), String.prototype.bulkReplace = function (t) { let e = this; for (const r in t)e = e.replaceAll(r, t[r]); return e; }, String.UWU = t => String(t).bulkReplace(String.UWUTable); Object.keys(_.localizer.dataSource._languageData).map(x => _.localizer.dataSource._languageData[x] = String.UWUFX(String.UWU(_.localizer.dataSource._languageData[x]))); Object.values(_.gameData).map(x => x.map(y => [y.data.name && (y.data.name = String.UWUFX(String.UWU(y.data.name))), y.name && (y.name = String.UWUFX(String.UWU(y.name))), y.data.flavorText && (y.data.flavorText = String.UWUFX(String.UWU(y.data.flavorText)))]));
	return Toast.fire("uwu", "Reload Prodigy to fix uwu.", "success");
});
// End uwu





// END MISCELLANEOUS HACKS
