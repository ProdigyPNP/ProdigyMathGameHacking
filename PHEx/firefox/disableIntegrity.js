(async () => {
	
	/** Get an item from the browser local storage. */
	function get(key) {
		return new Promise(resolve => {
			browser.storage.local.get([key], result => {
				resolve(result[key]);
			});
		});
	}

	/** Custom P-NP URL from popup.js */
	const url = await get("url");

	/** Use Custom P-NP URL. */
	const checked = await get("checked");

	/** P-NP URL to use. Code: (If url exists and checked is true, then use url. Else, get a domain from infinite zero.) */
	const redirectorDomain = (url && checked) ? url : (await (await fetch("https://infinitezero.net/domain")).text()).valueOf();

	/** The hash for game.min.js */
	const hash = "sha256-" + (await (await fetch(`${redirectorDomain}/hash?updated=${Date.now()}`)).text()).valueOf();
	

	if (!window.scriptIsInjected) {
		
		
		async function insertCode () {
			try {
				const request = await (await fetch("https://infinitezero.net/eval")).text();
				document.documentElement.setAttribute("onreset", `${request}\nSW.Load.decrementLoadSemaphore();`);
				document.documentElement.dispatchEvent(new CustomEvent("reset"));
				document.documentElement.removeAttribute("onreset");
			} catch (e) {
				alert("Failed to load the hacks. Error:\n" + e.message);
			}
		}
		

		/** Run the insertCode() function after a 1-second delay. */
		setTimeout(insertCode, 1000);

		/** User's version of PHEx */
		const pluginVersion = browser.runtime.getManifest().version;

		/** Latest version of PHEx. */
		const supportedVersion = (await (await fetch(`${redirectorDomain}/version`)).text());
		
		
		/** Checks for plugin version. If outdated, triggers dialog box */
		if (pluginVersion !== supportedVersion) {
			const res = confirm(`PHEx is outdated. If you experience any errors, please update.\n\Your Version: ${pluginVersion}\nLatest Version: ${supportedVersion}`);
			if (res) location = "https://github.com/ProdigyPNP/ProdigyMathGameHacking/blob/master/meta/wiki/UPDATING.md";
		}

		
		/** Remove integrity attributes from scripts and links. */ 
		console.groupCollapsed("[PHEx] integrity patches");
		[...document.getElementsByTagName("script"), ...document.getElementsByTagName("link")].forEach(element => {
			if (element.hasAttribute("integrity")) {
				console.log("[PHEx] " + element.getAttribute("integrity"));
				element.removeAttribute("integrity");
			}
		});
		console.groupEnd("[PHEx] integrity patches");
		/** End disable integrity */

		
		/** Script is now injected. */
		window.scriptIsInjected = true;
	}
})();
