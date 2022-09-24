// Patched Hacks


// BEGIN IMPORTS
import { Confirm, Toast } from "../utils/swal";
import { category} from "../index"; // Import the Cheat GUI bases.
import Hack from "../class/Hack";
import { _ } from "../utils/util"; // Import Prodigy typings and VERY_LARGE_NUMBER
// END IMPORTS




// BEGIN PATCHED HACKS




// Begin Disable Timeout Dialog
new Hack(category.patched, "Disable Timeout Dialog [Patched]").setClick(async () => {
    if (!(await Confirm.fire("This hack is patched.", "Running it will probably do nothing.")).value) {
        return console.log("Cancelled");
    } else {
        // @ts-expect-error
        prodigy.debugMisc.disableTimeoutDialogue();
    }
    return Toast.fire("Enabled", "Timeout Dialog has been disabled.", "success");
});
// End Disable Timeout Dialog






/* Old Inventory hacks, replaced by Selector

const inventoryHack = (name: string, id: BackpackItemType, amount: number = 1) => {
	new Hack(category.inventory, `Obtain All ${name}`).setClick(async () => {
		if (!(await Confirm.fire(`Are you sure you want to get all ${name}?`)).value) return;
		player.backpack.data[id] = itemify(_.gameData[id], amount);
		Toast.fire(
			`${name} Added!`,
			`All ${name.toLowerCase()} have been added to your inventory!`,
			"success"
		);
	});
};
inventoryHack("Boots", "boots");
inventoryHack("Buddies", "follow");
inventoryHack("Fossils", "fossil", VERY_LARGE_NUMBER);
inventoryHack("Hats", "hat");
inventoryHack("Items", "item", VERY_LARGE_NUMBER);
inventoryHack("Key Items", "key", VERY_LARGE_NUMBER);
inventoryHack("Math Town Frames", "mathTownFrame", VERY_LARGE_NUMBER);
inventoryHack("Math Town Interiors", "mathTownInterior", VERY_LARGE_NUMBER);
inventoryHack("Mounts", "mount");
inventoryHack("Outfits", "outfit");
inventoryHack("Relics", "relic");
inventoryHack("Spell Relics", "spellRelic");
inventoryHack("Weapons", "weapon");
inventoryHack("Currency", "currency", VERY_LARGE_NUMBER);

End Old Inventory Hacks */

// END PATCHED HACKS
