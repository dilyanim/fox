import React from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineStar } from "react-icons/ai";
const Stars = () => {
  return (
    <div id="stars">
      <div className="conrainer">
        <div className="stars">
          <div className="stars--modalBlock">
          <RxCross2 />
          <h1>Как вам наш курс?</h1>
          <div className="stars--modalBlock__star">
            <p>
              <AiOutlineStar />
            </p>
            <p>
              <AiOutlineStar />
            </p>
            <p>
              <AiOutlineStar />
            </p>
            <p>
              <AiOutlineStar />
            </p>
            <p>
              <AiOutlineStar />
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
