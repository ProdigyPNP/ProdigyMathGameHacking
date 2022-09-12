
let chat : Window | null = null;

export default function openChat () : void {

    if (chat === null) {
        open()
        // chat?.document.body.setAttribute("style", "zoom: 66%; height: 800px; width: 350px;");
    } else {
        if (chat.closed)
            open()
        else
            chat.focus()
    }
    

}

function open () : void {
    // @ts-expect-error
    chat = window.open("https://chat.prodigypnp.com:8443/", null, `
        height=800,
        width=350,
        status=yes,
        toolbar=no,
        menubar=no,
        location=no
    `);
}