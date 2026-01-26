import { useState } from "react";

export default function AlertButton({ text, message }) {
  const [output, setOutput] = useState("data bisa berubah");

  function handleClick() {
    if (output === "data bisa berubah") {
      setOutput(message);
    } else {
      setOutput("data bisa berubah");
    }
  }

  return (
    <>
      <button onClick={handleClick}>{text}</button>
      <p>{output}</p>
    </>
  );
}
