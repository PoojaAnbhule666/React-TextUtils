import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    props.showAlert("Converted to uppercase", "success");
    setText(text.toUpperCase());
  };
  const handleLowClick = () => {
    props.showAlert("Converted to lowercase", "success");
    setText(text.toLowerCase());
  };
  const handleClearClick = () => {
    props.showAlert("Text is cleared", "success");
    setText("");
  };
  const handleCopyClick = () => {
    props.showAlert("Text copied", "success");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    props.showAlert("Extra spaces removed", "success");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleUponChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = "new text"; // wrong way to change
  // setText("new text");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleUponChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2"
          style={{ backgroundColor: "#292125" }}
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          className="btn btn-primary mx-2"
          style={{ backgroundColor: "#292125" }}
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2"
          style={{ backgroundColor: "#292125" }}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-2"
          style={{ backgroundColor: "#292125" }}
          onClick={handleCopyClick}
        >
          copy Text
        </button>
        <button
          className="btn btn-primary mx-2"
          style={{ backgroundColor: "#292125" }}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3> Your text summery </h3>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
      </div>
    </>
  );
}
