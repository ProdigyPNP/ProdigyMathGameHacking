// Utility Hacks


// BEGIN IMPORTS
import { Toast, Input, Confirm, Swal } from "../utils/swal";  // Import Toast and Input from swal
import { Hack, category, Toggler } from "../index"; // Import the Cheat GUI bases and the dimensions to resize the menu
import { _, saveCharacter, current, player } from "../utils/util";  // Import Prodigy typings
// END IMPORTS


// BEGIN UTILITY HACKS




// Begin Close all Popups
new Hack(category.utility, "Close all popups", "Closes all popups in Prodigy.").setClick(async () => {
    _.instance.prodigy.open.menuCloseAll();
    return Toast.fire("Closed!", "All open popups were closed.", "success");
});
// End Close all Popups


new Hack(category.utility, "Grab UserID of all players on screen", "Shows you the UserID and name of every player currently shown on the screen.").setClick(async () => {
    const users : object = current.playerList;
    if (Object.keys(users).length === 0) {
        return Toast.fire("No players found.", "There are no other players on the screen.", "error");
    } else {

        let contents : string = "";
        let i : number = 0;

        await Object.keys(users).map((user : string) => {
            const name : string = Object.entries(users)[i][1].nameText.textSource.source;
            contents += `<li>uID: ${user} - ${name}</li>`;
            i++;
        });

        return Swal.fire({title: "All players on the screen:", html: contents, icon: "info" });
    }
});




// Begin Save Character Locally
new Hack(category.utility, "Save Character Locally [Local]", "Saves your character locally.").setClick(async () => {
    localStorage.setItem("playerData", JSON.stringify(player.getUpdatedData(true)));
    return Toast.fire("Success!", "Note: Load Character will only work on this device.", "success");
});
// End Save Character Locally






// Begin Load local Character
new Hack(category.utility, "Load local character [Local]", "Loads your character locally.").setClick(async () => {
    if (!localStorage.getItem("playerData")) {
        return Toast.fire("Error", "No saved character.", "error");
    } else {
        const playerData = localStorage.getItem("playerData");
        const req = await fetch(`https://api.prodigygame.com/game-api/v3/characters/${player.userID}`, {
            headers: {
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9",
                authorization: localStorage.JWT_TOKEN,
                "content-type": "application/json",
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            referrer: "https://play.prodigygame.com/",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: JSON.stringify({
                data: playerData,
                userID: player.userID
            }),
            method: "POST",
            mode: "cors"
        });
        if (!req.ok) return Toast.fire("Request failed.", `An error occurred while loading the character. Error code: ${req.status}`, "error");
        return Toast.fire("Success!", "Character has been successfully loaded. Reload for the changes to take effect.", "success");
    }
});
// End Load local Character





// Begin Save Character
new Hack(category.utility, "Save Character", "Helps fix bugs where not all hacks save.").setClick(async () => {
    saveCharacter();
    return Toast.fire("Success!", "Your character has been saved!", "success");
});
// End Save Character





// Begin Update menu
new Hack(category.utility, "Update menu", "Updates menu to the latest version without needing to reload.").setClick(async () => {
    document.getElementById("cheat-menu")?.remove();
    document.getElementById("menu-toggler")?.remove();
    (async () => {
        eval(await (await fetch(`https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/master/cheatGUI/dist/bundle.js?updated=${Date.now()}`)).text()); // updated parameter is so browser ignores cached version
    })();
    return Toast.fire("Updated!", "Cheat menu was updated.", "success");
});
// End Update menu




// Begin Disable Inactivity Kick
new Hack(category.utility, "Disable inactivity kick", "Keeps you from being logged out for inactivity.").setClick(async () => {
    _.constants.constants["GameConstants.Inactivity.LOG_OUT_TIMER_SECONDS"] = 0;
    return Toast.fire("Success!", "You now will never be logged out!", "success");
});
// End Disable Inactivity Kick






// Begin Enable menu resize drag
new Toggler(category.utility, "Enable menu resize", "Allows you to resize the menu via dragging the bottom right corner.").setEnabled(async () => {
    // @ts-expect-error
    document.getElementById("cheat-menu").style.resize = "both";
    return Toast.fire("Success!", "Drag the bottom right corner of the menu to resize it.", "success");
}).setDisabled(() => {
    // @ts-expect-error
    document.getElementById("cheat-menu").style.resize = "none";
    // document.getElementById("cheat-menu").style.height = dimensions.height;
    // document.getElementById("cheat-menu").style.width = dimensions.width;
    return Toast.fire("Success!", "The menu position is now locked.", "success");
});
// End Enable menu resize drag





// Begin Edit walkSpeed
new Hack(category.utility, "Edit walkspeed", "Lets you set your walkspeed.").setClick(async () => {
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

new Toggler(category.utility, "Toggle Click Teleporting").setEnabled(async () => {
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



// Begin Pause Game
new Toggler(category.utility, "Pause Game").setEnabled(async () => {
    _.network.game._paused = true;
    return Toast.fire("Success!", "Successfully paused Prodigy.", "success");
}).setDisabled(async () => {
    _.network.game._paused = false;
    return Toast.fire("Success!", "Successfully resumed Prodigy.", "success");
});
// End Pause Game





// Begin Eval Console
new Hack(category.utility, "Eval Console", "Evaluate JavaScript code without opening F12").setClick(async () => {


    if (!(await Confirm.fire({
            title: "Important",
            html: "This hack is potentially dangerous, as it evaluates plain JavaScript code, with access to Prodigy's typings. <strong>Please do not paste code from random people on the internet here, that may be dangerous.</strong><br><br>Proceed?",
            icon: "warning"
        })).value) {
        return console.log("Cancelled.");
    }



    const code = await Input.fire("Code:", "Enter the code you want to evaluate.");
    if (!code.value) return;
    try {
        eval(code.value);
    } catch (err) {

        if (err) {
            return Swal.fire({
                title: "Error",
                html: `Oops! There was an error with the code! <br> <code>&nbsp;${err}&nbsp;</code>`,
                icon: "error"
            });
        }
    }

    return Toast.fire("Evaluated!", "Code was evaluated.", "success");
});
// End Eval Console




// END UTILITY HACKS