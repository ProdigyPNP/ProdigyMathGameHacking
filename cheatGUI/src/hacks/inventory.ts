// Inventory Hacks
// @ts-nocheck


// BEGIN IMPORTS
import { category } from "../index"; // Import the Cheat GUI bases.
import Hack from "../class/Hack";
import { Swal, Toast, Confirm, NumberInput } from "../utils/swal"; // Import Swal, Toast, NumberInput, and Confirm from swal
import { _, saveCharacter, VERY_LARGE_NUMBER, player } from "../utils/util"; // Import Prodigy typings
import { names, ids, itemify } from "../utils/hackify"; // Import some conversion functions and arrays
// END IMPORTS




// BEGIN INVENTORY HACKS



// Begin Item Stacker
new Hack(category.inventory, "Item stacker").setClick(async () => {
    const num = await NumberInput.fire("Amount", "How many of every item would you like?", "question");
    if (!num.value) return;
    if (!(await Confirm.fire("Are you sure you want to get all items in the game?")).value) return;
    ids.forEach(id => {
        // @ts-expect-error
        player.backpack.data[id] = itemify(_.gameData[id].filter(l => id === "follow" ? ![125, 126, 127, 128, 129, 134, 135, 136, 137].includes(l.ID) : l), num.value);
    });
    // @ts-expect-error
    _.gameData.dorm.forEach(x =>
        player.house.data.items[x.ID] = {
            A: [],
            N: num.value
        }
    );

    // Remove bounty notes... because they're very spammy
    // @ts-expect-error
    const bountyIndex = () => player.backpack.data.item.findIndex(v => v.ID === 84 || v.ID === 85 || v.ID === 86);
    while (bountyIndex() > -1) player.backpack.data.item.splice(bountyIndex(), 1);

    return Toast.fire("Success!", "All items added!", "success");
});
// End Item Stacker





// Begin Clear Inventory
new Hack(category.inventory, "Clear inventory").setClick(async () => {
    if (!(await Confirm.fire("Are you sure you want to clear your inventory?")).value) return;
    Object.keys(player.backpack.data).forEach(d => player.backpack.data[d] = [])
    Toast.fire("Success!", "Inventory cleared.", "success");
});
// End Clear Inventory





// Begin Selector (Basic)
new Hack(category.inventory, "Selector (Basic)").setClick(async () => {
    // @ts-ignore
    const val = await Swal.fire({
        title: "What would you like to obtain?",
        input: "select",
        inputOptions: names,
        inputPlaceholder: "Select...",
        // @ts-expect-error
        inputValidator: res => res ? "" : "Please select which you'd like to obtain.",
        showCancelButton: true
    }).then(async val => {
        const num = parseInt(val.value);
        const name = names[num];
        const id = ids[num];
        if (!name) return;
        const amt = await NumberInput.fire("Amount", "How many each object would you like?", "question");
        if (!amt.value) return;
        if (!(await Confirm.fire(`Are you sure you want to get all ${name.toLowerCase()}?`)).value) return;
        // @ts-expect-error
        player.backpack.data[id] = itemify(_.gameData[id].filter(a => {
            return id === 'follow' ? ![125, 126, 127, 128, 129, 134, 135, 136, 137].includes(a.ID) : a
        }), amt.value);
        Toast.fire(
            `${name} Added!`,
            `All ${name.toLowerCase()} have been added to your inventory!`,
            "success"
        );
        saveCharacter();
    });
});
// End Selector (Basic)







// Begin Selector (Advanced)
new Hack(category.inventory, "Selector (Advanced)", "Choose a specific object and quantity to obtain.").setClick(async () => {
    // @ts-expect-error
    const val = await Swal.fire({
        title: "What would you like to obtain?",
        input: "select",
        inputOptions: names,
        inputPlaceholder: "Select...",
        // @ts-expect-error
        inputValidator: res => res ? "" : "Please select which you'd like to obtain.",
        showCancelButton: true
    }).then(async val => {
        if (!_.gameData[ids[val.value]]) return;
        const objs: [] = [];
        // @ts-expect-error
        _.gameData[ids[val.value]].forEach(elem => { objs.push(elem.data.name); });
        // @ts-expect-error
        const spec = await Swal.fire({
            title: `What specific object categorized as ${names[val.value].toLowerCase()} would you like to get?`,
            input: "select",
            inputOptions: objs,
            inputPlaceholder: "Select...",
            // @ts-expect-error
            inputValidator: res => res ? "" : "Please select which you'd like to get.",
            showCancelButton: true
        }).then(async spec => {
            const correct = parseInt(spec.value);
            if (!_.gameData[ids[val.value]][correct]) return;
            const amt = await NumberInput.fire("Amount", "How many of the object would you like?", "question");
            if (!amt.value) return;
            // @ts-expect-error
            if (player.backpack.data[ids[val.value]].findIndex(e => e.ID === _.gameData[ids[val.value]][correct].ID) === -1) {
                player.backpack.data[ids[val.value]].push({
                    ID: _.gameData[ids[val.value]][correct].ID,
                    N: amt.value
                });

            } else {
                // @ts-expect-error
                const num = player.backpack.data[ids[val.value]].findIndex(e => e.ID === _.gameData[ids[val.value]][correct].ID);
            }

            console.log(_.gameData[ids[val.value]][correct].ID);

            saveCharacter();
            return Toast.fire(`${names[val.value]} Added!`, `Your selected ${names[val.value].toLowerCase()} have been added.`, "success");
        });
    });
});
// End Selector (Advanced)



// Begin Obtain All Furniture
new Hack(category.inventory, "Obtain All Furniture").setClick(async () => {
    const amt = await NumberInput.fire("Amount", "How many of each piece of furniture would you like?", "question");
    if (!amt.value) return;
    if (!(await Confirm.fire("Are you sure you want to get all furniture?")).value) return;
    // @ts-expect-error
    _.gameData.dorm.forEach(x =>
        player.house.data.items[x.ID] = {
            A: [],
            N: amt.value
        }
    );
    return Toast.fire("Furniture Added!", "All furniture has been added to your inventory!", "success");
});
// End Obtain All Furniture



// Begin Obtain All Mounts
new Hack(category.inventory, "Obtain All Mounts", "This gives you all of the mounts in the game.").setClick(async () => {
    player.backpack.data.mount = itemify(_.gameData.mount, 1);
    return Toast.fire("Mounts Added!", "All mounts have been added to your inventory!");
});
// End Obtain All Mounts




// Begin Remove Item
new Hack(category.inventory, "Remove item").setClick(async () => {
    // @ts-expect-error
    const category = await Swal.fire({
        title: "What category would you like to remove an item from?",
        input: "select",
        inputOptions: names,
        inputPlaceholder: "Select...",
        // @ts-expect-error
        inputValidator: res => res ? "" : "Please select which you'd like to obtain.",
        showCancelButton: true
    });
    if (!_.gameData[ids[category.value]]) return;
    // @ts-expect-error
    const objs = _.gameData[ids[category.value]].map(elem => elem.data.name);
    let item = await Swal.fire({
        title: `What specific object categorized as ${names[category.value].toLowerCase()} would you like to remove?`,
        input: "select",
        inputOptions: objs,
        inputPlaceholder: "Select...",
        inputValidator: res => res ? "" : "Please select which you'd like to get.",
        showCancelButton: true
    });
    // @ts-expect-error
    item = parseInt(item.value);
    if (!_.gameData[ids[category.value]][item]) return;
    const amt = await NumberInput.fire("Amount", "How many of the object would you like to remove?", "question");
    if (!amt.value) return;
    // @ts-expect-error
    if (player.backpack.data[ids[category.value]].findIndex(e => e.ID === _.gameData[ids[category.value]][item].ID) === -1) {
        await Swal.fire("Item Does Not Exist", `You do not have any ${_.gameData[ids[category.value]][item].name}.`, "error");
        return;
    }
    // @ts-expect-error
    const num = player.backpack.data[ids[category.value]].findIndex(e => e.ID === _.gameData[ids[category.value]][item].ID);
    player.backpack.data[ids[category.value]][num].N -= parseInt(amt.value);
    if (player.backpack.data[ids[category.value]][num].N <= 0) {
        player.backpack.data[ids[category.value]].splice(num, 1); // if the amount is 0 or below then the item should not exist
    }

    saveCharacter();
    return Toast.fire("Removed!", `Successfully removed ${amt.value} ${_.gameData[ids[category.value]][item].name}!`, "success");
});
// End Remove Item







// Begin Obtain All Furniture
new Hack(category.inventory, "Obtain All Furniture").setClick(async () => {
    if (!(await Confirm.fire("Are you sure you want to get all furniture?")).value) {
        return console.log("Cancelled.");
    } else {
        // @ts-expect-error
        _.gameData.dorm.forEach(x =>
            player.house.data.items[x.ID] = {
                A: [],
                N: VERY_LARGE_NUMBER
            }
        );
    }
    return Toast.fire("Furniture Added!", "All furniture have been added to your inventory!", "success");
});
// End Obtain All Furniture





// END INVENTORY HACKS
