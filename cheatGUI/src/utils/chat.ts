
export default function addChat () {

    // @ts-expect-error
    window.open("https://chat.prodigypnp.com:8443/", null, `
        height=800,
        width=350,
        status=yes,
        toolbar=no,
        menubar=no,
        location=no
    `);



}