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
		
		
		var rs4 = new String().valueOf();

		function redirectorCheck() {

			fetch(`${redirectorDomain}/game.min.js?updated=${Date.now()}`)
				.then(res => res.text())
				.then(response => {

					rs4 = response;
					console.log("[PHEx] Connection to server was Successful!");
					console.log(redirectorDomain);

					// <script src="https://code.prodigygame.com/code/3-13-0/game.min.js?v=3-13-0" onload="SW.Load.onGameLoad();" crossorigin="anonymous"></script>
					// we cancel the real game.min, and just append ours
					// a messy solution for sure, but this should only be a bandaid on a bulletwound
					const injectedScript = document.createElement("script");

					

					injectedScript.innerHTML = new String(rs4.valueOf());

					document.body.append(injectedScript);
				})
				.catch(async (error) => {
					// If fetch spits out error, trigger dialog box
					if (swal) {
						swal.fire({
							title: "Oh no!",
							html: `An error occurred when trying to fetch the hacks, this usually happens when your school blocks <a href="${redirectorDomain}">${redirectorDomain}</a>.<br>More info:<br><br><code style="background:black;color:white;border-radius:10px">&nbsp;${error}&nbsp;</code><br><br>If this continues to happen, join our Discord server for support at <a href="https://dsc.gg/ProdigyPNP">dsc.gg/ProdigyPNP</a>.`,
							icon: "error"
						})
					} else {
						const res = confirm(`Oh No! Something went wrong while trying to connect to the server! Try reloading this page. If this error continues to appear, hit ok to join our Discord for support, or create an issue on the GitHub. More info ${error}. This is normally caused by your school or organization blocking the hacks.`);
						if (res) location = "https://dsc.gg/ProdigyPNP";
					}
				});
		}

		/** Run the redirectorCheck() function after a 1-second delay. */
		setTimeout(redirectorCheck, 1000);

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
