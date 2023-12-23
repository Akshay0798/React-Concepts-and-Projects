// Importing necessary hooks and styles
import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

// Main component function
function App() {
  // State variables using the useState hook
  const [length, setLength] = useState(8); // Password length
  const [numberAllowed, setNumberAllowed] = useState(false); // Whether numbers are allowed
  const [charAllowed, setCharAllowed] = useState(false); // Whether special characters are allowed
  const [password, setPassword] = useState(""); // Generated password

  // useRef hook to store a reference to the password input field
  const passwordRef = useRef(null);

  // Function to generate a random password based on options
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // Include numbers if allowed
    if (numberAllowed) str += "0123456789";
    // Include special characters if allowed
    if (charAllowed) str += "!@#$%^&*-_+=[]{}";

    // Generate password of specified length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    // Set the generated password to the state
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // Function to copy the generated password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    // Select and copy the password using the clipboard API
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect hook to regenerate the password when options change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // JSX rendering of the component
  return (
    <div className="container">
      <h1 className="title">Password generator</h1>
      <div className="password-container">
        {/* Input field for displaying the generated password */}
        <input
          type="text"
          value={password}
          className="password-input"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        {/* Button to copy the password to clipboard */}
        <button onClick={copyPasswordToClipboard} className="copy-button">
          Copy
        </button>
      </div>
      {/* Options for customizing the generated password */}
      <div className="options-container">
        {/* Option for setting the password length */}
        <div className="option">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        {/* Option for including numbers in the password */}
        <div className="option">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        {/* Option for including special characters in the password */}
        <div className="option">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
