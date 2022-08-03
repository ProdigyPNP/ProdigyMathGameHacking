const browser = chrome || browser;




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
		  urlFilter: "*://*.prodigygame.com/*",
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