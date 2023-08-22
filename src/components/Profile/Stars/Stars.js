import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineStar } from "react-icons/ai";
const Stars = () => {
  return (
    <div id="stars">
      <div className="container">
        <div className="stars">
          <div className="stars--modalBlock">
            <RxCross2
              style={{
                display: "flex",
                marginLeft: "600px",
                color: "#252B42B2",
                fontSize: "40px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            />
            <h1>Как вам наш курс?</h1>
            <div className="stars--modalBlock__star">
              <p>
                <AiOutlineStar
                  style={{
                    fontSize: "120px",
                    strokeWidth: "2.271px",
                    stroke: "#000",
                    fontWeight: "200",
                    cursor: "pointer",
                  }}
                />
              </p>
              <p>
                <AiOutlineStar
                  style={{
                    fontSize: "120px",
                    strokeWidth: "2.271px",
                    stroke: "#000",
                    fontWeight: "200",
                    cursor: "pointer",
                  }}
                />
              </p>
              <p>
                <AiOutlineStar
                  style={{
                    fontSize: "120px",
                    strokeWidth: "2.271px",
                    stroke: "#000",
                    fontWeight: "200",
                    cursor: "pointer",
                  }}
                />
              </p>
              <p>
                <AiOutlineStar
                  style={{
                    fontSize: "120px",
                    strokeWidth: "2.271px",
                    stroke: "#000",
                    fontWeight: "200",
                    cursor: "pointer",
                  }}
                />
              </p>
              <p>
                <AiOutlineStar
                  style={{
                    fontSize: "120px",
                    strokeWidth: "2.271px",
                    stroke: "#000",
                    fontWeight: "200",
                    cursor: "pointer",
                  }}
                />
              </p>
            </div>
            <input type="text" placeholder="Комментарий......" />
            <button>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stars;
