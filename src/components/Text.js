import React, { useState } from "react";

export default function Text(props) {
  const [text, setText] = useState("");

  // Handle text changes
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Clear the text
  const clearText = () => {
    let newTxt = "";
    setText(newTxt);
    props.shAl("Textbox cleared.", "success");
  };

  // Count the words in the text
  const wordCount = () => {
    const words = text.trim().split(/\s+/);
    return words.filter((word) => word !== "").length;
  };

  // Convert to uppercase
  const toUpperCase = () => {
    return text.toUpperCase();
  };

  // Convert to lowercase
  const toLowerCase = () => {
    return text.toLowerCase();
  };

  // Reverse the text
  const reverseText = () => {
    return text.split("").reverse().join("");
  };

  // Remove extra spaces
  const removeExtra = () => {
    return text.split(/[ ]+/).join(" ");
  };

  // Copy text to clipboard
  const copyText = () => {
    let cpy = navigator.clipboard.writeText(text);
    if (cpy) {
      props.shAl("Successfully copied to clipboard.", "success");
    } else {
      console.log(`Alert is disabled`);
    }
  };

  return (
    <div className="container my-3">
      <div class="card text-bg-info">
        <div class="card-header">
          <h5>Text Utilities</h5>
        </div>
        <div class="card-body">
          <p class="card-text">
            A simplest collection of browser based text processing utilities.
            Word count, Uppercase, Lowercase, Reverse, Copy and Remove extra
            spaces.
          </p>
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            placeholder="Enter your text here..."
            rows="5"
            cols="40"
          />
          <button
            class="btn btn-warning my-2 mx-2"
            onClick={copyText}
            disabled={text.length === 0}
          >
            Copy
          </button>
          <button
            class="btn btn-warning my-2"
            onClick={clearText}
            disabled={text.length === 0}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="card text-bg-info my-3">
        <div className="card-header">
          <h5>Result</h5>
        </div>
        <div className="card-body">
          <h5 className="badge text-bg-danger p-2">Word Count</h5>
          <p className="card-text">{wordCount()}</p>
          <h5 className="badge text-bg-primary p-2">Uppercase</h5>
          <p className="card-text">{toUpperCase()}</p>
          <h5 className="badge text-bg-success p-2">Lowercase</h5>
          <p className="card-text">{toLowerCase()}</p>
          <h5 className="badge text-bg-warning p-2">Reversed</h5>
          <p className="card-text">{reverseText()}</p>
          <h5 className="badge text-bg-dark p-2">Remove Spaces</h5>
          <p className="card-text">{removeExtra()}</p>
        </div>
      </div>
    </div>
  );
}
