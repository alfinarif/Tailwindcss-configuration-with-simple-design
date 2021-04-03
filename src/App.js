import React from "react";
import {BrowserRouter} from "react-router-dom";
import './App.css';
import CleverangeRoute from "./components/Routing/CleverangeRoute";
import Navigation from "./components/Routing/Navigation";


function App() {
  return (
      <React.Fragment>
          <BrowserRouter>
              <Navigation/>
              <CleverangeRoute/>
          </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
