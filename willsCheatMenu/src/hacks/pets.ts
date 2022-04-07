// @ts-nocheck
import { Swal, Toast, NumberInput, Input, Confirm } from "../utils/swal";
import { Hack, category } from "../index";
import { _, VERY_LARGE_NUMBER } from "../utils/util";
import { TODO } from "../../../typings/util";

new Hack(category.pets, "Get All Pets").setClick(async () => {
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

	Toast.fire("Success!", "All pets have been added!", "success");
});

new Hack(category.pets, "Get All Legacy Epics").setClick(async () => {
	const epics = _.gameData.pet.filter(x => [125, 126, 127, 128, 129, 130, 131, 132, 133].includes(x.ID));
	epics.forEach(x => {
		_.player.kennel.addPet(x.ID.toString(), VERY_LARGE_NUMBER, 26376, 100);
	});
	// Fix broken pets
	_.player.kennel.petTeam.forEach((v: any) => {
		if (v && (v as any).assignRandomSpells) (v as any).assignRandomSpells();
	});
	Toast.fire("Success!", "All legacy epics have been added!", "success");
});

// TODO: I need Aura's ID
new Hack(category.pets, "Get All Mythical Epics").setClick(async () => {
	const epics = _.gameData.pet.filter(x => [158, 166, 168].includes(x.ID));
	epics.forEach(x => {
		_.player.kennel.addPet(x.ID.toString(), VERY_LARGE_NUMBER, 26376, 100);
	});
	// Fix broken pets
	_.player.kennel.petTeam.forEach((v: any) => {
		if (v && (v as any).assignRandomSpells) (v as any).assignRandomSpells();
	});
	Toast.fire("Success!", "All mythical epics have been added!", "success");
});


new Hack(category.pets, "Fix Battle Crash").setClick(async () => {
	_.player.kennel.petTeam.forEach((v: any) => {
		if (v && (v as any).assignRandomSpells) (v as any).assignRandomSpells();
	});

	Toast.fire("Success!", "Fixed kennel attack bug!", "success");
});

new Hack(category.pets, "Clear Pets").setClick(async () => {
	_.player.kennel.data.length = 0;

	Toast.fire("Success!", "Your pets have been cleared!", "success");
});

new Hack(category.pets, "Add Pet", "Adds a pet from a list.").setClick(async () => {
	const pet = await Swal.fire({
		input: "select",
		inputOptions: new Map(_.gameData.pet.map(x => [x.ID.toString(), `${x.ID}: ${x.data.name}`])),
		title: "Choose Pet",
		text: "Which pet do you want to obtain?"
	});
	if (pet.value === undefined) return;
	_.player.kennel.addPet(pet.value);
	// add encounter data
	_.player.kennel._encounterInfo._data.pets.push({
		firstSeenDate: Date.now(),
		ID: pet.value,
		timesBattled: 1,
		timesRescued: 1
	});

	Toast.fire("Success!", "Your chosen pet has been added to your pets!", "success");
});

new Hack(category.pets, "Uncap pet level (client side only, doesn't save on reload)", "Change your pet's level to anything, even over 100.").setClick(async () => {
	const petTeam = _.player.kennel.petTeam.slice(0);
	petTeam.shift();
	const names = petTeam.map(pet => pet.getName());
	const pet = await Swal.fire({
		title: "Which pet would you like to edit?",
		input: "select",
		inputOptions: names,
		inputPlaceholder: "Select...",
		inputValidator: res => res ? "" : "Please select which you'd like to obtain.",
		showCancelButton: true
	});
	const amt = await NumberInput.fire("Level", "What would you like to set your pet's level to? (Can be set over 100)", "question");
	if (!amt.value) return;
	const num = amt.value;
	// sorry in advance
	eval(`_.player.kennel.petTeam[parseInt(${pet.value})+1].getLevel = () => {return ${num}}`);
	Toast.fire("Updated!", "The level of your pet was successfully updated.", "success");
});

const getPet = async (text: string): Promise<number | undefined> => {
	const pet = await Swal.fire({
		input: "select",
		inputOptions: new Map(
			_.player.kennel.data.map((x: TODO, i: number) => [
				i.toString(),
				`Level ${x.level} - ${x.nickname ?? _.gameData.pet.find(y => +y.ID === +x.ID)?.data.name ?? "Unknown"}`
			]) as [string, string][]
		),
		title: "Choose Pet",
		text: text
	});
	return pet.value;
};

new Hack(category.pets, "Edit Pet (BETA)", "Edit a pet.").setClick(async () => {
	if (!(await Confirm.fire({
		title: "Hang on!",
		html: "This feature is in <strong>beta</strong>. Using this could break your account in a specific way. This should be used for experimentation <strong>only</strong>.<br><br>Proceed?",
		icon: "warning"
	})).value) { return; }
	const pet = await getPet("Choose the pet to edit.");
	if (pet === undefined) return;
	const selected = _.player.kennel.data[pet];
	const opt = await Swal.fire({
		input: "select",
		inputOptions: { level: "Level", attacks: "Attacks", name: "Name" },
		title: "Edit Property",
		text: "What do you want to edit?"
	});
	if (opt.value === undefined) return;
	if (opt.value === "level") {
		const level = await NumberInput.fire(
			"Level Number",
			"What level do you want to set your pet to?",
			"question"
		);
		if (level.value === undefined) return;
		selected.level = +level.value;
		Toast.fire("Success!", "The pet's level has been set.", "success");
	} else if (opt.value === "attacks") {
		const attackList = _.gameData.spell;
		const div = document.createElement("div");
		const select = document.createElement("select");
		select.classList.add("selectSpell");
		for (const spell of attackList) {
			const spellElement = document.createElement("option");
			spellElement.value = spell.ID.toString();
			spellElement.innerText = `${spell.ID}: ${spell.name} (${spell.data.element}) - Damage: ${spell.data.damage}`;
			select.options.add(spellElement);
		}
		div.append(select);
		div.append(select.cloneNode(true));
		const attacks = await Swal.fire({
			title: "Attack List",
			focusConfirm: false,
			showCancelButton: true,
			html: div,
			preConfirm: () => {
				return Array.prototype.slice
					.call(document.querySelectorAll(".selectSpell"))
					.map((x: HTMLSelectElement) => x.options[x.selectedIndex].value);
			}
		});
		if (attacks.value === undefined) return;
		(selected.foreignSpells as number[]).splice(0, 2, ...attacks.value.map((x: string) => +x));
		Toast.fire("Attacks updated!", "The attack list of the pet you selected has been edited.", "success");
	} else if (opt.value === "name") {
		const name = await Input.fire("Input Name", "What do you want to name the pet?", "question");
		if (name.value === undefined) return;
		selected.nickname = name.value;
		await Swal.fire("Successfully renamed!", "The name of the pet has been changed.", "success");
	}
});

new Hack(category.pets, "Delete Pet", "Delete a pet.").setClick(async () => {
	const pet = await getPet("Which pet do you wish to delete?");
	if (pet === undefined) return;
	_.player.kennel.data.splice(pet, 1);
	await Swal.fire("Successfully deleted!", "The selected pet was deleted successfully.", "success");
});
