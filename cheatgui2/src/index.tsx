import { h, render } from "preact";
import "../style.scss"

document.getElementById("cheat-menu")?.remove();
document.getElementById("menu-toggler")?.remove()

export const menu = <div id="cheat-menu" style="position: fixed;top: -10%;left: 10%;right: 10%;width: 80%;height: 80%;z-index: 2;background-color: rgba(0, 0, 0, 0.5);backdrop-filter: blur(5px);"></div>;

render(menu, document.getElementById("external-content")!);