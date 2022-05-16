// @ts-nocheck

import { TODO } from "../../../typings/util"; // Import Prodigy Util typings
import { _ } from "../utils/util";  // Import Prodigy typings and VERY_LARGE_NUMBER
import { Swal } from "../utils/swal";  // Import Swal, Toast, Confirm, Input, and NumberInput from swal




// Exports


// Item Categories
export const names : String[] = ["Boots", "Buddies", "Fossils", "Hats", "Items", "Key Items", "Tower Town Frames", "Tower Town Interiors", "Mounts", "Outfits", "Relics", "Weapons", "Currencies"];


// Item Category IDs
export const ids : String[] = ["boots", "follow", "fossil", "hat", "item", "key", "mathTownFrame", "mathTownInterior", "mount", "outfit", "spellRelic", "weapon", "currency"];


// Convert item to Item ID map
export const itemify = (item: Item[], amount: number) =>
	item.map(x => ({
		ID: x.ID,
		N: amount
	})).filter(v => v !== undefined);


// Convert rune to Rune ID map
export const runeify = (item, amount) =>
    item.map(x => ({
	    ID: x.ID,
		quantity: amount
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
				`Level ${x.level} - ${x.nickname ?? _.gameData.pet.find(y => +y.ID === +x.ID)?.data.name ?? "Unknown"}`
			]) as [string, string][]
		),
		title: "Choose Pet",
		text: text
	});
	return pet.value;
};



// Display license information
export const licensePopup = async () => {

    await Swal.fire({
        title: "ProdigyPNP",
        html: `
            <p>
            <a href="https://github.com/ProdigyPNP/ProdigyMathGameHacking/blob/master/README.md">This is free and open-source software</a>.
            If you paid for this or accessed this behind a paywall/AdFly link, demand a refund. If you sell this software, or otherwise make a commercial advantage from it, you are violating
             <a href = "https://github.com/ProdigyPNP/ProdigyMathGameHacking/blob/master/LICENSE.txt">our license</a>.
            </p>
        `,
        icon: "info"
    });

};



// Display status message
export const statusMessage = async () => {


    await fetch(`https://raw.githubusercontent.com/ProdigyMathGame/development/master/cheatGUI/statusmessage.json?updated=${Date.now()}`).then(response => response.json()).then(async data => {

            const enabled : boolean = data.enabled;

            if (enabled.value === false) {
                return console.log("Status message is disabled.");
            } else {

                await Swal.fire({
                            title: data.title,
                    	    html: data.html,
                    	    icon: data.icon,
                    });

            }

        });



};



// Display License and Status Message
export function displayPopups () {

    licensePopup().then(async () => {

        statusMessage();

    });

}