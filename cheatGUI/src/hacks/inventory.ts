// @ts-nocheck
// Inventory Hacks



// BEGIN IMPORTS
import { Hack, category } from "../index"; // Import the Cheat GUI bases.
import { Swal, Toast, Confirm, NumberInput } from "../utils/swal"; // Import Swal, Toast, NumberInput, and Confirm from swal
import { _, saveCharacter } from "../utils/util"; // Import Prodigy typings
import { Item } from "../../../typings/item"; // Import Prodigy Item typings
// END IMPORTS


// Item Categories
const names = ["Boots", "Buddies", "Fossils", "Hats", "Items", "Key Items", "Tower Town Frames", "Tower Town Interiors", "Mounts", "Outfits", "Relics", "Weapons", "Currencies"];

// Item Category IDs
const ids = ["boots", "follow", "fossil", "hat", "item", "key", "mathTownFrame", "mathTownInterior", "mount", "outfit", "spellRelic", "weapon", "currency"];

// Make a selection into an item.
const itemify = (item: Item[], amount: number) =>
	item.map(x => ({
		ID: x.ID,
		N: amount
	})).filter(v => v !== undefined);



// BEGIN INVENTORY HACKS


// Begin Item Stacker
new Hack(category.inventory, "Item stacker").setClick(async () => {
	const num = await NumberInput.fire("Amount", "How many of every item would you like?", "question");
	if (!num.value) return;
	if (!(await Confirm.fire("Are you sure you want to get all items in the game?")).value) return;

	ids.forEach(id => {
		_.player.backpack.data[id] = itemify(_.gameData[id].filter(l => id === "follow" ? ![125,126,127,128,129,134,135,136,137].includes(l.ID) : l), num.value);
	});
	_.gameData.dorm.forEach(x =>
		_.player.house.data.items[x.ID] = { A: [], N: num.value }
	);

	// Remove bounty notes... because they're very spammy
	const bountyIndex = () => _.player.backpack.data.item.findIndex(v => v.ID === 84 || v.ID === 85 || v.ID === 86);
	while (bountyIndex() > -1) _.player.backpack.data.item.splice(bountyIndex(), 1);
	Toast.fire("Success!", "All items added!", "success");
});
// End Item Stacker




// Begin Clear Inventory
new Hack(category.inventory, "Clear inventory").setClick(async () => {
if (!(await Confirm.fire("Are you sure you want to clear your inventory?")).value) return;
Object.keys(_.player.backpack.data).forEach(d => _.player.backpack.data[d] = [])
Toast.fire("Success!", "Inventory cleared.", "success");
});
// End Clear Inventory




// Begin Selector (Basic)
new Hack(category.inventory, "Selector (Basic)").setClick(async () => {
	// @ts-ignore
	const val = await Swal.fire({
		title: "What would you like to obtain?",
		input: "select",
		inputOptions: names,
		inputPlaceholder: "Select...",
		inputValidator: (res: any) => res ? "" : "Please select which you'd like to obtain.",
		showCancelButton: true
	}).then(async val => {
		const num = parseInt(val.value);
		const name = names[num];
		const id = ids[num];
		if (!name) return;
		const amt = await NumberInput.fire("Amount", "How many each object would you like?", "question");
		if (!amt.value) return;
		if (!(await Confirm.fire(`Are you sure you want to get all ${name.toLowerCase()}?`)).value) return;
		// @ts-ignore
		_.player.backpack.data[id] = itemify(_.gameData[id].filter(a => {return id === 'follow' ? ![125,126,127,128,129,134,135,136,137].includes(a.ID) : a}), amt.value);
		Toast.fire(
			`${name} Added!`,
			`All ${name.toLowerCase()} have been added to your inventory!`,
			"success"
		);
		saveCharacter();
	});
});
// End Selector (Basic)




// Begin Selector (Advanced)
new Hack(category.inventory, "Selector (Advanced)", "Choose a specific object and quantity to obtain.").setClick(async () => {
	// @ts-ignore
	const val = await Swal.fire({
		title: "What would you like to obtain?",
		input: "select",
		inputOptions: names,
		inputPlaceholder: "Select...",
		inputValidator: (res: any) => res ? "" : "Please select which you'd like to obtain.",
		showCancelButton: true
	}).then(async val => {
		if (!_.gameData[ids[val.value]]) return;
		const objs : [] = [];
		// @ts-ignore
		_.gameData[ids[val.value]].forEach(elem => { objs.push(elem.data.name); });
		// @ts-ignore
		const spec = await Swal.fire({
			title: `What specific object categorized as ${names[val.value].toLowerCase()} would you like to get?`,
			input: "select",
			inputOptions: objs,
			inputPlaceholder: "Select...",
			inputValidator: (res: any) => res ? "" : "Please select which you'd like to get.",
			showCancelButton: true
		}).then(async spec => {
			const correct = parseInt(spec.value);
			if (!_.gameData[ids[val.value]][correct]) return;
			const amt = await NumberInput.fire("Amount", "How many of the object would you like?", "question");
			if (!amt.value) return;

			// @ts-ignore
			if (_.player.backpack.data[ids[val.value]].findIndex(e => e.ID === _.gameData[ids[val.value]][correct].ID) === -1) {
				_.player.backpack.data[ids[val.value]].push({
					ID: _.gameData[ids[val.value]][correct].ID,
					N: amt.value
				});

			} else {
				// @ts-ignore
				const num = _.player.backpack.data[ids[val.value]].findIndex(e => e.ID === _.gameData[ids[val.value]][correct].ID);
			}

			console.log(_.gameData[ids[val.value]][correct].ID);

			Toast.fire(`${names[val.value]} Added!`, `Your selected ${names[val.value].toLowerCase()} have been added.`, "success");
			saveCharacter();
		});
	});
});
// End Selector (Advanced)



// Begin Obtain All Furniture
new Hack(category.inventory, "Obtain All Furniture").setClick(async () => {
	const amt = await NumberInput.fire("Amount", "How many of each piece of furniture would you like?", "question");
	if (!amt.value) return;
	if (!(await Confirm.fire("Are you sure you want to get all furniture?")).value) return;
	_.gameData.dorm.forEach(x =>
		_.player.house.data.items[x.ID] = { A: [], N: amt.value }
	);
	Toast.fire("Furniture Added!", "All furniture has been added to your inventory!", "success");
});
// End Obtain All Furniture



// Begin Obtain All Mounts
new Hack(category.inventory, "Obtain All Mounts", "This gives you all of the mounts in the game.").setClick(async () => {
	_.player.backpack.data.mount = itemify(_.gameData.mount, 1);
	Toast.fire("Mounts Added!", "All mounts have been added to your inventory!");
});
// End Obtain All Mounts




// Begin Remove Item
new Hack(category.inventory, "Remove item").setClick(async () => {
	const category = await Swal.fire({
		title: "What category would you like to remove an item from?",
		input: "select",
		inputOptions: names,
		inputPlaceholder: "Select...",
		inputValidator: (res: any) => res ? "" : "Please select which you'd like to obtain.",
		showCancelButton: true
	});
	if (!_.gameData[ids[category.value]]) return;
	const objs = _.gameData[ids[category.value]].map(elem => elem.data.name);
	let item = await Swal.fire({
		title: `What specific object categorized as ${names[category.value].toLowerCase()} would you like to remove?`,
		input: "select",
		inputOptions: objs,
		inputPlaceholder: "Select...",
		inputValidator: (res: any) => res ? "" : "Please select which you'd like to get.",
		showCancelButton: true
	});
	item = parseInt(item.value);
	if (!_.gameData[ids[category.value]][item]) return;
	const amt = await NumberInput.fire("Amount", "How many of the object would you like to remove?", "question");
	if (!amt.value) return;
	if (_.player.backpack.data[ids[category.value]].findIndex(e => e.ID === _.gameData[ids[category.value]][item].ID) === -1) {
		await Swal.fire("Item Does Not Exist", `You do not have any ${_.gameData[ids[category.value]][item].name}.`, "error");
		return;
	}

	const num = _.player.backpack.data[ids[category.value]].findIndex(e => e.ID === _.gameData[ids[category.value]][item].ID);
	_.player.backpack.data[ids[category.value]][num].N -= parseInt(amt.value);
	if (_.player.backpack.data[ids[category.value]][num].N <= 0) {
		_.player.backpack.data[ids[category.value]].splice(num, 1); // if the amount is 0 or below then the item should not exist
	}

	Toast.fire("Removed!", `Successfully removed ${amt.value} ${_.gameData[ids[category.value]][item].name}!`, "success");
	saveCharacter();
});
// End Remove Item




// Begin Obtain All Furniture
new Hack(category.inventory, "Obtain All Furniture").setClick(async () => {
	if (!(await Confirm.fire("Are you sure you want to get all furniture?")).value) return;
		_.gameData.dorm.forEach(x =>
			_.player.house.data.items[x.ID] = {A: [], N: VERY_LARGE_NUMBER}
		)
		Toast.fire("Furniture Added!", "All furniture have been added to your inventory!", "success");
});
// End Obtain All Furniture