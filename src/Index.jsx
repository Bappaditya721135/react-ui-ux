import React from "react";
import ReactDOM  from "react-dom/client";

// main sass file 
import "./sass/styles.scss";

// app component 
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
