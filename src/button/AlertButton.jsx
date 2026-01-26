import { useState } from "react";

export default function AlertButton({ text, message }) {
  const [isChanged, setIsChanged] = useState(false);

  function handleClick() {
    if (isChanged === false) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  }

  return (
    <>
      <button onClick={handleClick}>{text}</button>
      <p>
        {isChanged === true
          ? message
          : "data bisa berubah"}
      </p>
    </>
  );
}
