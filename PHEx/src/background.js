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
const redirectorDomain = (url && checked) ? url : "https://infinitezero.net/eval";




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



const hosts = [
	"*://*.prodigygame.com/*",
  ];

  chrome.runtime.onInstalled.addListener(() => {
	chrome.declarativeNetRequest.updateDynamicRules({
	  removeRuleIds: hosts.map((h, i) => i + 1),
	  addRules: hosts.map((h, i) => ({
		id: i + 1,
		condition: {
		  domains: [chrome.runtime.id],
		  urlFilter: `||${h}/`,
		  resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "webtransport", "webbundle", "other"],
		},
		action: {
		  type: "modifyHeaders",
		  responseHeaders: [
			{header: "X-Frame-Options", operation: "remove"},
			{header: "Frame-Options", operation: "remove"},
			{header: "content-security-policy", operation: "remove"},
			{header: "Content-Security-Policy", operation: "remove"},
		  ],
		},
	  })),
	});
  });