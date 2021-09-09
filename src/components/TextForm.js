import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = (event) => {
    if (text.length !== 0) {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Text Converted to Upper Case!", "success");
    }
  };

  const handleLowClick = (event) => {
    if (text.length!== 0) {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Text converted to lower case!", "success");
    }
  };

  const handleClearClick = (event) => {
    if (text.length!== 0) {
      setText("");
      props.showAlert("Text cleared!", "success");
    }
  };

  const handleCopy = (event) => {
    if (text.length!== 0) {
      let copiedText = document.getElementById("myBox");
      copiedText.select();
      navigator.clipboard.writeText(copiedText.value);
      props.showAlert("Text copied to clipboard!", "success");
    }
  };

  const handleRemoveSpaces = () => {
    if (text.length!== 0) {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!", "success");
    }
  };

  const [text, setText] = useState("");

  return (
    <div>
      <div className="container my-3">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            placeholder="Enter your text here..."
            onChange={handleOnChange}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-success mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>

        <button
          style={{ position: "absolute", right: "120px" }}
          className="btn btn-primary mx-2"
          onClick={handleClearClick}
        >
          Clear
        </button>

        <button className="btn btn-danger mx-2" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-warning mx-2" onClick={handleRemoveSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3">
        <h2>Text Summary</h2>
        <pre>
          Words : {text.length === 0 ? 0 : text.replaceAll(/\s\s+/g," ").trim().split(" ").length} Characters :{" "}
          {text.replaceAll(/\s\s+/g," ").trim().length}
        </pre>
        <p>{0.008 * (text.replaceAll(/\s\s+/g," ").trim().split(" ").length)} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
