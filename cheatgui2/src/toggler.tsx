import { FunctionalComponent, h, render } from "preact";
import { menu } from "./index";

export let MenuShown : boolean = true;

function onToggle () {

}

export const HackArrow : FunctionalComponent = function () {

    return (
        <button style={"top: " + (MenuShown ? "10%" : "-100vh")} onClick={onToggle} id="menu-toggler">
            {MenuShown ? "▼" : "▲"}
        </button>
    )
}