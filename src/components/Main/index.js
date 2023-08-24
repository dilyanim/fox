import React from "react";
import main from "../../img/main.png";
import Blocks from "../Blocks";
import Course from "../Course";

import Review from "../Review/Review";
import Lessons from '../Lessons'
import CoursesMain from "../CoursesMain/Courses";

const Main = () => {
  return (
    <>
      <div id="main">
        <div className="container">
          <div className="main">
            <div className="main-text">
              <h1>Надо много учиться, чтобы знать хоть немного.</h1>
              <p>
                Обеспечьте сеть для всех ваших потребностей легко и весело,
                используя наши курсы.Откройте для себя интересные функции от
                нас.
              </p>
              <button className="btn">Начать</button>
            </div>
            <div>
              <img className="main-img" src={main}></img>
            </div>
          </div>
        </div>
      </div>
        <Blocks /> 
        {/* <Course />  */}
        <CoursesMain/>
        {/* <Lessons/>  */}
        <Review/> 
    </>
  );
};

export default Main;
