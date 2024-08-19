import Main from "./page/Main"
import React from "react";
import './App.css';
import Navbar from "./components/Navbar"
import NavFooter from "./components/NavFooter"
function App() {
  return (
    <div className="reset" >
      <Navbar />
          <Main/>
      <NavFooter/>     
    </div>
  );
}

export default App;
