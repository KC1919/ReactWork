import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'


function App() {
  // style={{ "text-align": "center" }}
  
  const [mode,setMode]=useState("light");

  const toggleState=()=>
  {
    mode==="light"?setMode("dark"):setMode("light");
  }

  return (
    <>
      {/* <Navbar></Navbar>  when we will not pass any value tot he props, then default values will be rendered */}

      <Navbar title={"TextUtils"} toggleState={toggleState} mode={mode} /> 
      
      <TextForm heading={"Enter your text below to analyze"}/>
    </>
  );
}

export default App;
