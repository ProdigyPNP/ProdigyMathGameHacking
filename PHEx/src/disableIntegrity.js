(async () => {
	function get(key) {
		return new Promise(resolve => {
			chrome.storage.local.get([key], result => {
				resolve(result[key]);
			});
		});
	}

	if (!window.scriptIsInjected) {
		// get options from local
		const url = await get("url");
		const checked = await get("checked");
		const redirectorDomain = (url && checked) ? url : "https://hacks.prodigyhacking.com";

		window.scriptIsInjected = true;

		function redirectorCheck() {
			fetch(`${redirectorDomain}/game.min.js?updated=${Date.now()}`)
				.then(res => res.text())
				.then(response => {
					console.log("Connection to server was Successful!");

					// <script src="https://code.prodigygame.com/code/3-13-0/game.min.js?v=3-13-0" onload="SW.Load.onGameLoad();" crossorigin="anonymous"></script>
					// we cancel the real game.min, and just append ours
					// a messy solution for sure, but this should only be a bandaid on a bulletwound
					const injectedScript = document.createElement("script");
					injectedScript.innerHTML = response;

					document.body.append(injectedScript);
				})
				.catch(async (error) => {
					// If fetch spits out error, trigger dialog box
					eval(await (await fetch('https://unpkg.com/sweetalert2')).text());
					if (swal) {
						swal.fire({
							title: "Oh no!",
							html: `An error occurred when trying to fetch the hacks, this usually happens when your school blocks <a href="https://hacks.prodigyhacking.com">https://hacks.prodigyhacking.com</a>.<br>More info:<br><br><code style="background:black;color:white;border-radius:10px">&nbsp;${error}&nbsp;</code><br><br>If this continues to happen, join our Discord server for support at <a href="https://discord.gg/XQDfbfq">https://discord.gg/XQDfbfq</a>.`,
							icon: "error"
						})
					} else {
						const res = confirm(`Oh No! Something went wrong while trying to connect to the server! Try reloading this page. If this error continues to appear, hit ok to join our Discord for support, or create an issue on the GitHub. More info ${error}. This is normally caused by your school or organization blocking the hacks.`);
						if (res) location = "https://discord.gg/XQDfbfq";
					}
				});
		}
		setTimeout(redirectorCheck, 1000);

		const pluginVersion = chrome.runtime.getManifest().version;
		const supportedVersion = (await (await fetch(`${redirectorDomain}/version`)).text());
		// Checks for plugin version. If outdated, triggers dialog box.
		if (pluginVersion !== supportedVersion) {
			const res = confirm("The PMGH extension is outdated. If you expierence any errors, please update. If you are on the Chrome Webstore version or any webstore, please wait. Updates take some time.");

			if (res) location = "https://github.com/Prodigy-Hacking/ProdigyMathGameHacking/wiki/How-to-Update";
		}

		// Disable integrity
		console.groupCollapsed("integrity patches");
		[...document.getElementsByTagName("script"), ...document.getElementsByTagName("link")].forEach(v => {
			if (v.integrity) {
				console.log(v.integrity);
				v.removeAttribute("integrity");
			}
		});
		console.groupEnd("integrity patches");
	}
})();
