import { useWASD } from "../hacks/location";
import { player } from "./util";

export enum WASD {
    None,
    Normal,
    Phasing,
}


async function ChangeX (x : number) {
    for (let i = 0; i < 100; i++) {
        await new Promise(r => setTimeout(r, 2));
        player._playerContainer.x -= x/100;;
    }
}

async function ChangeY (y : number) {
    for (let i = 0; i < 100; i++) {
        await new Promise(r => setTimeout(r, 2));
        player._playerContainer.y -= y/100;;
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
                    ChangeY(40);            
                    break;
                case "s":
                    ChangeY(-40);
                    break;
                case "a":
                    ChangeX(40);
                    break;
                case "d":
                    ChangeX(-40);
                    break;    
            }
            break;
         default: 
            console.error("(WASD.ts switch fail) this shouldnt be happening");
            break;   
    }



});