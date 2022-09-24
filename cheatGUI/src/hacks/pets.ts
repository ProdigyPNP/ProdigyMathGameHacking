// Pet Hacks


// BEGIN IMPORTS
import { Swal, Toast, NumberInput, Confirm } from "../utils/swal";  // Import Swal, Toast, Confirm, Input, and NumberInput from swal
import { category } from "../index";  // Import the Cheat GUI bases.
import Hack from "../class/Hack";
import { _, player } from "../utils/util";  // Import Prodigy typings and VERY_LARGE_NUMBER
import { getPet } from "../utils/hackify"; // Import getPet
// END IMPORTS


// BEGIN PET HACKS


// Begin Get All Pets
new Hack(category.pets, "Get All Pets").setClick(async () => {


    if (!(await Confirm.fire("Would you like to add all pets to your pets?")).value) {
        return console.log("Cancelled");
    }




    // add encounter info
    player.kennel._encounterInfo._data.pets = [];
    
    // Fix broken pets
    // @ts-expect-error
    player.kennel.petTeam.forEach(v => {
        if (v && (v as any).assignRandomSpells)(v as any).assignRandomSpells();
    });

    return Toast.fire("Success!", "All pets have been added!", "success");
});
// End Get All Pets









// Begin Clear Pets
new Hack(category.pets, "Clear Pets").setClick(async () => {

    if (!(await Confirm.fire("Would you like to delete all of your pets?")).value) {
        return console.log("Cancelled");
    }


    player.kennel.data.length = 0;

    return Toast.fire("Success!", "Your pets have been cleared!", "success");
});
// End Clear Pets





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




// END PET HACKS
