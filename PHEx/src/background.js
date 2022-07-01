const browser = chrome || browser;

function get(key) {
	return new Promise(resolve => {
		browser.storage.local.get([key], result => {
			resolve(result[key]);
		});
	});
}


const url = await get("url");
const checked = await get("checked");
const redirectorDomain = (url && checked) ? url : "https://p-np.prodigypnp.repl.co";




const gameFileUrl = {
	get: async () => (() => { return redirectorDomain + "/game.min.js"; }),
	set: url => chrome.storage.sync.set({
		"game-file-url": url
	})
};

async function insertCode () {
	try {
		const request = await (await fetch(await gameFileUrl.get() || "https://raw.githubusercontent.com/ProdigyAPI/ProdigyGameFilePatchGenerator/master/game-files/current.js")).text();
		const cheatMenuRequest = await (await fetch(await cheatMenuUrl.get() || "https://raw.githubusercontent.com/ProdigyAPI/ProdigyX/master/dist/extension-bundle.js")).text();
		document.documentElement.setAttribute("onreset", `${request}\nSW.Load.decrementLoadSemaphore();\n${cheatMenuRequest.replaceAll("new URL", "new window.URL")}`);
		document.documentElement.dispatchEvent(new CustomEvent("reset"));
		document.documentElement.removeAttribute("onreset");
	} catch (e) {
		alert("Failed to load hack\n" + e.message);
	}
}

if (!window.scriptIsInjected) {
	window.scriptIsInjected = true;
	setTimeout(insertCode, 1000);
	console.group("integrity patches");
	[...document.getElementsByTagName("script"), ...document.getElementsByTagName("link")].forEach(v => {
		if (v.integrity) {
			console.log(v.integrity);
			v.removeAttribute("integrity");
		}
	});
	console.groupEnd();
}
// Incomplete but im just commiting it