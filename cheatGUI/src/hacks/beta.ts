// Beta Hacks




// BEGIN IMPORTS
import { Swal, Toast, NumberInput, Input, Confirm } from "../utils/swal"; // Import Swal, Toast, NumberInput, Input, and Confirm from swal
import { Hack, category, Toggler } from "../index"; // Import the Cheat GUI bases.
import { _, getItem, VERY_LARGE_NUMBER, prodigy, saveCharacter, player, current} from "../utils/util";  // Import prodigy typings, and VERY_LARGE_NUMBER
import { ids, itemify, runeify, getPet } from "../utils/hackify"; // Import runeify and some arrays
import { PopupInterval } from "../utils/popupCloser";
// END IMPORTS



// BEGIN BETA HACKS


// Begin Switch Branch
new Hack(category.beta, "Switch Branch", "Loads a different branch of cheatGUI for you.").setClick(async () => {

    const branches_fetch : string = await (await fetch("https://api.github.com/repos/ProdigyPNP/ProdigyMathGameHacking/branches")).text()
    let branches : Map<string, string> = new Map();

    JSON.parse(branches_fetch).forEach((e : any) => {
        branches.set(e.name, e.name);
    });

    const branch = await (await Swal.fire({
        title: "Select Branch",
        inputOptions: branches,
    })).value;

    if (!branch) return;

    return await eval(await (await fetch(`https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/${branch}/cheatGUI/dist/bundle.js`)).text());
});



// Begin get all Runes
new Hack(category.beta, "Get all Runes [BETA]").setClick(async () => {
    if (!(await Confirm.fire({
            title: "Hang on!",
            html: "This hack may damage your account with various bugs, for example you may be unable to do Rune Run.<br><br>Proceed?",
            icon: "warning"
        })).value) {
        return;
    }

    const amount = parseInt((await NumberInput.fire({
        title: "Amount",
        text: "How many of each would you like?",
        icon: "question",
        inputValidator: (res: any) => res ? "" : "Please select which you'd like to get."
    })).value);
    if (isNaN(amount)) return;
    let mod;


    Array.from(_.instance.prodigy.gameContainer._inversifyContainer._bindingDictionary._map).forEach(e => {
        try {
            // @ts-expect-error
            if (_.instance.prodigy.gameContainer.get(e[0]).battleData) {
                // @ts-expect-error
                mod = e[0];
            }
        } catch {
            // @ts-expect-error
            console.log(`Error for ${e[0]}`);
        }
    });

    _.instance.prodigy.gameContainer.get(mod).battleData._secureCharacterState._data.inventory.orb = runeify(_.gameData.orb, amount);
    return Toast.fire("Runes Added!", "Your runes have been added!", "success");
});
// End get all Runes






// Begin Edit Pet
new Hack(category.beta, "Edit Pet [BETA]", "Edit a pet.").setClick(async () => {
    if (!(await Confirm.fire({
            title: "Hang on!",
            html: "This hack may damage your account with various bugs, for example you may be unable to do Rune Run.<br><br>Proceed?",
            icon: "warning"
        })).value) {
        return console.log("Cancelled.");
    }

    const pet = await getPet("Choose the pet to edit.");
    if (pet === undefined) return;
    const selected = player.kennel.data[pet];
    const opt = await Swal.fire({
        input: "select",
        inputOptions: {
            level: "Level",
            attacks: "Attacks",
            name: "Name"
        },
        title: "Edit Property",
        text: "What do you want to edit?"
    });
    if (opt.value === undefined) return;
    if (opt.value === "level") {
        const level = await NumberInput.fire(
            "Level Number",
            "What level do you want to set your pet to?",
            "question"
        );
        if (level.value === undefined) return;
        selected.level = +level.value;
        return Toast.fire("Success!", "The pet's level has been set.", "success");
    } else if (opt.value === "attacks") {
        const attackList = _.gameData.spell;
        const div = document.createElement("div");
        const select = document.createElement("select");
        select.classList.add("selectSpell");
        for (const spell of attackList) {
            const spellElement = document.createElement("option");
            spellElement.value = spell.ID.toString();
            spellElement.innerText = `${spell.ID}: ${spell.name} (${spell.data.element}) - Damage: ${spell.data.damage}`;
            select.options.add(spellElement);
        }
        div.append(select);
        div.append(select.cloneNode(true));
        const attacks = await Swal.fire({
            title: "Attack List",
            focusConfirm: false,
            showCancelButton: true,
            html: div,
            preConfirm: () => {
                return Array.prototype.slice
                    .call(document.querySelectorAll(".selectSpell"))
                    .map((x: HTMLSelectElement) => x.options[x.selectedIndex].value);
            }
        });
        if (attacks.value === undefined) return;
        (selected.foreignSpells as number[]).splice(0, 2, ...attacks.value.map((x: string) => +x));
        return Toast.fire("Attacks updated!", "The attack list of the pet you selected has been edited.", "success");
    } else if (opt.value === "name") {
        const name = await Input.fire("Input Name", "What do you want to name the pet?", "question");
        if (name.value === undefined) return;
        selected.nickname = name.value;
        return Toast.fire("Successfully renamed!", "The name of the pet has been changed.", "success");
    }
});
// End Edit Pet





// Begin Morph Player
new Hack(category.beta, "Morph Player [BETA]", "Morph into a pet, furnishing, or follow.").setClick(async () => {

    if (!(await Confirm.fire("This hack is in BETA", "Expect bugs, and it might not work properly.")).value) {
        return console.log("Cancelled");;
    }

    const morphType = await Swal.fire({
        title: "Which morph type?",
        input: "select",
        inputOptions: {
            pet: "Pet",
            dorm: "Furniture",
            follow: "Follow"
        },
        inputPlaceholder: "Morph Type",
        inputValidator: res => res ? "" : "Please select a morph type.",
        showCancelButton: true
    });

    if (!morphType?.value) return;

    // swal inputOptions accepts an object, the property being the value it returns, the value being what it displays
    // kinda weird to explain, just look at how morphType does it
    // we want it to display a pretty string, and return the petID
    const morphOptions = {};
    // @ts-expect-error
    _.gameData[morphType.value].forEach((morph) => morphOptions[morph.ID] = `${morph.name} (${morph.ID})`);

    const morphID = await Swal.fire({
        title: "Which morph?",
        input: "select",
        inputOptions: morphOptions,
        inputPlaceholder: "Morph ID",
        inputValidator: res => res ? "" : "Please select a morph ID.",
        showCancelButton: true
    });

    if (!morphID.value) return;
    player.getPlayerData().playerTransformation = {
        transformType: morphType.value,
        transformID: morphID.value,
        maxTime: 60 * 60 * 1000,
        timeRemaining: 60 * 60 * 1000
    };
    player.appearanceChanged = true;

    return Toast.fire("Morphed!", "You've been morphed.", "success");
});
// End Morph Player



new Toggler(category.beta, "(client side) Toggle Invisibility [BETA]", "Lets you appear invisible on your own screen.").setEnabled(async () => {
    // current.user.alpha = 0;
    current.user.visible = false;
}).setDisabled(async() => {
    current.user.visible = true;
});


// Begin Toggle Close Popups
new Toggler(category.beta, "Toggle Close Popups [BETA]", "Automatically closes popups in Prodigy.").setEnabled(async () => {
    PopupInterval(true);
    return Toast.fire("Enabled", "Toggle Close Popups is now enabled.", "success");
}).setDisabled(async() => {
    PopupInterval(false);
    return Toast.fire("Enabled", "Toggle Close Popups is now disabled.", "success");
});
// End Toggle Close Popups




// Begin Hypermax Account
new Hack(category.beta, "Hypermax Account [BETA]").setClick(async () => {
    // Hypermax Account was made by gemsvidø.

    // ============================================
    // PRE MAXING PROCESS



    if (!(await Confirm.fire({
            title: "Hang on!",
            html: "This hack will damage your account with various bugs, for example you may be unable to do Rune Run/Arena, amd you will recieve 418s and inavtivity kicks.<br><br>Proceed?",
            icon: "warning"
        })).value) {
        return;
    }




    // ============================================
    // PLAYER HACKS

    // Set the players gold to 09900000
    player.data.gold = 9900000;
    console.log("Set player gold to 9900000.")


    // Set the players level to 100
    const level = 100;
    // @ts-expect-error
    const h = level.value - 2;
    const xpConstant = 1.042;
    player.data.stars = Math.round((1 - Math.pow(xpConstant, h)) / (1 - xpConstant) * 20 + 10);
    player.data.level = 100;
    player.getLevel = () => {
        return player.data.level;
    };
    console.log("Set player level to 100");


    // Set the players bounty points to 100 (max)
    player.data.bountyScore = 100;
    console.log("Set player's bounty points to 100.");


    // Set the players conjure cubes to 100 (max)
    for (let i = 0; i < Math.min(99, 100); i++) {
        prodigy.giftBoxController.receiveGiftBox(null, getItem("giftBox", 1));
    }
    console.log("Obtained 100 conjure cubes.");


    // Set the player's wins to VERY_LARGE_NUMBER
    player.data.win = VERY_LARGE_NUMBER;
    console.log("Set player's wins to VERY_LARGE_NUMBER");


    // Set the player's losses to -9223372036854775808 (Java long limit, ik its irrelevant)
    player.data.loss = -9223372036854775808;
    console.log("Set player's losses to -9223372036854775808.");



    // Set the players damage multiplier to VERY_LARGE_NUMBER
    player.modifiers.damage = VERY_LARGE_NUMBER;
    console.log("Enabled damage multiplier.");


    // Set the players PVP health to VERY_LARGE_NUMBER
    player.pvpHP = VERY_LARGE_NUMBER;
    player.getMaxHearts = () => VERY_LARGE_NUMBER;
    console.log("PvP health obtained.")




    // Get all achievements
    for (var i = 0; i < 100; i++) {
        player.achievements.data.progress[i] = 10;
    }
    console.log("Obtained all achievements.");

    // Set the players dark tower floor to 100
    player.data.tower = 100;
    console.log("Set tower floor to 100.");

    // PLAYER HACKS
    // ============================================
    // ============================================
    // BATTLE HACKS


    // Max out the players HP
    player.getMaxHearts = () => VERY_LARGE_NUMBER;
    player.pvpHP = VERY_LARGE_NUMBER;
    player.data.hp = VERY_LARGE_NUMBER;
    console.log("Maxed out PvE health.");


    // BATTLE HACKS
    // ============================================
    // ============================================
    // INVENTORY HACKS



    // Get 990000 of all items
    const num = 990000;

    ids.forEach(id => {
        // @ts-expect-error
        player.backpack.data[id] = itemify(_.gameData[id].filter(l => id === "follow" ? ![125, 126, 127, 128, 129, 134, 135, 136, 137].includes(l.ID) : l), num.value);
    });
    // @ts-expect-error
    _.gameData.dorm.forEach(x =>
        // @ts-expect-error
        player.house.data.items[x.ID] = { A: [], N: num.value }
    );

    // Remove bounty notes
    // @ts-expect-error
    const bountyIndex = () => player.backpack.data.item.findIndex(v => v.ID === 84 || v.ID === 85 || v.ID === 86);
    while (bountyIndex() > -1) player.backpack.data.item.splice(bountyIndex(), 1);
    Toast.fire("Success!", "All items added!", "success");

    console.log("All items added!");



    // Get all Mounts
    player.backpack.data.mount = itemify(_.gameData.mount, 1);
    console.log("Added all mounts.");


    // Get 990000 of all furniture
    const amt = 990000;
    // @ts-expect-error
    _.gameData.dorm.forEach(x =>
        // @ts-expect-error
        player.house.data.items[x.ID] = { A: [], N: amt.value }
    );
    console.log("Added 990000 of all furniture.");


    // INVENTORY HACKS
    // ============================================
    // ============================================
    // PET HACKS


    // Get All Pets

    // add pets
    // @ts-expect-error
    _.gameData.pet.forEach(x => {
        player.kennel.addPet(x.ID.toString(), VERY_LARGE_NUMBER, 26376, 100);
    });

    // add encounter info
    player.kennel._encounterInfo._data.pets = [];
    _.gameData.pet.map((pet: {
        ID: number
    }) => {
        player.kennel._encounterInfo._data.pets.push({
            firstSeenDate: Date.now(),
            ID: pet.ID,
            timesBattled: 1,
            timesRescued: 1
        });
    });
    // Fix broken pets
    // @ts-expect-error
    player.kennel.petTeam.forEach(v => {
        if (v && (v as any).assignRandomSpells)(v as any).assignRandomSpells();
    });
    console.log("Added all pets.");




    // Get all Mythical Epics
    // @ts-expect-error
    const mythepics = _.gameData.pet.filter(x => [158, 166, 168].includes(x.ID));
    // @ts-expect-error
    mythepics.forEach(x => {
        player.kennel.addPet(x.ID.toString(), VERY_LARGE_NUMBER, 26376, 100);
    });
    // Fix broken pets
    // @ts-expect-error
    player.kennel.petTeam.forEach(v => {
        if (v && (v as any).assignRandomSpells)(v as any).assignRandomSpells();
    });
    console.log("Added Mythical Epics.");



    // Get all Legacy Epics
    // @ts-expect-error
    const legepics = _.gameData.pet.filter(x => [125, 126, 127, 128, 129, 130, 131, 132, 133].includes(x.ID));
    // @ts-expect-error	
    legepics.forEach(x => {
        player.kennel.addPet(x.ID.toString(), VERY_LARGE_NUMBER, 26376, 100);
    });
    // Fix broken pets
    // @ts-expect-error
    player.kennel.petTeam.forEach(v => {
        if (v && (v as any).assignRandomSpells)(v as any).assignRandomSpells();
    });
    console.log("Added Legacy Epics.");


    // PET HACKS
    // ============================================
    // ============================================
    // UTILITY HACKS


    // Disable Inactivity Kick
    _.constants.constants["GameConstants.Inactivity.LOG_OUT_TIMER_SECONDS"] = 0;
    console.log("Inactivity Kick Disabled.");

    // 20x walkspeed
    player._playerContainer.walkSpeed = 20;
    console.log("Player walkspeed set to 20.");


    // UTILITY HACKS
    // ============================================
    // ============================================
    // RUNES


    const amount = 100;
    let mod;
    Array.from(_.instance.prodigy.gameContainer._inversifyContainer._bindingDictionary._map).forEach(e => {
        try {
            // @ts-expect-error
            if (_.instance.prodigy.gameContainer.get(e[0]).battleData) {
                // @ts-expect-error
                mod = e[0];
            }
        } catch {
            // @ts-expect-error
            console.log(`Error for ${e[0]}`);
        }
    });


    _.instance.prodigy.gameContainer.get(mod).battleData._secureCharacterState._data.inventory.orb = runeify(_.gameData.orb, amount);




    // RUNES
    // ============================================
    // ============================================
    // EQUIP CELESTIAL GEAR



    player.equipment.setHat(200);
    player.equipment.setBoots(93);
    player.equipment.setOutfit(161);
    player.equipment.setWeapon(196);




    // EQUIP CELESTIAL GEAR
    // ============================================
    // ============================================
    // POST MAXING PROCESS


    // Save the player data to make sure that the max worked
    saveCharacter();
    console.log("Character Saved.");

    // Refresh the players appearance
    player.appearanceChanged = true;
    console.log("Appearance Refreshed.");


    // Close all popups
    _.instance.prodigy.open.menuCloseAll();
    console.log("Popups closed.");

    // Save again after closing popups, for good measure.
    saveCharacter();
    console.log("Character Saved.");


    // POST MAXING PROCESS
    // ============================================
    console.log("Max Account Successful.");

    return Toast.fire("Maxed!", `Check your backpack!`, "success");
});
// End Hypermax Account



// END BETA HACKS
