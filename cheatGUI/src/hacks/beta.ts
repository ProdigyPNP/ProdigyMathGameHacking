// Beta Hacks




// BEGIN IMPORTS
import { Swal } from "../utils/swal"; // Import Swal, Toast, NumberInput, Input, and Confirm from swal
import { category } from "../index"; // Import the Cheat GUI bases.
import Toggler from "../class/Toggler";
import Hack from "../class/Hack";
import { _, current} from "../utils/util";  // Import prodigy typings, and VERY_LARGE_NUMBER
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
        html: `Select which branch of ProdigyPNP you'd like to use.`,
        input: "select",
        inputOptions: branches,
    })).value;

    if (!branch) return;

    return await eval(await (await fetch(`https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/${branch}/cheatGUI/dist/bundle.js`)).text());
});










new Toggler(category.beta, "(client side) Toggle Invisibility [BETA]", "Lets you appear invisible on your own screen.").setEnabled(async () => {
    // current.user.alpha = 0;
    current.user.visible = false;
}).setDisabled(async() => {
    current.user.visible = true;
});






// END BETA HACKS
