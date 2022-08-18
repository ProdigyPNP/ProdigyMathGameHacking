/**
 * background.js
 * 
 * modified by gemsvidø for firefox support
 */



/** CSP and X-Frame headers */
const HEADERS_TO_STRIP_LOWERCASE = [
	"content-security-policy",
	"x-frame-options",
];

// Remove CSP and X-Frame headers on all Prodigy domains
browser.webRequest.onHeadersReceived.addListener(
	details => ({
		responseHeaders: details.responseHeaders.filter(header => !HEADERS_TO_STRIP_LOWERCASE.includes(header.name.toLowerCase()))
	}),
	{ urls: ["*://*.prodigygame.com/*"] },
	["blocking", "responseHeaders", "extraHeaders"]
);






/** Set a value in the local storage */
function set(key, value) {
	browser.storage.local.set({ [key]: value });
};

/** Get a value from the local storage */
function get(key) {
	return new Promise(resolve => {
		browser.storage.local.get([key], result => {
			resolve(result[key]);
		})
	})
};



// Redirect Requests
browser.webRequest.onBeforeRequest.addListener(async details => {

	/** Custom P-NP URL */
	const url = await get("url");

	/** Use custom URL */
	const checked = await get("checked");

	/** P-NP URL to be used */
	const redirectorDomain = (url && checked) ? url : await (await fetch("https://infinitezero.net/domain")).text();


	// If hacks are offline, show an alert 
	if (details.url.startsWith("https://code.prodigygame.com/code/") && details.url.includes("/game.min.js")) {
		fetch("https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/master/PHEx/status.json").then(response => response.json()).then(async data => {
			if (data.offline == true) {

				if (swal) {
					swal.fire({
						title: "Oh no!",
						html: `Our hacks are currently having some issues, and we're working on it.`,
						icon: "error"
					});
				} else {
					const res = confirm(`Uh Oh! Hacks look to be down. Hit OK to go to our discord to get updates on when they'll go back up!`);
					if (res) location = "https://dsc.gg/ProdigyPNP";
				}
			}
		});

		// Block game.min.js
		browser.webRequest.onBeforeRequest.addListener(
			_ => ({ cancel: true }),
			{ urls: ["*://code.prodigygame.com/code/*"] },
			["blocking"],
		);

		// see disableIntegrity.js, we append the new game.min to the document
		return { cancel: true };

	// Public gamemin
	} else if (details.url.startsWith("https://code.prodigygame.com/js/public-game")) {


		const hash = new String(details.url.split("public-game-")[1].split(".")[0]).valueOf();
		console.log("Public gamemin hash: " + hash)

		// add a redirectUrl header which should redirect public gamemin to our hacked public gamemin.
		return {
			redirectUrl: `${redirectorDomain}/public-game.min.js?hash=${hash}&updated=${Date.now()}`
		};
	}


}, {

	// Block gamemin and public gamemin
	urls: [
		"*://code.prodigygame.com/code/*/game.min.js*",
		"*://code.prodigygame.com/js/public-game-*.min.js*"
	],
	types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "other"],
}, ["blocking"]);