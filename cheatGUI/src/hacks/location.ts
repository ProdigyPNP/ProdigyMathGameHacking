// Location Hacks

// BEGIN IMPORTS
import { category } from "../index"; // Import the Cheat GUI bases.
import Toggler from "../class/Toggler";
import Hack from "../class/Hack";
import { Input, Swal, Toast } from "../utils/swal"; // Import Swal, Toast, and NumberInput from swal
import { _, player } from "../utils/util"; // Import Prodigy typings
// END IMPORTS

export var useWASD : boolean = true;

// BEGIN LOCATION HACKS


// WASD Phasing
new Toggler(category.location, "WASD Movement", "Allows you to walk through walls or on air with WASD movement in Prodigy.").setEnabled(async () => {
    useWASD = true;
    return Toast.fire("Enabled!", "WASD Movement is now enabled.", "success");
}).setDisabled(async () => {
    useWASD = false;
    return Toast.fire("Disabled!", "WASD Movement is now disabled.", "success");
}).status = true;


// Begin Edit walkSpeed
new Hack(category.location, "Edit walkspeed", "Lets you set your walkspeed.").setClick(async () => {
    const walkSpeed = await Input.fire("What do you want to set your walk speed to?");
    if (!walkSpeed.value) return;
    if (!player._playerContainer) {
        const interval = setInterval(() => {
            if (player._playerContainer) {
                clearInterval(interval);
                player._playerContainer.walkSpeed = parseFloat(walkSpeed.value);
            }
        }, 100);
    } else player._playerContainer.walkSpeed = parseFloat(walkSpeed.value) || 1.5;
    return Toast.fire("Success!", `Successfully made walk speed ${parseFloat(walkSpeed.value) || 1.5}!`, "success");
});
// End Edit walkSpeed





// Begin Toggle Click Teleporting
let teleportingInterval = -1;

new Toggler(category.location, "Toggle Click Teleporting").setEnabled(async () => {
    // @ts-expect-error
    teleportingInterval = setInterval(() => {
        try {
            player._playerContainer.walkSpeed = 500;
        } catch (e) {
            // "when switching between scenes, there's a brief moment when player._playerContainer.walkSpeed is inaccessible" - Mustan
        }
    });
    return Toast.fire("Success!", "Successfully enabled teleport click.", "success");
}).setDisabled(async () => {
    clearInterval(teleportingInterval);
    player._playerContainer.walkSpeed = 1.5;
    return Toast.fire("Success!", "Successfully disabled teleport click.", "success");
});
// End Toggle Click Teleporting



/*
const locomotionBackup = _.player._playerContainer.locomotion.screen.area;
// Disable Collision/Click phasing
new Toggler(category.location, "Disable Collision", "Allows you to walk through walls with click movement.").setEnabled(async () => {
    // @ts-expect-error
    _.player._playerContainer.locomotion.screen.area = _.player._playerContainer.locomotion.screen.area.map(e => e.fill(1))
    return Toast.fire("Success!", "Collision was disable on this screen.", "success");
}).setDisabled(async () => {
    _.player._playerContainer.locomotion.screen.area = locomotionBackup;
    return Toast.fire("Success!", "Collision is back!", "success");
});
*/







// Begin Get Map Location
new Hack(category.location, "Get Map Location").setClick(async () => {


    const Location: string = player.data.zone;

    navigator.clipboard.writeText(Location).then(async function() {

        console.log("Async: Copying to clipboard was successful!");

        return Swal.fire({
            title: "Map Location",
            html: `You are at <br> <code> ${Location} </code>. <br> You can save this to get to the same zone. <br> <br> Your location is has also been copied to your clipboard.`,
            icon: "info"
        });


    }, async function (err) {

        console.error("Async: Could not copy text: ", err);

        return Swal.fire({
            title: "Map Location",
            html: `You are at <br> <code> ${Location} </code>. <br> You can save this to get to the same zone.`,
            icon: "info"
        });


    });


});
// End Get Map Location



// END LOCATION HACKS


/*
new Hack(category.location, "Teleport To Dark Tower Floor").setClick(
	async () => {
		const floor = await NumberInput.fire(
			"Dark Tower Floor",
			"What floor do you want to teleport to?",
			"question"
		);
		if (floor.value === undefined) return;
		prodigy.debugMisc.tpTowerFloor(+floor.value);
		Toast.fire(
			"Success!",
			"You have been teleport to the requested floor."
		);
	}
);



new Hack(
	category.location,
	"Unlock All Zones (school)",
	"Unlocks all the zones that are locked in school."
).setClick(async () => {
	prodigy.classModeController.lockedZones = 0;
	Toast.fire("Success!", "All zones are now unlocked that were locked in school.", "success")
});
*/
