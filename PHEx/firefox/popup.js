(async () => {

    /** Set a value in the local storage */
    function set(key, value) {
        browser.storage.local.set({ [key]: value });
    };

    /** Get a value from the local storage */
    function get(key) {
        return new Promise(resolve => {
            browser.storage.local.get([key], result => {
                resolve(result[key]);
            })
        })
    };

    /** Validate the URL */
    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str) || new URL(str).hostname === "localhost";
    }
    
    /** Checkbox (use custom P-NP URL) */
    const checkbox = document.querySelector(".check")

    /** Textarea (custom P-NP URL) */
    const input = document.querySelector("input")

    // input is either the custom URL, or blank.
    input.value = await get("url") || "";

    // checkbox is either checked or not.
    checkbox.checked = await get("checked") || false;

    input.onchange = () => {
        document.querySelector("p").innerHTML = ""
    }


    checkbox.addEventListener("click", async (event) => {
        if (await get("checked")) {
            // if already checked, `no` need to run checks
            // set checked to new value, which should be false
            set("checked", checkbox.checked);

        } else {

            // if we're turning on checked, we need to run a few checks
            if (validURL(input.value)) {
                // if the URL is valid, update url and checked to their latest values.
                set("url", input.value);
                set("checked", checkbox.checked);

            } else {
                // if the URL is invalid, scream at them until they burst into tears
                alert("[PHEx] Invalid Custom P-NP URL");
                checkbox.checked = false;
            }
        }
    });

})();