import { useWASD } from "../hacks/location";

export enum WASD {
    None,
    Normal,
    Phasing,
}


function ChangeX (x : number) {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {  _.player._playerContainer.x -= x/100; }, 50);
    }
}

function ChangeY (y : number) {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {  _.player._playerContainer.y -= y/100; }, 50);
    }
}





window.addEventListener("keydown", event => {

    switch (useWASD) {
        case WASD.None:
            break;
        case WASD.Normal:
            console.error("not implemented");
            break;
        case WASD.Phasing:
            switch (event.key) {
                case "w":
                    ChangeY(20);            
                    break;
                case "s":
                    ChangeY(-20);
                    break;
                case "a":
                    ChangeX(20);
                    break;
                case "d":
                    ChangeX(-20);
                    break;    
            }
            break;
         default: 
            console.error("(WASD.ts switch fail) this shouldnt be happening");
            break;   
    }



});