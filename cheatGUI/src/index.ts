// @ts-nocheck
// Prodigy Cheat GUI

import { io } from "socket.io-client"; // Import socket.io-client
import "./style.scss"; // Import SCSS style
import { saveCharacter, _ } from "./utils/util"; // Import Prodigy typings
import { statusMessage } from "./utils/status"; // Import status message
import Swal from "sweetalert2"; // Import Swal
import { License, NoLicense } from "./utils/swal";
import { IndexInfo, IndexSuccess, IndexError } from "./utils/log";

export const menu = document.createElement("div"); // Create cheat menu element
export const wrapper = document.getElementById("game-wrapper"); // Create game wrapper

document.getElementById("cheat-menu")?.remove(); // Remove any existing menu if present
document.getElementById("menu-toggler")?.remove(); // Remove any existing menu togglers if present
menu.id = "cheat-menu"; // Set menu ID to cheat-menu


menu.style = "position: fixed;top: -10%;left: 10%;right: 10%;width: 80%;height: 80%;z-index: 2;background-color: rgba(0, 0, 0, 0.5);backdrop-filter: blur(5px);"; // Set menu style

wrapper?.prepend(menu);

export const toggler = document.createElement("button"); // Create toggler class
toggler.id = "menu-toggler";
toggler.style.fontSize = "23px";
toggler.style.height = "26px";
toggler.style.width = "50px";
toggler.style.border = "1px solid rgba(0, 0, 0, 0.1)";


let visible = false;
wrapper?.prepend(toggler);
toggler.onclick = () => {
	visible = !visible;

	if (visible) {
		toggler.innerText = "▼";
		menu.style.top = "-100vh";
	} else {
		toggler.innerText = "▲";
		menu.style.top = "10%";
	}
};
toggler.onclick({} as any);

const menuleft = document.createElement("DIV");
menuleft.classList.add("menu-left");
menu.append(menuleft);

let firstCategory = true;
const addArea = (title: string) => {
	const area = document.createElement("div");

    if (firstCategory == false) {
        area.append(document.createElement("br"));
        area.append(document.createElement("br"));
    } else {
        firstCategory = false;
    }


	area.classList.add("menu-area");
	area.style.textAlign = "center";
	menuleft.append(area);

	const header = document.createElement("h1");
	header.innerText = title;
	header.style.textAlign = "center";
	header.style.color = "white";

	area.append(header);
	return area;
};

const title = document.createElement("h1");
title.classList.add("menu-title");
title.innerText = "Prodigy Hacks";
title.style.textAlign = "center";
menuleft.append(title);

const disc = document.createElement("h2");
disc.style.fontSize = "25px";
disc.style.color = "white";
disc.innerHTML = "<br>Press SHIFT to show/hide the menu. Scroll down in the menu for more hacks.";
menuleft.append(disc);

const subtitle = document.createElement("h3");
subtitle.style.fontSize = "20px";
subtitle.innerHTML = `
<p>Join our Discord <a href='https://dsc.gg/ProdigyPNP'>https://dsc.gg/ProdigyPNP</a>!</p>

<hr>
`;
subtitle.style.color = "white";
menuleft.append(subtitle);



export class Hack {
	public element: HTMLButtonElement;
	public name: String;
	private description: String;

	constructor (
		public parent: HTMLDivElement,
		name?: string,
		description?: string
	) {
		this.name = "";
		this.description = "";
		this.element = document.createElement("button");
		this.element.classList.add("menu-hack");
		this.parent.append(this.element);

		if (name) this.setName(name);
		if (description) this.setDesc(description);
	}

	setName (name: string) {
		this.element.innerText = name;
		this.name = name;
		return this;
	}

	setClick (event: () => unknown) {
		this.element.onclick = async () => {
			await event();
			saveCharacter();
			console.log(`Triggered ${this.name}.`);
		};
		return this;
	}

	setDesc (desc: string) {
		this.element.title = desc;
		this.description = desc;
		return this;
	}
}

export class Toggler extends Hack {
	enabled?: () => unknown;
	disabled?: () => unknown;
	constructor (
		public parent: HTMLDivElement,
		name?: string,
		description?: string
	) {
		super(parent, name, description);
		this.element.setAttribute("status", "false");
		this.setClick(async () => {
			this.status = !this.status;
			if (this.status) {
				localStorage.setItem(this.name, "true");
				await this.enabled?.();
			} else {
				localStorage.setItem(this.name, "false");
				await this.disabled?.();
			}
		});
	}

	get status () {
		return JSON.parse(this.element.getAttribute("status")!) as boolean;
	}

	set status (val) {
		this.element.setAttribute("status", val.toString());
	}

	setEnabled (event: () => unknown) {
		this.enabled = event;
		if (localStorage.getItem(this.name) === "true") {
			this.element.click();
		}
		return this;
	}

	setDisabled (event: () => unknown) {
		this.disabled = event;
		return this;
	}
}

export const category = {
	player: addArea("Player Hacks"),
	inventory: addArea("Inventory Hacks"),
	location: addArea("Location Hacks"),
	pets: addArea("Pet Hacks"),
	battle: addArea("Battle Hacks"),
	minigames: addArea("Minigame Hacks"),
	misc: addArea("Miscellaneous Hacks"),
	utility: addArea("Utility Hacks"),
	beta: addArea("Beta Testing | Beta Hacks may damage your account"),
	patched : addArea("Patched Hacks")
};



// If an item called hasTip is defined in the localStorage
if (!localStorage.hasTip) {
	(async () => {
	    await Swal.fire({
		    title: 'Welcome!',
		    html: `To get started with the hacks, click this dropdown!`,
	        icon: 'info',
		    backdrop: `
		        url("https://i.imgur.com/CdV9piu.png")
		        left top
		        no-repeat
		    `
       });
	})();
	localStorage.hasTip = true;
	IndexInfo("Player was shown the tip.");
} else {
	IndexInfo("Player already has tip.");
};


// If an item called "level" is defined in the localStorage
if (localStorage.getItem("level")) {
	// Then, override _.player.getLevel with the value in localStorage.
	_.player.getLevel = () => localStorage.getItem("level");

	IndexInfo("Loaded menu from localStorage.");
}


let shownMenu : boolean = true;
document.addEventListener("keydown", function (event) {
	if (event.key == "Shift") {

		IndexInfo("Shift key was pressed.");

		if (shownMenu == true) {
			// Cheats are shown, so let's hide them.
			IndexInfo("Hiding cheat menu...");
			document.getElementById("cheat-menu").style.display = "none";
			document.getElementById("menu-toggler").style.display = "none";
			shownMenu = false;
			IndexInfo("Hidden cheat menu.");
		} else {
			// Cheats are hidden, so let's show them.
			IndexInfo("Showing cheat menu...");
			document.getElementById("cheat-menu").style.display = "block";
			document.getElementById("menu-toggler").style.display = "block";
            shownMenu = true;
			IndexInfo("Shown cheat menu.");
		}
	}
});



if (process.env.NODE_ENV === "development") {
	const socket = io("http://localhost:3001");
	let used = false;
	socket.on("update", data => {
		if (used) return;
		used = true;
		socket.disconnect();
		document.getElementById("cheat-menu")?.remove();
		document.getElementById("menu-toggler")?.remove();
		eval(data);
	});
}




// LICENSE POPUPS
(async () => {



        if (!(await License.fire("ProdigyPNP", `
            <p>
            <a href="https://github.com/ProdigyPNP/ProdigyMathGameHacking/blob/master/README.md">This is free and open-source software</a>.
            If you paid for this or accessed this behind a paywall/AdFly link, demand a refund. If you sell this software, or otherwise make a commercial advantage from it, you are violating
            <a href = "https://github.com/ProdigyPNP/ProdigyMathGameHacking/blob/master/LICENSE.txt">our license</a>.
            </p>
        `)).value) {

            if (!(await NoLicense.fire("ProdigyPNP License", `
                <p>
                <strong>You need to agree to our license to use our hacks. If you changed your mind and now agree to our license, reload Prodigy.</strong>
                </p>
            `)).value) {

                // Play Prodigy without hacks
                document.getElementById("cheat-menu")?.remove(); // Remove any existing menu if present
                document.getElementById("menu-toggler")?.remove(); // Remove any existing menu togglers if present

            } else {

                // Reload Prodigy
                document.location = "";
            }


        } else {


            // Display status message.
            await statusMessage();
        }

})();