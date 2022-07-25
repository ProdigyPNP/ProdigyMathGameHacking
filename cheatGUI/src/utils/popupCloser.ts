import { _ } from "../utils/util";  // Import prodigy thing



var PopupCloser : boolean = false;


export function PopupInterval (OnOff : boolean) {

    PopupCloser = OnOff;
}



(async () => {

    setInterval(async () => {
        if (PopupCloser) {
            _.instance.prodigy.open.menuCloseAll();
        }
    }, 200);

})();