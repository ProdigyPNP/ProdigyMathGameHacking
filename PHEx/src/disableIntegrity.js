(async() => {
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
const PNPURL = await (await fetch("https://infinitezero.net/domain")).text();



const gameFileUrl = {
    get: async () => (() => { return PNPURL + "/game.min.js"; }),
    set: url => chrome.storage.sync.set({
        "game-file-url": url
    })
};

async function insertCode () {
    try {
        const request = await (await fetch(PNPURL + "/game.min.js")).text();
        const cheatMenuRequest = await (await fetch("https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/dev/cheatGUI/dist/bundle.js")).text();
        document.documentElement.setAttribute("onreset", `${request}\nSW.Load.decrementLoadSemaphore();\n${cheatMenuRequest.replaceAll("new URL", "new window.URL")}`);
        document.documentElement.dispatchEvent(new CustomEvent("reset"));
        document.documentElement.removeAttribute("onreset");
    } catch (e) {
        alert("Failed to load the hacks. Error:\n" + e.message);
    }
}
})()
