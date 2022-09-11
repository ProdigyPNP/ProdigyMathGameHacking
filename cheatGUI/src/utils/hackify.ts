import { TODO } from "../../../typings/util"; // Import Prodigy Util typings
import { _ } from "../utils/util";  // Import Prodigy typings and VERY_LARGE_NUMBER
import { Swal, Toast } from "../utils/swal";  // Import Swal, Toast, Confirm, Input, and NumberInput from swal




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
    }).filter(v => v !== undefined)
});


// Get member module
export function getMemberModule () : string {
    return _.player.hasMembership.toString().split("\"")[1];
}





// Begin toHouse function
export function toHouse (userID: number) {
	if (_.player.userID !== userID) {
		const friendCount = _.instance.prodigy.friendsListNetworkHandler.friendsList.length;
		const classMates = _.instance.prodigy.friendsListNetworkHandler.classList.length;

		_.instance.prodigy.gameContainer.get("2e1-e659")
			.create("house-visit", "click", "hub", friendCount, classMates, null, null, userID)
			.broadcast();
	}
	const zone = _.instance.prodigy.world.getZone(_.instance.prodigy.world.getCurrentZone());
	if (!zone) return Swal.fire({ title: "Error", text: "You are not in a zone!", icon: "error" });
	return zone.handleLeaving(2, () => teleportToHouse(userID));
}
// End toHouse function





// Begin teleportToHouse function
export function teleportToHouse (userID: number) {
	_.instance.prodigy.loading(true);

	const responseCallback = (data: any) => {
		const playerData = data !== null && data !== undefined ? data[userID] : null;

		if (playerData !== null && playerData.house !== undefined && playerData.house !== null) {
			_.instance.prodigy.loading(false);
			const house = _.cloneDeep(_.player.house);
			house.setItems(playerData.house);
			if (!(playerData.data.allowsHouseVisitors !== undefined && playerData.data.allowsHouseVisitors !== null ? playerData.data.allowsHouseVisitors : false)) {
				return Swal.fire(`Teleporting to ${userID} is not allowed.`, "Try another user.", "error");
			}
			return _.instance.prodigy.world._("house", null, null, { house, getAllowsHouseVisitors: () => playerData.data.allowsHouseVisitors !== undefined && playerData.data.allowsHouseVisitors !== null ? playerData.data.allowsHouseVisitors : false, setAllowsHouseVisitors: (v: boolean) => { playerData.data.allowsHouseVisitors = v; } });
		}
	};

	_.network.getCharData(userID.toString(), ["house", "data"], responseCallback, responseCallback);
	return Toast.fire("Teleported to house", "You have been teleported to the house!", "success");
}
// End teleportToHouse function




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
