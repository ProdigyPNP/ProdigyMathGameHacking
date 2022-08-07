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
        document.documentElement.setAttribute("onreset", `${request}\nSW.Load.decrementLoadSemaphore();`);
        document.documentElement.dispatchEvent(new CustomEvent("reset"));
        document.documentElement.removeAttribute("onreset");
    } catch (e) {
        alert("Failed to load the hacks. Error:\n" + e.message);
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
    
/** User's version of PHEx */
const pluginVersion = chrome.runtime.getManifest().version;

/** Latest version of PHEx. */
const supportedVersion = (await (await fetch(`${PNPURL}/version`)).text());


/** Checks for plugin version. If outdated, triggers dialog box */
if (pluginVersion !== supportedVersion) {
    const res = confirm(`PHEx is outdated. If you experience any errors, please update.\n\Your Version: ${pluginVersion}\nLatest Version: ${supportedVersion}`);
    if (res) { location = "https://github.com/ProdigyPNP/ProdigyMathGameHacking/blob/master/meta/wiki/UPDATING.md"; }
}    
    
    
// Code by PMGH
// Modified by gemsvido, hostedposted, and Eris
// Functions on MV3



// CUSTOM LOADING TEXT



const customLoadingText = await (await (await fetch("https://raw.githubusercontent.com/ProdigyPNP/P-NP/master/loadingText.txt")).text()).split("\n");


var index = 0;

/** Custom loading text index */
setInterval(() => {
    index = Math.floor(Math.random() * customLoadingText.length);
}, 2000);


setInterval(() => {
    const LT = document.getElementById("loading-text");
    if (LT) {
        LT.innerHTML = customLoadingText[index];
    }
}, 100);



})();



