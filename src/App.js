import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  // style={{ "text-align": "center" }}
  return (
    <>
      {/* <Navbar></Navbar>  when we will not pass any value tot he props, then default values will be rendered */}

      <Navbar title={"TextUtils"} /> 
      
      <TextForm heading={"Enter your text below to analyze"}/>
    </>
  );
}

export default App;
