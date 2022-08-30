// Pet Hacks


// BEGIN IMPORTS
import { Swal, Toast, NumberInput, Confirm } from "../utils/swal";  // Import Swal, Toast, Confirm, Input, and NumberInput from swal
import { Hack, category } from "../index";  // Import the Cheat GUI bases.
import { _, VERY_LARGE_NUMBER, player } from "../utils/util";  // Import Prodigy typings and VERY_LARGE_NUMBER
import { getPet } from "../utils/hackify"; // Import getPet
import { GetAction, SelectSlot } from "../utils/kennel";
// END IMPORTS


// BEGIN PET HACKS


// Begin Get All Pets
new Hack(category.pets, "Get All Pets").setClick(async () => {


    if (!(await Confirm.fire("Would you like to add all pets to your pets?")).value) {
        return console.log("Cancelled");
    }


    // add pets
    // @ts-expect-error
    _.gameData.pet.forEach(x => {
        player.kennel.addPet(x.ID.toString(), VERY_LARGE_NUMBER, 26376, 100);
    });


    // add encounter info
    player.kennel._encounterInfo._data.pets = [];
    _.gameData.pet.map((pet: {
        ID: number
    }) => {
        player.kennel._encounterInfo._data.pets.push({
            firstSeenDate: Date.now(),
            ID: pet.ID,
            timesBattled: 1,
            timesRescued: 1
        });
    });
    // Fix broken pets
    // @ts-expect-error
    player.kennel.petTeam.forEach(v => {
        if (v && (v as any).assignRandomSpells)(v as any).assignRandomSpells();
    });

    return Toast.fire("Success!", "All pets have been added!", "success");
});
// End Get All Pets




// Begin Get ALl Legacy Epics
new Hack(category.pets, "Get All Legacy Epics").setClick(async () => {


    if (!(await Confirm.fire("This may damage your account.", "Attempting to add legacy epics may damage your account. Would you still like to add all legacy epics to your team?", "warning")).value) {
        return console.log("Cancelled");
    }

    // @ts-expect-error
    const epics = _.gameData.pet.filter(x => [125, 126, 127, 128, 129, 130, 131, 132, 133].includes(x.ID));
    // @ts-expect-error
    epics.forEach(x => {
        player.kennel.addPet(x.ID.toString(), VERY_LARGE_NUMBER, 26376, 100);
    });
    // Fix broken pets
    // @ts-expect-error
    player.kennel.petTeam.forEach(v => {
        if (v && (v as any).assignRandomSpells)(v as any).assignRandomSpells();
    });
    return Toast.fire("Success!", "All legacy epics have been added!", "success");
});
// End Get ALl Legacy Epics





// Begin Get All Mythical Epics
new Hack(category.pets, "Get All Mythical Epics").setClick(async () => {

    if (!(await Confirm.fire("Would you like to add all mythical epics to your pets?")).value) {
        return console.log("Cancelled");
    }


    // @ts-expect-error
	const epics = _.gameData.pet.filter(x => [
        158, // Magmayhem
        164, // Blast Star
        165, // Vegabloom
        166, // Arcturion
        167, // Aquadile
        168, // Shiver & Scorch
        169, // Riptide
        170, // Lumanight
        171, // Nebula
        189, // B.F. Magmayhem
    ].includes(x.ID));
    // @ts-expect-error
	epics.forEach(x => {
		player.kennel.addPet(x.ID.toString(), VERY_LARGE_NUMBER, 26376, 100);
	});
	// Fix broken pets
	player.kennel.petTeam.forEach((v: any) => {
		if (v && (v as any).assignRandomSpells) (v as any).assignRandomSpells();
	});
	return Toast.fire("Success!", "All mythical epics have been added!", "success");
}); // btw this hack was made by gemsvidø (afkvido on github)
// End Get ALl Mythical Epics





// Begin Clear Pets
new Hack(category.pets, "Clear Pets").setClick(async () => {

    if (!(await Confirm.fire("Would you like to delete all of your pets?")).value) {
        return console.log("Cancelled");
    }


    player.kennel.data.length = 0;

    return Toast.fire("Success!", "Your pets have been cleared!", "success");
});
// End Clear Pets





// Begin Add Pet
new Hack(category.pets, "Add Pet", "Adds a pet from a list.").setClick(async () => {
    // @ts-expect-error
    const pet = await Swal.fire({
        input: "select",
        // @ts-expect-error
        inputOptions: new Map(_.gameData.pet.map(x => [x.ID.toString(), `${x.ID}: ${x.data.name}`])),
        title: "Choose Pet",
        text: "Which pet do you want to obtain?"
    });
    if (pet.value === undefined) return;
    player.kennel.addPet(pet.value);
    // add encounter data
    player.kennel._encounterInfo._data.pets.push({
        firstSeenDate: Date.now(),
        ID: pet.value,
        timesBattled: 1,
        timesRescued: 1
    });

    return Toast.fire("Success!", "Your chosen pet has been added to your pets!", "success");
});
// End Add Pet





// Begin Uncap pet level
new Hack(category.pets, "Uncap pet level [Client Side]", "Change your pet's level to anything, even over 100. This hack won't save when you reload Prodigy.").setClick(async () => {
    const petTeam = player.kennel.petTeam.slice(0);
    petTeam.shift();
    // @ts-expect-error
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
    eval(`player.kennel.petTeam[parseInt(${pet.value})+1].getLevel = () => {return ${num}}`);
    return Toast.fire("Updated!", "The level of your pet was successfully updated. Note: this hack is client-side.", "success");
});
// End Uncap pet level





// Begin Delete Pet
new Hack(category.pets, "Delete Pet", "Delete a pet.").setClick(async () => {
    const pet = await getPet("Which pet do you wish to delete?");
    if (pet === undefined) return;
    player.kennel.data.splice(pet, 1);
    return Toast.fire("Successfully deleted!", "The selected pet was deleted successfully.", "success");
});
// End Delete Pet


// Begin Edit Kennel
new Hack(category.pets, "Edit Kennel", "Allows you to directly edit your pets.").setClick(async () => {


    const action = await GetAction();
    if (action === null) return;


    const slot = await SelectSlot();
    if (slot === null) return;

    
    // @ts-expect-error
    console.log(s(parseInt(KennelSlot.value)));

});
// End Kennel


// Begin Backup Kennel
new Hack(category.pets, "Backup Kennel", "Makes a backup of your kennel to your chrome local storage.").setClick(async () => {
    
});
// End Backup Kennel


// Begin Restore Kennel
new Hack(category.pets, "Restore Kennel", "Restores a backup of your kennel from the local storage... if you have one.").setClick(async () => {
    
});
// End Restore Kennel


// END PET HACKS
