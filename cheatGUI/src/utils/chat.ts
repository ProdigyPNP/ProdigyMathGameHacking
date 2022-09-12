
let chat : Window | null = null;

export default function openChat () {

    if (chat === null) {
        // @ts-expect-error
        chat = window.open("https://chat.prodigypnp.com:8443/", null, `
            height=800,
            width=350,
            status=yes,
            toolbar=no,
            menubar=no,
            location=no
        `);
    } else {
        chat.focus()
    }
    

}