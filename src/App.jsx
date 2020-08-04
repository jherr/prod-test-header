import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import "./index.css";

const App = () => (
  <div>
    <Header />
    <div>I'm the header app</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
