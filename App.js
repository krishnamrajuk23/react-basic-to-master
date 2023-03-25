import React from 'react';
import ReactDOM from 'react-dom/client'; 

const heading = React.createElement("h1", { className: "heading" }, "this is my end to end understanding");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); 
