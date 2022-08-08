import { wrapper } from "../index";

const FPSc = document.createElement("button"); // Create menu toggler
var enabled : boolean = false;


export function startFps () : void {
    enabled = true;
    activate();
}

export function stopFps () : void {
    enabled = false;
    document.getElementById("fps-counter")?.remove();
}


function activate () : void {

    FPSc.id = "fps-counter";
    wrapper?.prepend(FPSc);
    

    setInterval(() => {

        const fps : number = _.player.game.fps._framerate;

        if (enabled) {
            FPSc.innerText = fps.toFixed(2) + " FPS";
        } else {
            FPSc.remove();
            return;
        }
    }, 300);
}