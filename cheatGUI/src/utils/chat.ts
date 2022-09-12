import { category } from "../index";

export default function addChat () {
    
    let chatFrame = document.createElement("iframe");
    chatFrame.setAttribute("src", "https://chat.prodigypnp.com:8443/");
    chatFrame.setAttribute("class", "chat-frame");
    chatFrame.setAttribute("id", "chat-frame");

    category.misc.append(chatFrame)

}