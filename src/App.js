import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Fim from "./screens/Fim";
import Inicio from "./screens/Inicio";
import Pag2 from "./screens/Pag2";
import Pag3 from "./screens/Pag3";
import Pag4 from "./screens/Pag4";
import Pag5 from "./screens/Pag5";
import Sim from "./screens/Sim";
import Tryagain from "./screens/Tryagain";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Fim} />
      <Route path="/Fim/" exact component={Fim} />
      <Route path="/Inicio/" exact component={Inicio} />
      <Route path="/Pag2/" exact component={Pag2} />
      <Route path="/Pag3/" exact component={Pag3} />
      <Route path="/Pag4/" exact component={Pag4} />
      <Route path="/Pag5/" exact component={Pag5} />
      <Route path="/Sim/" exact component={Sim} />
      <Route path="/Tryagain/" exact component={Tryagain} />
    </Router>
  );
}

export default App;
