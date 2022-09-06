// Location Hacks

// BEGIN IMPORTS
import { Hack, category, Toggler } from "../index"; // Import the Cheat GUI bases.
import { NumberInput, Swal, Toast } from "../utils/swal"; // Import Swal, Toast, and NumberInput from swal
import { _, locations, prodigy, player } from "../utils/util"; // Import Prodigy typings
import { toHouse } from "../utils/hackify"; // Import toHouse
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



// Begin Teleport To Map (interactive)
new Hack(category.location, "Teleport To Map (interactive)").setClick(
    async () => {
        const radioPopup = Swal.mixin({
            focusConfirm: false,
            showCancelButton: true,
            preConfirm: () => {
                return document
                    .querySelector(".radioDiv[checked]")
                    ?.getAttribute("zone");
            }
        });
        const container = document.createElement("div");
        container.classList.add("radioContainer");
        for (const zone of Object.keys(prodigy.world.zones)) {
            const radio = document.createElement("DIV");
            radio.classList.add("radioDiv");
            radio.setAttribute("zone", zone);
            const locationURL = locations[zone as keyof typeof locations];
            if (locationURL) {
                radio.style.backgroundImage = `url(${locationURL})`;
            } else radio.innerText = zone;
            radio.onclick = () => {
                document
                    .querySelectorAll(".radioDiv[checked]")
                    .forEach(x => x.removeAttribute("checked"));
                radio.setAttribute("checked", "");
            };
            container.append(radio);
        }
        const zone = await radioPopup.fire({
            title: "Teleport Zone",
            html: container,
            customClass: {
                popup: "radioSwal"
            }
        });
        if (!zone.value) return;
        const mapList = Object.keys(
            prodigy.world.zones[zone.value].maps
        );
        const area = await Swal.fire({
            input: "select",
            inputOptions: new Map(mapList.map(x => [x, x])),
            title: "Map",
            text: "Which map in the zone do you want to teleport to?"
        });
        if (!area.value) return;

        //  fix #1158
        const x = (await NumberInput.fire("Please enter the x to teleport to. (Try 500?)")).value || 500;
        const y = (await NumberInput.fire("Please enter the y to teleport to. (Try 500?)")).value || 500;

        prodigy.world.zones[zone.value].teleport(area.value, x, y, {}, {})
        return Toast.fire("Teleported", "You have been teleported!", "success");
    });
// End Teleport To Map (interactive)






// Begin Teleport To House by userID
new Hack(category.location, "Teleport to house by userID").setClick(async () => {
    const userID = (await NumberInput.fire("Please enter the userID.")).value;
    if (!userID) return;
    toHouse(userID);
    return Toast.fire("Teleported!", "You have been teleported!", "success");
});
// End Teleport To House by userID





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
