// @ts-nocheck
import { Swal, Toast, NumberInput, Input, Confirm } from "../utils/swal";
import { Hack, category, Toggler } from "../index";
import { _, getItem, VERY_LARGE_NUMBER, prodigy } from "../utils/util";

new Hack(category.player, "Set Gold").setClick(async () => {
	const gold = await NumberInput.fire("Gold Amount", "What number do you want to set your gold to?", "question");
	if (gold.value === undefined) return;
	if (gold.value > 10000000) return Toast.fire("Error", "Cannot have more than 10,000,000 gold.", "error");
	_.player.data.gold = +gold.value;
	Toast.fire("Success!", `You now have ${gold.value} gold.`, "success");
});
new Hack(category.player, "Set Level").setClick(async () => {
	const level = await NumberInput.fire("Level", "What number do you want to set your level to?", "question");
	if (level.value === undefined) return;

	// fixes #394
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

new Hack(category.player, "Get member stars").setClick(async () => {
	const amount = await NumberInput.fire("Stars", "How many member stars do you want?", "question");
	if (amount.value === undefined) return;
	_.player.data.storedMemberStars = amount.value;
	Toast.fire("Success!", `You have set your member stars to ${amount.value}.`, "success");
});

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

new Hack(category.player, "Obtain Conjure Cubes").setClick(async () => {
	const cubes = await NumberInput.fire("Conjure Cubes", "How many conjure cubes do you want to get? (Max 99)", "question");
	if (cubes.value === undefined) return;
	for (let i = 0; i < Math.min(99, +cubes.value); i++) { prodigy.giftBoxController.receiveGiftBox(null, getItem("giftBox", 1)); }
	Toast.fire("Success!", `You have gained ${cubes.value} conjure cube${cubes.value != 1 ? "s" : ""}.`, "success");
});

new Hack(category.player, "Set Wins").setClick(async () => {
	const amount = await NumberInput.fire("Wins", "What number do you want to set your wins to?", "question");
	if (amount.value === undefined) return;
	_.player.data.win = +amount.value;
	Toast.fire("Success!", `You have set your win${amount.value != 1 ? "s" : ""} to ${amount.value}.`, "success");
});

new Hack(category.player, "Set Losses").setClick(async () => {
	const amount = await NumberInput.fire("Losses", "What number do you want to set your losses to?", "question");
	if (amount.value === undefined) return;
	_.player.data.loss = +amount.value;
	Toast.fire("Success!", `You have set your loss${amount.value != 1 ? "es" : ""} to ${amount.value}.`, "success");
});

new Toggler(category.player, "Instant Kill").setEnabled(async () => {
	_.player.modifiers.damage = VERY_LARGE_NUMBER;
}).setDisabled(() => {
	_.player.modifiers.damage = 1;
});

new Hack(category.player, "PVP Health").setClick(async () => {
	_.player.pvpHP = VERY_LARGE_NUMBER;
	_.player.getMaxHearts = () => VERY_LARGE_NUMBER;
	Toast.fire("Success!", "You now have lots of health!", "success");
});

new Toggler(category.player, "Toggle membership").setEnabled(async () => {
	function getMemberModule () { return _.player.hasMembership.toString().split("\"")[1]; }
	_.instance.prodigy.gameContainer.get(getMemberModule()).data.membership.active = true;
	_.player.appearanceChanged = true;
}).setDisabled(() => {
	function getMemberModule () { return _.player.hasMembership.toString().split("\"")[1]; }
	_.instance.prodigy.gameContainer.get(getMemberModule()).data.membership.active = false;
	_.player.appearanceChanged = true;
});

new Hack(category.player, "Set name (Client side only)").setClick(async () => {
	const name = await Input.fire("What would you like to set your name to?");
	if (!name.value) return;
	_.player.getName = () => { return name.value; };
	Toast.fire("Changed!", "Your name was changed.");
});

/*

let interval: unknown | null = null;

new Hack(category.player, "Arena Point Increaser").setClick(async () => {
	if (interval)
		return Swal.fire(
			"Already Enabled",
			"Arena Point Increaser is already enabled.",
			"error"
		);
	interval = setInterval(async () => {
		const data = await (
			await fetch(
				`https://api.prodigygame.com/leaderboard-api/season/${prodigy.pvpNetworkHandler.seasonID}/user/${_.player.userID}/pvp?userID=${_.player.userID}`,
				{
					headers: {
						authorization: `Bearer ${prodigy.network.jwtAuthProvider.getToken()}`,
						"content-type":
							"application/x-www-form-urlencoded; charset=UTF-8",
					},
					body: `seasonID=${prodigy.pvpNetworkHandler.seasonID}&action=win`,
					method: "POST",
					mode: "cors",
				}
			)
		).text();
		if (data !== "") {
			const jsoned: {
				points: number;
				weeklyPoints: number;
				modifiedDate: string;
				seasonID: number;
				numMatches: number;
			} = JSON.parse(data);
			console.log(`[API] ${jsoned.points} Points (+100)`);
		} else console.log(`[API] Failed to add points.`);
	}, 60500);
	await Swal.fire("Enabled", "Arena Point Increaser has been enabled.", "success");
});
*/
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

new Hack(category.player, "Uncap player level (client side only)").setClick(async () => {
	const level = await NumberInput.fire("Level", "What would you like to set your level to? (Can be 100+)", "question");
	if (!level.value) return;
	localStorage.setItem("level", level.value);
	eval(`_.player.getLevel = () => {return ${level.value}}`);
	Toast.fire("Updated!", "Your level has been successfully updated", "success");
});

new Hack(category.player, "Get all achievements").setClick(async () => {
for (var i = 0; i < 100; i ++) {
	_.player.achievements.data.progress[i] = 10;
}

	Toast.fire("Success!", "Obtained all achievements!", "success");
});

new Hack(category.player, "Morph Player (DEV)", "Morph into a pet, furnishing, or follow.").setClick(async () => {
	const morphType = await Swal.fire({
		title: "Which morph type?",
		input: "select",
		inputOptions: {
			pet: "Pet",
			dorm: "Furniture",
			follow: "Follow"
		},
		inputPlaceholder: "Morph Type",
		inputValidator: res => res ? "" : "Please select a morph type.",
		showCancelButton: true
	});

	if (!morphType?.value) return;

	// swal inputOptions accepts an object, the property being the value it returns, the value being what it displays
	// kinda weird to explain, just look at how morphType does it
	// we want it to display a pretty string, and return the petID
	const morphOptions = {};
	// fuck you typescript, I'll do what I want
	// @ts-ignore
	_.gameData[morphType.value].forEach((morph) => morphOptions[morph.ID] = `${morph.name} (${morph.ID})`);

	const morphID = await Swal.fire({
		title: "Which morph?",
		input: "select",
		inputOptions: morphOptions,
		inputPlaceholder: "Morph ID",
		inputValidator: res => res ? "" : "Please select a morph ID.",
		showCancelButton: true
	});

	if (!morphID?.value) return;
	// shut up typescript, I don't need you on my nuts every time I use Swal
	// typescript makes me cry
	_.player.getPlayerData().playerTransformation = {
		transformType: morphType.value,
		transformID: morphID.value,
		maxTime: 60 * 60 * 1000,
		timeRemaining: 60 * 60 * 1000
	};
	_.player.appearanceChanged = true;

	Toast.fire("Morphed!", "You've been morphed.", "success");
});

new Hack(category.player, "Fix Morph Crash").setClick(async () => {
	_.player.getPlayerData().playerTransformation = undefined;
	_.player.appearanceChanged = true;

	Toast.fire("Success!", "Fixed morph crash bug.", "success");
});

new Hack(category.player, "Permanent Morph", "Makes Your Current Morph Last Forever.").setClick(async () => {
	if (!_.player.data.playerTransformation) {
		await Swal.fire("No Morph Active", "Please use a Morph Marble and try again.", "error");
		return;
	}
	_.player.data.playerTransformation.maxTime = Infinity;
	_.player.data.playerTransformation.timeRemaining = Infinity;
	Toast.fire("Success!", "You're morph will last forever!", "success");
});

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

new Hack(category.player, "Get UserID").setClick(async () => {
	Swal.fire({
		title: "User ID",
		html: `Here is your User ID: <br> <code> ${_.player.userID} </code> <br> You can use this for copying your account.`,
		icon: "info"
	});
});

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

new Hack(category.player, "Set Grade").setClick(async () => {
	const grade = await NumberInput.fire("What number do you want to set your grade to?");
	if (!grade.value) return;
	_.player.grade = parseInt(grade.value);
	Toast.fire("Success", `Successfully changed grade to ${grade}!`, "success");
});
