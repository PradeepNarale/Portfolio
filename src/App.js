import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import React from "react";

function App() {
  return (
    <div className="App">
     
      <Home/>
      <About/>
      <Services/>
      <Project/>
      <Contact/>
        
   
    </div>
  );
}

export default App;
