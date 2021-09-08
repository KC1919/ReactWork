import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  // style={{ "text-align": "center" }}

  const [alert, setAlert] = useState(null);

  const showAlert = (message, alertType) => {
    setAlert({
      msg: message,
      type: alertType,
    });

    setTimeout(()=>{
      setAlert(null);
    },2000);
  };

  const [mode, setMode] = useState("light");

  const toggleState = () => {

    // if(color)
    // {
    //   setBackgroundColor(color);
    // }

     if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode enabled","warning");
    } else {
      setMode("light");
      showAlert("Dark mode disabled","success");
    }
  };

  return (
    <>
      {/* <Navbar></Navbar>  when we will not pass any value tot he props, then default values will be rendered */}

      <Navbar
        title={"TextUtils"}
        toggleState={toggleState}
        mode={mode}
        showAlert={showAlert}
      />
      <Alert alert={alert} />
      <TextForm
        heading={"Enter your text below to analyze"}
        showAlert={showAlert}
      />
    </>
  );
}

export default App;
