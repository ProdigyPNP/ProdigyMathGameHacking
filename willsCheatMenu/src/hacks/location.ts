import { Hack, category } from "../index";
import { NumberInput, Swal, Toast } from "../utils/swal";
import { _, locations, prodigy } from "../utils/util";

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
			if (locationURL) { radio.style.backgroundImage = `url(${locationURL})`; } else radio.innerText = zone;
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
		Toast.fire("Teleported", "You have been teleported!", "success");
	}
);

function toHouse (userID: number) {
	if (_.player.userID !== userID) {
		const friendCount = _.instance.prodigy.friendsListNetworkHandler.friendsList.length;
		const classMates = _.instance.prodigy.friendsListNetworkHandler.classList.length;

		_.instance.prodigy.gameContainer.get("2e1-e659")
			.create("house-visit", "click", "hub", friendCount, classMates, null, null, userID)
			.broadcast();
	}
	const zone = _.instance.prodigy.world.getZone(_.instance.prodigy.world.getCurrentZone());
	if (!zone) return Swal.fire({ title: "Error", text: "You are not in a zone!", icon: "error" });
	zone.handleLeaving(2, () => teleportToHouse(userID));
}

function teleportToHouse (userID: number) {
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
			_.instance.prodigy.world._("house", null, null, { house, getAllowsHouseVisitors: () => playerData.data.allowsHouseVisitors !== undefined && playerData.data.allowsHouseVisitors !== null ? playerData.data.allowsHouseVisitors : false, setAllowsHouseVisitors: (v: boolean) => { playerData.data.allowsHouseVisitors = v; } });
		}
	};

	_.network.getCharData(userID.toString(), ["house", "data"], responseCallback, responseCallback);
}

new Hack(category.location, "Teleport to house by userID").setClick(async () => {
	const userID = (await NumberInput.fire("Please enter the userID.")).value;
	if (!userID) return;
	toHouse(userID);
	Toast.fire("Teleported!", "You have been teleported!", "success");
});

new Hack(category.location, "Get Map Location").setClick(async () => {
	Swal.fire({
		title: "Map Location",
		html: `You are at <br> <code> ${_.player.data.zone} </code>. <br> You can save this to get to the same zone.`,
		icon: "info"
	});
});

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
