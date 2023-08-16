import React from "react";
import { useState } from "react";
const Forms = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  return (
    <div id="form">
      <div className="container">
        <div className="form">
          <div className="from--content">
            <input
              className="from--content__input1"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="from--content__input2"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="from--content__input3"
              type="text"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button onClick={() => handleClick(email, pass)}>{title}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
