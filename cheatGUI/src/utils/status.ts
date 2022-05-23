import { Swal } from "../utils/swal";  // Import Swal



// Display status message
export function statusMessage () {


    fetch(`https://raw.githubusercontent.com/ProdigyMathGame/development/master/cheatGUI/statusmessage.json?updated=${Date.now()}`).then(response => response.json()).then(async data => {

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