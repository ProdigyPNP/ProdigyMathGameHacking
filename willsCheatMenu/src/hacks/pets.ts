// @ts-nocheck
// Pet Hacks


// BEGIN IMPORTS
import { Swal, Toast, NumberInput, Input, Confirm } from "../utils/swal";  // Import Swal, Toast, Confirm, Input, and NumberInput from swal
import { Hack, category } from "../index";  // Import the Cheat GUI bases.
import { _, VERY_LARGE_NUMBER } from "../utils/util";  // Import Prodigy typings and VERY_LARGE_NUMBER
import { TODO } from "../../../typings/util"; // Import Prodigy Util typings
// END IMPORTS


// BEGIN PET HACKS



// Begin Get All Pets
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
// End Get All Pets



// Begin Get ALl Legacy Epics
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
// End Get ALl Legacy Epics




// Begin Get All Mythical Epics
new Hack(category.pets, "Get All Mythical Epics").setClick(async () => {
	// TODO: I need Aura's ID
	const epics = _.gameData.pet.filter(x => [158, 166, 168].includes(x.ID));
	epics.forEach(x => {
		_.player.kennel.addPet(x.ID.toString(), VERY_LARGE_NUMBER, 26376, 100);
	});
	// Fix broken pets
	_.player.kennel.petTeam.forEach((v: any) => {
		if (v && (v as any).assignRandomSpells) (v as any).assignRandomSpells();
	});
	Toast.fire("Success!", "All mythical epics have been added!", "success");
}); // btw this hack was made by gemsvidø (afkvido on github)
// End Get ALl Mythical Epics


// Begin Fix Battle Crash
new Hack(category.pets, "Fix Battle Crash").setClick(async () => {
	_.player.kennel.petTeam.forEach((v: any) => {
		if (v && (v as any).assignRandomSpells) (v as any).assignRandomSpells();
	});

	Toast.fire("Success!", "Fixed kennel attack bug!", "success");
});
// End Fix Battle Crash


// Begin Clear Pets
new Hack(category.pets, "Clear Pets").setClick(async () => {
	_.player.kennel.data.length = 0;

	Toast.fire("Success!", "Your pets have been cleared!", "success");
});
// End Clear Pets



// Begin Add Pet
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
// End Add Pet



// Begin Uncap pet level
new Hack(category.pets, "Uncap pet level [Client Side]", "Change your pet's level to anything, even over 100. This hack won't save when you reload Prodigy.").setClick(async () => {
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
	Toast.fire("Updated!", "The level of your pet was successfully updated. Note: this hack is client-side.", "success");
});
// End Uncap pet level




// Begin getPet function
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
// End getPet function





// Begin Delete Pet
new Hack(category.pets, "Delete Pet", "Delete a pet.").setClick(async () => {
	const pet = await getPet("Which pet do you wish to delete?");
	if (pet === undefined) return;
	_.player.kennel.data.splice(pet, 1);
	await Swal.fire("Successfully deleted!", "The selected pet was deleted successfully.", "success");
});
// End Delete Pet



// END PET HACKS
