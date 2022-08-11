import { _ } from "../utils/util";  // Import Prodigy typings
import { Confirm, Toast } from "../utils/swal"; // Import Swal, Toast, Confirm, Input, and NumberInput from swal













window.addEventListener("keydown", event => {




    switch (event.key) {

        case "`":
            // Close All Popups
            _.instance.prodigy.open.menuCloseAll();
            break;

        case "\\":
            // Gets you kitted up in Celestial Gear
            const k = async () => {



                if (!(
                    await Confirm.fire("Kit", "Would you like to equip Celestial Gear?")
                ).value) {
           	        return console.log("Cancelled");;
                }

                _.player.equipment.setHat(200);
                _.player.equipment.setBoots(93);
                _.player.equipment.setOutfit(161);
                _.player.equipment.setWeapon(196);

                _.player.appearanceChanged = true;

                Toast.fire("Success!", "You are now wearing Celestial Armor and wielding a Dual Blade.", "success");
            };
            k();
            break;



        case "w":
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {  _.player._playerContainer.y -= 2; }, 100);
            }
            break;
        case "s":
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {  _.player._playerContainer.y += 2; }, 100);
            }
            break;
        case "a":
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {  _.player._playerContainer.x -= 2; }, 100);
            }
            break;
        case "d":
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {  _.player._playerContainer.x += 2; }, 100);
            }
            break;    
    }












	/*
	if (event.code === "KeyL") {
		Phaser.GAMES[0].state.states.Login._gameObj.user.x = Phaser.GAMES[0].input.mousePointer.position.x;
		Phaser.GAMES[0].state.states.Login._gameObj.user.y = Phaser.GAMES[0].input.mousePointer.position.y;
	}
	if (event.code === "Escape") {
		Phaser.GAMES[0].state.states.Login._gameObj.open.menus.map(x => x.close());
	}
	if (!Phaser.GAMES[0].state.states.Login._gameObj.open.menus.length) {
		if (event.code === "KeyE") {
			Phaser.GAMES[0].state.states.Login._gameObj.open.backpack();
		}
		if (event.code === "KeyT") {
			Phaser.GAMES[0].state.states.Login._gameObj.open.chat();
		}
	}
	*/
});
