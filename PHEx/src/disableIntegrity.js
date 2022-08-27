/** 
 * disableIntegrity.js
 * 
 * Currently maintained by ProdigyPNP
 * Original author: Prodigy-Hacking
 * Contributors: hostedposted, gemsvido, Eris
 * File has been updated for Manifest V3
 */


(async () => {
    
    const browser = chrome || browser;

    /** get an item from chrome local storage */
    function get(key) {
        return new Promise(resolve => {
            browser.storage.local.get([key], result => {
                resolve(result[key]);
            });
        });
    }

    /** Custom P-NP URL */
    const url = await get("url");

    /** Use Custom P-NP URL */
    const checked = await get("checked");

    /** RedirectorDomain */
    const PNPURL = (url && checked) ? url : await (await fetch("https://infinitezero.net/domain")).text();




    /*-----------------------------------------------*
    *                                               *
    *              INJECT GAME.MIN.JS               *
    *                                               *
    ------------------------------------------------*/

    async function insertCode () {
        try {
            /** P-NP Loader. If you're using a custom URL, then you have the ?force attribute. */
            const request = await (await fetch(`https://infinitezero.net/eval${(url && checked) ? "?force=" + url : ""}`)).text();
            document.documentElement.setAttribute("onreset", `${request}\nSW.Load.decrementLoadSemaphore();`);
            document.documentElement.dispatchEvent(new CustomEvent("reset"));
            document.documentElement.removeAttribute("onreset");
        } catch (e) {
            alert("Failed to load the hacks. Error:\n" + e.message);
        }
    }





    /*-----------------------------------------------*
    *                                               *
    *               DISABLE INTEGRITY               *
    *                                               *
    ------------------------------------------------*/


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
        





    /*-----------------------------------------------*
    *                                               *
    *              LATEST PHEx VERSION              *
    *                                               *
    ------------------------------------------------*/


    /** User's version of PHEx */
    const pluginVersion = chrome.runtime.getManifest().version;

    /** Latest version of PHEx. */
    const supportedVersion = (await (await fetch(`${PNPURL}/version`)).text());


    /** Checks for plugin version. If outdated, triggers dialog box */
    if (pluginVersion !== supportedVersion) {
        const res = confirm(`PHEx is outdated. If you experience any errors, please update.\n\Your Version: ${pluginVersion}\nLatest Version: ${supportedVersion}`);
        if (res) { location = "https://github.com/ProdigyPNP/ProdigyMathGameHacking/blob/master/meta/wiki/UPDATING.md"; }
    }    







    /*-----------------------------------------------*
    *                                               *
    *              CUSTOM LOADING TEXT              *
    *                                               *
    ------------------------------------------------*/

    /** Custom Loading Text Array */
    const customLoadingText = await (await (await fetch("https://raw.githubusercontent.com/ProdigyPNP/P-NP/master/loadingText.txt")).text()).split("\n");

    /** Which text to use */
    var index = 0;

    /** Update custom loading text index */
    setInterval(() => {
        index = Math.floor(Math.random() * customLoadingText.length);
    }, 2000);


    /** Override the loading text */
    setInterval(() => {
        const LT = document.getElementById("loading-text");
        if (LT) {
            LT.innerHTML = customLoadingText[index];
        }
    }, 100);




})();
