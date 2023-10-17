import React from "react";
import ReactDOM from "react-dom";

function Test() {
    return(
        <h1>Hello Fucking</h1>
    );
}

export default Test;

if (document.getElementById('testing')) {
    ReactDOM.render(<Test />, document.getElementById('testing'));
}