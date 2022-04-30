// @ts-nocheck
// Player Hacks


// BEGIN IMPORTS
import { Swal, Toast, NumberInput, Input, Confirm } from "../utils/swal"; // Import Swal, Toast, Confirm, Input, and NumberInput from swal
import { Hack, category, Toggler } from "../index"; // Import the Cheat GUI bases.
import { _, getItem, VERY_LARGE_NUMBER, prodigy, game, saveCharacter} from "../utils/util";  // Import Prodigy typings and VERY_LARGE_NUMBER
import { Item } from "../../../typings/item";  // Import Prodigy Item typings
import { TODO } from "../../../typings/util"; // Import Prodigy Util typings
// END IMPORTS



// BEGIN PLAYER HACKS


// Begin Max Account
new Hack(category.player, "Max Account").setClick(async () => {
	// max account made by gemsvidø

	// ============================================
	// PRE MAXING PROCESS



	 if (!(
			await Confirm.fire("Are you sure that you want to max your account?", "We recommend doing this on an alt.")
	).value) {
	console.log("Cancelled");
	return;
	}



	// FIRST, Escape any battle to prevent random glitching.
	const currentState = game.state.current;
		if (currentState === "PVP") Object.fromEntries(_.instance.game.state.states).PVP.endPVP();
		else if (currentState === "CoOp") prodigy.world.$(_.player.data.zone);
		else if (!["Battle", "SecureBattle"].includes(currentState)) {
		} else {
			Object.fromEntries(_.instance.game.state.states)[currentState].runAwayCallback();
		}
	console.log("Escaped any battle.");


	// NOW, fix the morph crash bug
	_.player.getPlayerData().playerTransformation = undefined;
	_.player.appearanceChanged = true;
	console.log("Fixed morph crash");


	// ALSO, fix the battle crash bug
	_.player.kennel.petTeam.forEach((v: any) => {
		if (v && (v as any).assignRandomSpells) (v as any).assignRandomSpells();
	});
	console.log("Fixed battle crash.")

	// PRE MAXING PROCESS
	// ============================================
	// ============================================
	// PLAYER HACKS

	// Set the players gold to 09900000
	_.player.data.gold = 9900000;
	console.log("Set player gold to 9900000.")


	// Set the players level to 100
	const level = 100;
		const h = level.value - 2;
		const xpConstant = 1.042;
		_.player.data.stars = Math.round((1 - Math.pow(xpConstant, h)) / (1 - xpConstant) * 20 + 10);
		_.player.data.level = 100;
		_.player.getLevel = () => { return _.player.data.level; };
	console.log("Set player level to 100");


	// Set the players bounty points to 100 (max)
	_.player.data.bountyScore = 100;
	console.log("Set player's bounty points to 100.");


	// Set the players conjure cubes to 100 (max)
	for (let i = 0; i < Math.min(99, 100); i++) { prodigy.giftBoxController.receiveGiftBox(null, getItem("giftBox", 1)); }
	console.log("Obtained 100 conjure cubes.");


	// Set the player's wins to VERY_LARGE_NUMBER
	_.player.data.win = VERY_LARGE_NUMBER;
	console.log("Set player's wins to VERY_LARGE_NUMBER");


	// Set the player's losses to -9223372036854775808 (Java long limit, ik its irrelevant)
	_.player.data.loss = -9223372036854775808;
	console.log("Set player's losses to -9223372036854775808.");



	// Set the players damage multiplier to VERY_LARGE_NUMBER
	_.player.modifiers.damage = VERY_LARGE_NUMBER;
	console.log("Enabled damage multiplier.");


	// Set the players PVP health to VERY_LARGE_NUMBER
	_.player.pvpHP = VERY_LARGE_NUMBER;
	_.player.getMaxHearts = () => VERY_LARGE_NUMBER;
	console.log("PvP health obtained.")


	// Enable premium membership
	function getMemberModule () { return _.player.hasMembership.toString().split("\"")[1]; }
	_.instance.prodigy.gameContainer.get(getMemberModule()).data.membership.active = true;
	_.player.appearanceChanged = true;
	console.log("Premium membership enabled.");


	// Get all achievements
	for (var i = 0; i < 100; i ++) {
		_.player.achievements.data.progress[i] = 10;
	}
	console.log("Obtained all achievements.");

	// Set the players dark tower floor to 100
	_.player.data.tower = 100;
	console.log("Set tower floor to 100.");

	// PLAYER HACKS
	// ============================================
	// ============================================
	// BATTLE HACKS



	// Disable Math
	_.constants.constants["GameConstants.Debug.EDUCATION_ENABLED"] = false;
	console.log("Math Disabled.");

	// Max out the players HP
	_.player.getMaxHearts = () => VERY_LARGE_NUMBER;
	_.player.pvpHP = VERY_LARGE_NUMBER;
	_.player.data.hp = VERY_LARGE_NUMBER;
	console.log("Maxed out PvE health.");


	// BATTLE HACKS
	// ============================================
	// ============================================
	// INVENTORY HACKS


	// load sum typings and stuff
	const names = ["Boots", "Buddies", "Fossils", "Hats", "Items", "Key Items", "Tower Town Frames", "Tower Town Interiors", "Mounts", "Outfits", "Relics", "Weapons", "Currencies"];
	const ids = ["boots", "follow", "fossil", "hat", "item", "key", "mathTownFrame", "mathTownInterior", "mount", "outfit", "spellRelic", "weapon", "currency"];
	const itemify = (item: Item[], amount: number) =>
		item.map(x => ({
			ID: x.ID,
			N: amount
		})).filter(v => v !== undefined);


	// Get 990000 of all items
	const num = 990000;

		ids.forEach(id => {
			_.player.backpack.data[id] = itemify(_.gameData[id].filter(l => id === "follow" ? ![125,126,127,128,129,134,135,136,137].includes(l.ID) : l), num.value);
		});
		_.gameData.dorm.forEach(x =>
			_.player.house.data.items[x.ID] = { A: [], N: num.value }
		);

		// Remove bounty notes
		const bountyIndex = () => _.player.backpack.data.item.findIndex(v => v.ID === 84 || v.ID === 85 || v.ID === 86);
		while (bountyIndex() > -1) _.player.backpack.data.item.splice(bountyIndex(), 1);
		Toast.fire("Success!", "All items added!", "success");

	console.log("All items added!");



	// Get all Mounts
	_.player.backpack.data.mount = itemify(_.gameData.mount, 1);
	console.log("Added all mounts.");


	// Get 990000 of all furniture
	const amt = 990000;
		_.gameData.dorm.forEach(x =>
			_.player.house.data.items[x.ID] = { A: [], N: amt.value }
		);
	console.log("Added 990000 of all furniture.");


	// INVENTORY HACKS
	// ============================================
	// ============================================
	// PET HACKS


	// Get All Pets

		// add pets
		_.gameData.pet.forEach(x => {
			_.player.kennel.addPet(x.ID.toString(), VERY_LARGE_NUMBER, 26376, 100);
		});

		// add encounter info
		_.player.kennel._encounterInfo._data.pets = [];
		_.gameData.pet.map((pet: {ID: number}) => {
			_.player.kennel._encounterInfo._data.pets.push({
				firstSeenDate: Date.now(),
				ID: pet.ID,
				timesBattled: 1,
				timesRescued: 1
			});
		});
		// Fix broken pets
		_.player.kennel.petTeam.forEach((v: any) => {
			if (v && (v as any).assignRandomSpells) (v as any).assignRandomSpells();
		});
		console.log("Added all pets.");




	// PET HACKS
	// ============================================
	// ============================================
	// UTILITY HACKS




	// 20x walkspeed
	_.player._playerContainer.walkSpeed = 20;
	console.log("Player walkspeed set to 20.");


	// UTILITY HACKS
	// ============================================
	// ============================================
	// EQUIP CELESTIAL GEAR



	_.player.equipment.setHat(200);
	_.player.equipment.setBoots(93);
	_.player.equipment.setOutfit(161);
	_.player.equipment.setWeapon(196);




	// EQUIP CELESTIAL GEAR
	// ============================================
	// ============================================
	// POST MAXING PROCESS


	// Save the player data to make sure that the max worked
	saveCharacter();
	console.log("Character Saved.");

	// Refresh the players appearance
	_.player.appearanceChanged = true;
	console.log("Appearance Refreshed.");


	// Close all popups
	_.instance.prodigy.open.menuCloseAll();
	console.log("Popups closed.");

	// Save again after closing popups, for good measure.
	saveCharacter();
	console.log("Character Saved.");


	// POST MAXING PROCESS
	// ============================================
	console.log("Max Account Successful.");

	Toast.fire("Maxed!", `Check your backpack!`, "success");
});
// End Max Account





// Begin Set Gold
new Hack(category.player, "Set Gold").setClick(async () => {
	const gold = await NumberInput.fire("Gold Amount", "What number do you want to set your gold to?", "question");
	if (gold.value === undefined) return;
	if (gold.value > 10000000) return Toast.fire("Error", "Cannot have more than 10,000,000 gold.", "error");
	_.player.data.gold = +gold.value;
	Toast.fire("Success!", `You now have ${gold.value} gold.`, "success");
});
// End Set Gold




// Begin Set Level
new Hack(category.player, "Set Level").setClick(async () => {
	const level = await NumberInput.fire("Level", "What number do you want to set your level to?", "question");
	if (level.value === undefined) return;

	// calculate how many stars the level *should* have
	// from 3-16-1.js:8382
	if (level.value === 1) return 0;
	const i = level.value - 2;
	// xpConstant from 3-16-1.js:8528
	const xpConstant = 1.042;
	_.player.data.stars = Math.round((1 - Math.pow(xpConstant, i)) / (1 - xpConstant) * 20 + 10);
	_.player.data.level = +level.value;
	_.player.getLevel = () => { return _.player.data.level; };

	Toast.fire("Success!", `You are now level ${level.value}.`, "success");
});
// End Set Level




// Begin Get member stars
new Hack(category.player, "Get member stars").setClick(async () => {
	const amount = await NumberInput.fire("Stars", "How many member stars do you want?", "question");
	if (amount.value === undefined) return;
	_.player.data.storedMemberStars = amount.value;
	Toast.fire("Success!", `You have set your member stars to ${amount.value}.`, "success");
});
// End Get member stars




// Begin Set bounty points
new Hack(category.player, "Set Bounty Points").setClick(async () => {
	const points = await NumberInput.fire(
		"Bounty Points",
		"What number do you want to set your bounty points to? (Max is 100)",
		"question"
	);
	if (points.value === undefined) return;
	_.player.data.bountyScore = Math.min(+points.value, 100);
	Toast.fire("Success!", `You now have ${_.player.data.bountyScore} bounty point${_.player.data.bountyScore != 1 ? "s" : ""}.`, "success");
});
// End Set bounty points




// Begin Obtain Conjure Cubes
new Hack(category.player, "Obtain Conjure Cubes").setClick(async () => {
	const cubes = await NumberInput.fire("Conjure Cubes", "How many conjure cubes do you want to get? (Max 99)", "question");
	if (cubes.value === undefined) return;
	for (let i = 0; i < Math.min(99, +cubes.value); i++) { prodigy.giftBoxController.receiveGiftBox(null, getItem("giftBox", 1)); }
	Toast.fire("Success!", `You have gained ${cubes.value} conjure cube${cubes.value != 1 ? "s" : ""}.`, "success");
});
// End Obtain Conjure Cubes




// Begin Set Wins
new Hack(category.player, "Set Wins").setClick(async () => {
	const amount = await NumberInput.fire("Wins", "What number do you want to set your wins to?", "question");
	if (amount.value === undefined) return;
	_.player.data.win = +amount.value;
	Toast.fire("Success!", `You have set your win${amount.value != 1 ? "s" : ""} to ${amount.value}.`, "success");
});
// End Set Wins




// Begin Set Losses
new Hack(category.player, "Set Losses").setClick(async () => {
	const amount = await NumberInput.fire("Losses", "What number do you want to set your losses to?", "question");
	if (amount.value === undefined) return;
	_.player.data.loss = +amount.value;
	Toast.fire("Success!", `You have set your loss${amount.value != 1 ? "es" : ""} to ${amount.value}.`, "success");
});
// End Set Losses




// Begin Instant Kill
new Toggler(category.player, "Instant Kill").setEnabled(async () => {
	_.player.modifiers.damage = VERY_LARGE_NUMBER;
}).setDisabled(() => {
	_.player.modifiers.damage = 1;
});
// End Instant Kill




// Begin PvP Health
new Hack(category.player, "PvP Health").setClick(async () => {
	_.player.pvpHP = VERY_LARGE_NUMBER;
	_.player.getMaxHearts = () => VERY_LARGE_NUMBER;
	Toast.fire("Success!", "You now have lots of health!", "success");
});
// End PvP Health




// Begin Toggle membership
new Toggler(category.player, "Toggle membership").setEnabled(async () => {
	function getMemberModule () { return _.player.hasMembership.toString().split("\"")[1]; }
	_.instance.prodigy.gameContainer.get(getMemberModule()).data.membership.active = true;
	_.player.appearanceChanged = true;
}).setDisabled(() => {
	function getMemberModule () { return _.player.hasMembership.toString().split("\"")[1]; }
	_.instance.prodigy.gameContainer.get(getMemberModule()).data.membership.active = false;
	_.player.appearanceChanged = true;
});
// End Toggle membership




// Begin Set Name (Client Side only)
new Hack(category.player, "Set name (Client side only)").setClick(async () => {
	const name = await Input.fire("What would you like to set your name to?");
	if (!name.value) return;
	_.player.getName = () => { return name.value; };
	Toast.fire("Changed!", "Your name was changed.");
});
// End Set Name (Client Side only)




// Begin Change Name
new Hack(category.player, "Change Name", "Change the name of your wizard.").setClick(async () => {
	const names = _.gameData.name;
	const div = document.createElement("div");
	const createSelect = (arr: Map<string, string>, equalityFunc: (str: string) => boolean) => {
		const select = document.createElement("select");
		select.classList.add("selectName");
		for (const opt of arr.entries()) {
			const optt = document.createElement("option");
			[optt.value, optt.innerText] = opt;

			if (equalityFunc(optt.value)) optt.selected = true;
			select.options.add(optt);
		}
		return select;
	};
	const nameSelect = (type: number, equalityFunc: (num: number) => boolean) =>
		createSelect(new Map(
			names.filter(x => x.data.type === type).map(x => [x.ID.toString(), x.name])),
		val => equalityFunc(+val)
		);
	div.append(nameSelect(0, x => x === _.player.name.data.firstName));
	div.append(nameSelect(1, x => x === _.player.name.data.middleName));
	div.append(nameSelect(2, x => x === _.player.name.data.lastName));
	div.append(
		createSelect(
			new Map(
				[["null", "[none]"]].concat(_.gameData.nickname.map(x => [x.ID.toString(), x.name])) as [
					string,
					string
				][]
			),
			x => +x === _.player.name.data.nickname || String(_.player.name.data.nickname) === x
		)
	);
	const name = await Swal.fire({
		title: "Set Player Name",
		focusConfirm: false,
		showCancelButton: true,
		html: div,
		preConfirm: () => {
			return Array.prototype.slice
				.call(document.querySelectorAll(".selectName"))
				.map((x: HTMLSelectElement) => x.options[x.selectedIndex].value);
		}
	});
	if (name.value === undefined) return;
	if (name.value[3] === "null") name.value[3] = null;
	[
		_.player.name.data.firstName,
		_.player.name.data.middleName,
		_.player.name.data.lastName,
		_.player.name.data.nickname
	] = (name.value as string[]).map(x => ((x as unknown) as number) && +x);
	Toast.fire("Name Changed!", "Your name was successfully changed.", "success");
});
// End Change Name



// Begin Uncap player level
new Hack(category.player, "Uncap player level (client side only)").setClick(async () => {
	const level = await NumberInput.fire("Level", "What would you like to set your level to? (Can be >100)", "question");
	if (!level.value) return;
	localStorage.setItem("level", level.value);
	eval(`_.player.getLevel = () => {return ${level.value}}`);
	Toast.fire("Updated!", "Your level has been successfully updated", "success");
});
// End Uncap player level



// Begin get all achivements
new Hack(category.player, "Get all achievements").setClick(async () => {
for (var i = 0; i < 100; i ++) {
	_.player.achievements.data.progress[i] = 10;
}

	Toast.fire("Success!", "Obtained all achievements!", "success");
});
// End get all achivements



// Begin Fix Morph Crash
new Hack(category.player, "Fix Morph Crash").setClick(async () => {
	_.player.getPlayerData().playerTransformation = undefined;
	_.player.appearanceChanged = true;

	Toast.fire("Success!", "Fixed morph crash bug.", "success");
});
// End Fix Morph Crash



// Begin Permanent Morph
new Hack(category.player, "Permanent Morph", "Makes Your Current Morph Last Forever.").setClick(async () => {
	if (!_.player.data.playerTransformation) {
		await Swal.fire("No Morph Active", "Please use a Morph Marble and try again.", "error");
		return;
	}
	_.player.data.playerTransformation.maxTime = Infinity;
	_.player.data.playerTransformation.timeRemaining = Infinity;
	Toast.fire("Success!", "You're morph will last forever!", "success");
});
// End Permanent Morph



// Begin Complete Current Task in Quest
new Hack(category.player, "Complete Current Task In Quest", "Completes current task in quest. (Use this button a lot to complete a quest.)").setClick(async () => {
	const zones = {};
	Object.keys(_.instance.prodigy.world.zones).forEach(element => {
		zones[element] = _.instance.prodigy.world.zones[element].name;
	});
	const questName = (await Input.fire({
		title: "What Quest Do You Want To Complete?",
		input: "select",
		inputOptions: zones
	})).value;
	if (!questName) return;
	const questID = _.instance.prodigy.world.zones[questName].getCurrentQuestID();
	if (_.instance.prodigy.world.zones[questName].completeQuest(questID)) {
		_.instance.prodigy.world.goToZoneHub(questName);
		Toast.fire("Success!", `Completed current task in the ${_.instance.prodigy.world.zones[questName].name} quest successfully!`, "success");
	} else {
		Toast.fire("Could Not Complete Current Task In Quest.", "There was an error completing the quest. Did you already complete it?", "error");
	}
});
// End Complete Current Task in Quest



// Begin Set Dark Tower Floor
new Hack(category.player, "Set Dark Tower Floor").setClick(async () => {
	const floor = await NumberInput.fire({
		title: "What floor do you want to be on, in the dark tower.",
		icon: "question",
		inputValidator: (res) => (res > 100 || res < 1) ? `You can only be on floors from 1-100 not ${res}` : false
	});
	if (!floor.value) return;
	_.player.data.tower = parseInt(floor.value);
	Toast.fire("Success!", `Successfully set dark tower floor to ${floor}!`, "success");
});
// End Set Dark Tower Floor



// Begin Get UserID
new Hack(category.player, "Get UserID").setClick(async () => {
	Swal.fire({
		title: "User ID",
		html: `Here is your User ID: <br> <code> ${_.player.userID} </code> <br> You can use this for copying your account.`,
		icon: "info"
	});
});
// End Get UserID



// Begin Copy Account
new Hack(category.player, "Copy Account", "Copy Account From userID").setClick(async () => {
	const userID = (await NumberInput.fire("What is the userID of the account you want to copy?", undefined, "question")).value;
	if (!userID) return;
	if (!(await Confirm.fire("Are you sure you want to copy the account?", "This will replace all data on your account with the account your copying."))) return;
	const playerData = await (await fetch(`https://api.prodigygame.com/game-api/v2/characters/${userID}?fields=inventory%2Cdata%2CisMember%2Ctutorial%2Cpets%2Cencounters%2Cquests%2Cappearance%2Cequipment%2Chouse%2Cachievements%2Cstate&userID=${_.player.userID}`, {
		headers: {
			Authorization: localStorage.JWT_TOKEN
		}
	})).json();
	await fetch(`https://api.prodigygame.com/game-api/v3/characters/${_.player.userID}`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: localStorage.JWT_TOKEN
		},
		body: JSON.stringify({
			data: JSON.stringify(playerData[userID]),
			userID: _.player.userID
		}),
		method: "POST"
	});
	Toast.fire("Success!", "Copied Account Successfully! Please reload.", "success");
});
// End Copy Account



// Begin Set Grade
new Hack(category.player, "Set Grade").setClick(async () => {
	const grade = await NumberInput.fire("What number do you want to set your grade to?");
	if (!grade.value) return;
	_.player.grade = parseInt(grade.value);
	Toast.fire("Success", `Successfully changed grade to ${grade}!`, "success");
});
// End Set Grade



// END PLAYER HACKS
