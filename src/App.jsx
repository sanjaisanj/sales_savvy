import React from "react";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import "./assets/styles.css";

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;