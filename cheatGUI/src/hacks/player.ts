// Player Hacks ⬛️🟧


// BEGIN IMPORTS
import { Swal, Toast, NumberInput, Input, Confirm } from "../utils/swal"; // Import Swal, Toast, Confirm, Input, and NumberInput from swal
import { category } from "../index"; // Import the Cheat GUI bases.
import Hack from "../class/Hack";
import { _, player} from "../utils/util";  // Import Prodigy typings and VERY_LARGE_NUMBER
import openChat from "../utils/chat";

// END IMPORTS





// BEGIN PLAYER HACKS


// Begin open chat
new Hack(category.player, "Open ProdigyPNP Chat", "Opens a chat for ProdigyPNP users").setClick(async () => {
    return openChat();
});
// end open chat







// Begin Set Gold
new Hack(category.player, "Set Gold").setClick(async () => {
    const gold = await NumberInput.fire("Gold Amount", "What number do you want to set your gold to?", "question");
    if (gold.value === undefined) return;
    if (gold.value > 10000000) return Toast.fire("Error", "Cannot have more than 10,000,000 gold.", "error");
    player.data.gold = +gold.value;
    return Toast.fire("Success!", `You now have ${gold.value} gold.`, "success");
});
// End Set Gold






// Begin Set Level
new Hack(category.player, "Set Level").setClick(async () => {
    const level = await NumberInput.fire("Level", "What number do you want to set your level to?", "question");
    if (level.value === undefined) return;

    // calculate how many stars the level *should* have
    // from 3-16-1.js:8382
    if (level.value === 1) return 0;
    const i = level.value - 2;
    // xpConstant from 3-16-1.js:8528
    const xpConstant = 1.042;
    player.data.stars = Math.round((1 - Math.pow(xpConstant, i)) / (1 - xpConstant) * 20 + 10);
    player.data.level = +level.value;
    player.getLevel = () => {
        return player.data.level;
    };

    return Toast.fire("Success!", `You are now level ${level.value}.`, "success");
});
// End Set Level






// Begin Get member stars
new Hack(category.player, "Get member stars").setClick(async () => {
    const amount = await NumberInput.fire("Stars", "How many member stars do you want?", "question");
    if (amount.value === undefined) return;
    player.data.storedMemberStars = amount.value;
    return Toast.fire("Success!", `You have set your member stars to ${amount.value}.`, "success");
});
// End Get member stars







// Begin Set bounty points
new Hack(category.player, "Set Bounty Points").setClick(async () => {
    const points = await NumberInput.fire(
        "Bounty Points",
        "What number do you want to set your bounty points to? (Max is 100)",
        "question"
    );
    if (points.value === undefined) return;
    player.data.bountyScore = Math.min(+points.value, 100);
    return Toast.fire("Success!", `You now have ${player.data.bountyScore} bounty point${player.data.bountyScore != 1 ? "s" : ""}.`, "success");
});
// End Set bounty points










// Begin Set Wins
new Hack(category.player, "Set Wins").setClick(async () => {
    const amount = await NumberInput.fire("Wins", "What number do you want to set your wins to?", "question");
    if (amount.value === undefined) return;
    player.data.win = +amount.value;
    return Toast.fire("Success!", `You have set your win${amount.value != 1 ? "s" : ""} to ${amount.value}.`, "success");
});
// End Set Wins






// Begin Set Losses
new Hack(category.player, "Set Losses").setClick(async () => {
    const amount = await NumberInput.fire("Losses", "What number do you want to set your losses to?", "question");
    if (amount.value === undefined) return;
    player.data.loss = +amount.value;
    return Toast.fire("Success!", `You have set your loss${amount.value != 1 ? "es" : ""} to ${amount.value}.`, "success");
});
// End Set Losses











// Begin Set Name (Client Side only)
new Hack(category.player, "Set name (Client side only)").setClick(async () => {
    const name = await Input.fire("What would you like to set your name to?");
    if (!name.value) return;
    player.getName = () => {
        return name.value;
    };
    player.appearanceChanged = true;
    return Toast.fire("Changed!", "Your name was changed.");
});
// End Set Name (Client Side only)







// Begin Uncap player level
new Hack(category.player, "Uncap player level (client side only)").setClick(async () => {
    const level = await NumberInput.fire("Level", "What would you like to set your level to? (Can be >100)", "question");
    if (!level.value) return;
    localStorage.setItem("level", level.value);
    eval(`player.getLevel = () => {return ${level.value}}`);
    return Toast.fire("Updated!", "Your level has been successfully updated", "success");
});
// End Uncap player level





// Begin get all achievements
new Hack(category.player, "Get all achievements").setClick(async () => {
    for (var i = 0; i < 100; i++) {
        player.achievements.data.progress[i] = 10;
    }

    return Toast.fire("Success!", "Obtained all achievements!", "success");
});
// End get all achievements





// Begin Fix Morph Crash
new Hack(category.player, "Fix Morph Crash").setClick(async () => {
    player.getPlayerData().playerTransformation = undefined;
    player.appearanceChanged = true;

    return Toast.fire("Success!", "Fixed morph crash bug.", "success");
});
// End Fix Morph Crash





// Begin Permanent Morph
new Hack(category.player, "Permanent Morph", "Makes Your Current Morph Last Forever.").setClick(async () => {
    if (!player.data.playerTransformation) {
        return Swal.fire("No Morph Active", "Please use a Morph Marble and try again.", "error");
    }
    player.data.playerTransformation.maxTime = Infinity;
    player.data.playerTransformation.timeRemaining = Infinity;
    return Toast.fire("Success!", "You're morph will last forever!", "success");
});
// End Permanent Morph










// Begin Set Dark Tower Floor
new Hack(category.player, "Set Dark Tower Floor").setClick(async () => {
    // @ts-expect-error
    const floor = await NumberInput.fire({
        title: "What floor do you want to be on, in the dark tower.",
        icon: "question",
        // @ts-expect-error
        inputValidator: (res) => (res > 100 || res < 1) ? `You can only be on floors from 1-100 not ${res}` : false
    });
    if (!floor.value) return;
    player.data.tower = parseInt(floor.value);
    return Toast.fire("Success!", `Successfully set dark tower floor to ${floor}!`, "success");
});
// End Set Dark Tower Floor





// Begin Get UserID
new Hack(category.player, "Get UserID").setClick(async () => {

    const UserID: number = player.userID;
    navigator.clipboard.writeText(UserID.toString()).then(function() {


        console.log("Async: Copying to clipboard was successful!");

        return Swal.fire({
            title: "User ID",
            html: `Here is your User ID: <br> <code> ${UserID} </code> <br> You can use this for copying your account. <br> <br> Your UserID is has also been copied to your clipboard.`,
            icon: "info"
        });


    }, function(err) {

        console.error("Async: Could not copy text: ", err);

        return Swal.fire({
            title: "User ID",
            html: `Here is your User ID: <br> <code> ${UserID} </code> <br> You can use this for copying your account.`,
            icon: "info"
        });


    });

});
// End Get UserID





// Begin Copy Account
new Hack(category.player, "Copy Account", "Copy Account From userID").setClick(async () => {
    const userID = (await NumberInput.fire("What is the userID of the account you want to copy?", undefined, "question")).value;
    if (!userID) return;
    if (!(await Confirm.fire("Are you sure you want to copy the account?", "This will replace all data on your account with the account your copying."))) return;
    const playerData = await (await fetch(`https://api.prodigygame.com/game-api/v2/characters/${userID}?fields=inventory%2Cdata%2CisMember%2Ctutorial%2Cpets%2Cencounters%2Cquests%2Cappearance%2Cequipment%2Chouse%2Cachievements%2Cstate&userID=${userID}`, {
        headers: {
            Authorization: localStorage.JWT_TOKEN
        }
    })).json();
    await fetch(`https://api.prodigygame.com/game-api/v3/characters/${userID}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.JWT_TOKEN
        },
        body: JSON.stringify({
            data: JSON.stringify(playerData[userID]),
            userID: player.userID
        }),
        method: "POST"
    });
    return Toast.fire("Success!", "Copied Account Successfully! Please reload.", "success");
});
// End Copy Account





// Begin Set Grade
new Hack(category.player, "Set Grade").setClick(async () => {
    const grade = await NumberInput.fire("What number do you want to set your grade to?");
    if (!grade.value) return;
    player.grade = parseInt(grade.value);
    return Toast.fire("Success", `Successfully changed grade to ${grade}!`, "success");
});
// End Set Grade




// END PLAYER HACKS
