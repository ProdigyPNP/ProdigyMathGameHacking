import { Swal } from "../utils/swal";  // Import Swal


export async function statusMessage () {


    const UpdateToInfiniteZero = Swal.mixin({
        title: "New PHEx Version: v2.2.1",
        icon: "info",
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: "Update to 2.2.1",
        cancelButtonText: "I've already updated.",
        html: "<p>EVEN IF YOU HAVE UPDATED TO 2.2.0, 2.2.1 IS NEW.</p> </p>We've released a new version of PHEx! We strongly reccomend updating to PHEx 2.2.1.</p><p><a href=https://github.com/ProdigyPNP/ProdigyMathGameHacking/releases/latest>Update now!</a></p>"

    });

    if (await (await UpdateToInfiniteZero.fire()).value) {
        window.location.href = "https://github.com/ProdigyPNP/ProdigyMathGameHacking/releases/latest";
    };

}



/*

// Display status message
export function statusMessage () {


    fetch(`https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/master/cheatGUI/statusmessage.json?updated=${Date.now()}`).then(response => response.json()).then(async data => {

            const enabled = data.enabled;

            if (enabled.value === false) {
                return console.log("Status message is disabled.");
            } else {

                await Swal.fire({
                            title: data.title,
                    	    html: data.html,
                    	    icon: data.icon,
                    });

            }

        });



};

*/
