const browser = chrome || browser;

// Ignore X-Frame Headers
const HEADERS_TO_STRIP_LOWERCASE = [
	"content-security-policy",
	"x-frame-options",
];

browser.webRequest.onHeadersReceived.addListener(
	details => ({
		responseHeaders: details.responseHeaders.filter(header => !HEADERS_TO_STRIP_LOWERCASE.includes(header.name.toLowerCase()))
	}),
	{ urls: ["<all_urls>"] },
	["blocking", "responseHeaders", "extraHeaders"]
);

function get(key) {
	return new Promise(resolve => {
		browser.storage.local.get([key], result => {
			resolve(result[key]);
		});
	});
};

// Redirect Requests
browser.webRequest.onBeforeRequest.addListener(async details => {
	// get options from local
	const url = await get("url");
	const checked = await get("checked");
	const redirectorDomain = (url && checked) ? url : "https://hacks.prodigyhacking.com";

	if (details.url.startsWith("https://code.prodigygame.com/code/") && details.url.includes("/game.min.js")) {
		fetch("https://raw.githubusercontent.com/Prodigy-Hacking/ProdigyMathGameHacking/master/PHEx/status.json").then(response => response.json()).then(async data => {
			if (data.offline == true) {
				eval(await (await fetch("https://unpkg.com/sweetalert2")).text())
				if (swal) {
					swal.fire({
						title: "Oh no!",
						html: `Our hacks are currently having some issues, and we're working on it.`,
						icon: "error"
					})
				} else {
					const res = confirm(`Uh Oh! Hacks look to be down. Hit OK to go to our discord to get updates on when they'll go back up!`);

					if (res) location = "https://discord.gg/XQDfbfq";
				}
			}
		});

		// Blocking gamemin
		browser.webRequest.onBeforeRequest.addListener(
			_ => ({ cancel: true }),
			{ urls: ["*://code.prodigygame.com/code/*"] },
			["blocking"]
		);

		// see disableIntegrity.js, we append the new game.min to the document
		return { cancel: true };
	} else if (details.url.startsWith("https://code.prodigygame.com/js/public-game")) {
		return {
			redirectUrl: `${redirectorDomain}/public-game.min.js?hash=${details.url.split("public-game-")[1].split(".")[0]}&updated=${Date.now()}`
		};
	}
}, {
	urls: [
		"https://code.prodigygame.com/code/*/game.min.js?v=*",
		"https://code.prodigygame.com/js/public-game-*.min.js"
	],
	types: ["script", "xmlhttprequest"],
}, ["blocking"]);