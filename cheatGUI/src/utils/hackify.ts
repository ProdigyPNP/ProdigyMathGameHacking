import { TODO } from "../../../typings/util"; // Import Prodigy Util typings
import { _ } from "../utils/util";  // Import Prodigy typings and VERY_LARGE_NUMBER
import { Swal } from "../utils/swal";  // Import Swal, Toast, Confirm, Input, and NumberInput from swal




// Exports


// Item Categories
export const names : String[] = ["Boots", "Buddies", "Fossils", "Hats", "Items", "Key Items", "Tower Town Frames", "Tower Town Interiors", "Mounts", "Outfits", "Relics", "Weapons", "Currencies"];


// Item Category IDs
export const ids : String[] = ["boots", "follow", "fossil", "hat", "item", "key", "mathTownFrame", "mathTownInterior", "mount", "outfit", "spellRelic", "weapon", "currency"];


// Convert item to Item ID map
// @ts-expect-error
export const itemify = (item: Item[], amount: number) =>
	item.map(x => ({
		ID: x.ID,
		N: amount
	})).filter(v => v !== undefined);


// Convert rune to Rune ID map
// @ts-expect-error
export const runeify = (item, amount) =>
	// @ts-expect-error
    item.map(x => ({
	    ID: x.ID,
		quantity: amount
		// @ts-expect-error
    })).filter(v => v !== undefined);


// Get member module
export function getMemberModule () {
    return _.player.hasMembership.toString().split("\"")[1];
}













// Get pet from GUI popup
export const getPet = async (text: string): Promise<number | undefined> => {
	const pet = await Swal.fire({
		input: "select",
		inputOptions: new Map(
			_.player.kennel.data.map((x: TODO, i: number) => [
				i.toString(),
				// @ts-expect-error
				`Level ${x.level} - ${x.nickname ?? _.gameData.pet.find(y => +y.ID === +x.ID)?.data.name ?? "Unknown"}`
			]) as [string, string][]
		),
		title: "Choose Pet",
		text: text
	});
	return pet.value;
};