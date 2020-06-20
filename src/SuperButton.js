import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("I'm an awesome button");

  return (
    <div className="SuperButton">
      <button
        onClick={() => setText("I'm not a super awesome button?")}
        style={{ background: "red", color: "white", outline: "none" }}
      >
        {text}
      </button>
    </div>
  );
}
