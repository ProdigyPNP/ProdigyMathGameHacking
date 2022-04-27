import * as React from "react";
import { useState } from "react";

import * as ReactDOM from "react-dom";

import "./app.css";

function App() {
    const [showing, setShowing] = useState(false);

    return <div>
        reload at {Date.now()} <br />
        <button onClick={()=>setShowing(v => !v)}>{showing? "close" : "open"}</button>
    </div>;
}

// let's inject our menu!
window.onload = _ => {
    const container = window.document.getElementById("oldguard") || window.document.body;
    ReactDOM.render(<App/>, container);
};