import React, { useEffect, useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Acardion = () => {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(1);

  useEffect(() => {
    const videoTimeout = setTimeout(() => {
      if (currentVideo < 3) {
        setCurrentVideo(currentVideo + 1);
      }
    }, 5000);
    return () => clearTimeout(videoTimeout);
  }, [currentVideo]);

  return (
    <div id="pages">
      <div className="container">
        <div className="pages">
          <div className="pages--we">
            <div
              onClick={() => {
                setQuestion1(!question1);
                setQuestion2(false);
                setQuestion3(false);
                setQuestion4(false);
              }}
              style={{ height: question1 ? "410px" : "" }}
              className="pages--we__left"
            >
              <div className="pages--we__left--title">
                <h3 className="pages--weleft--titleaccord">
                  Урок 1 : Ознакомление
                </h3>
                  {question1 ? (
                    <span className="accordion--weleft--titleaccord--btn__icon">
                      <IoIosArrowDropupCircle />
                    </span>
                  ) : (
                    <span className="pages--weleft--titleaccord--btn__down">
                      <IoIosArrowDropdownCircle />
                    </span>
                  )}
              </div>
              <div
                style={{ display: "flex", gap: "20px" }}
                className="pages--weleft--title__accord--btn__answer"
              >
                <div
                  style={{ paddingTop: "80px" }}
                  className="pages--weleft--title__accord--btn__answer--vid"
                >
                  <iframe
                    width="350px"
                    height="200px"
                    src="https://www.youtube.com/embed/UIKyAKC0ab8"
                  ></iframe>
                  <p>1. Ознакомление</p>
                  <h4>Как ставить о оценивать задачи</h4>
                </div>
                <div style={{ paddingTop: "80px" }}>
                  <iframe
                    width="350px"
                    height="200px"
                    src="https://www.youtube.com/embed/UIKyAKC0ab8"
                  ></iframe>
                  <p>1. Ознакомление</p>
                  <NavLink to={"/videodi"}>
                    {" "}
                    <h4>Как ставить о оценивать задачи</h4>
                  </NavLink>
                </div>
                <div style={{ paddingTop: "80px" }}>
                  <iframe
                    width="350px"
                    height="200px"
                    src="https://www.youtube.com/embed/UIKyAKC0ab8"
                  ></iframe>
                  <p>1. Ознакомление</p>
                  <h4>Как ставить о оценивать задачи</h4>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                setQuestion1(false);
                setQuestion2(!question2);
                setQuestion3(false);
                setQuestion4(false);
              }}
              style={{ height: question2 ? "410px" : "" }}
              className="pages--we__left"
            >
              <div className="pages--we__left--title">
                <h3 className="pages--weleft--titleaccord">
                  Урок 2 : Методы бизнеса
                </h3>
                  {question1 ? (
                    <span className="accordion--weleft--titleaccord--btn__icon">
                      <IoIosArrowDropupCircle />
                    </span>
                  ) : (
                    <span className="pages--weleft--titleaccord--btn__down">
                      <IoIosArrowDropdownCircle />
                    </span>
                  )}
              </div>
              <div
                style={{ display: "flex", gap: "20px" }}
                className="pages--weleft--title__accord--btn__answer"
              >
                <div
                  style={{ paddingTop: "80px" }}
                  className="pages--weleft--title__accord--btn__answer--vid"
                >
                  <iframe
                    width="350px"
                    height="200px"
                    src="https://www.youtube.com/embed/UIKyAKC0ab8"
                  ></iframe>
                  <p>1. Ознакомление</p>
                  <h4>Как ставить о оценивать задачи</h4>
                </div>
                <div style={{ paddingTop: "80px" }}>
                  <iframe
                    width="350px"
                    height="200px"
                    src="https://www.youtube.com/embed/UIKyAKC0ab8"
                  ></iframe>
                  <p>1. Ознакомление</p>
                  <h4>Как ставить о оценивать задачи</h4>
                </div>
                <div style={{ paddingTop: "80px" }}>
                  <iframe
                    width="350px"
                    height="200px"
                    src="https://www.youtube.com/embed/UIKyAKC0ab8"
                  ></iframe>
                  <p>1. Ознакомление</p>
                  <h4>Как ставить о оценивать задачи</h4>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                setQuestion1(false);
                setQuestion2(false);
                setQuestion3(!question3);
                setQuestion4(false);
              }}
              style={{ height: question3 ? "410px" : "" }}
              className="pages--we__left"
            >
              <div className="pages--we__left--title">
                <h3 className="pages--weleft--titleaccord">
                  Урок 3 : Как начать зарабатывать больше
                </h3>
                  {question1 ? (
                    <span className="accordion--weleft--titleaccord--btn__icon">
                      <IoIosArrowDropupCircle />
                    </span>
                  ) : (
                    <span className="pages--weleft--titleaccord--btn__down">
                      <IoIosArrowDropdownCircle />
                    </span>
                  )}
              </div>
              <div
                style={{ display: "flex", gap: "20px" }}
                className="pages--weleft--title__accord--btn__answer"
              >
                <div
                  style={{ paddingTop: "80px" }}
                  className="pages--weleft--title__accord--btn__answer--vid"
                >
                  <iframe
                    width="350px"
                    height="200px"
                    src="https://www.youtube.com/embed/UIKyAKC0ab8"
                  ></iframe>
                  <p>1. Ознакомление</p>
                  <h4>Как ставить о оценивать задачи</h4>
                </div>
                <div style={{ paddingTop: "80px" }}>
                  <iframe
                    width="350px"
                    height="200px"
                    src="https://www.youtube.com/embed/UIKyAKC0ab8"
                  ></iframe>
                  <p>1. Ознакомление</p>
                  <h4>Как ставить о оценивать задачи</h4>
                </div>
                <div style={{ paddingTop: "80px" }}>
                  <iframe
                    width="350px"
                    height="200px"
                    src="https://www.youtube.com/embed/UIKyAKC0ab8"
                  ></iframe>
                  <p>1. Ознакомление</p>
                  <h4>Как ставить о оценивать задачи</h4>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                setQuestion1(false);
                setQuestion2(false);
                setQuestion3(false);
                setQuestion4(!question4);
              }}
              style={{ height: question4 ? "410px" : "" }}
              className="pages--we__left"
            >
              <div className="pages--we__left--title">
                <h3 className="pages--weleft--titleaccord">
                  Урок 4 : Заключение
                </h3>
                  {question1 ? (
                    <span className="accordion--weleft--titleaccord--btn__icon">
                      <IoIosArrowDropupCircle />
                    </span>
                  ) : (
                    <span className="pages--weleft--titleaccord--btn__down">
                      <IoIosArrowDropdownCircle />
                    </span>
                  )}
              </div>
              <div
                style={{ display: "flex", gap: "20px" }}
                className="pages--weleft--title__accord--btn__answer"
              >
                <div
                  style={{ paddingTop: "80px" }}
                  className="pages--weleft--title__accord--btn__answer--vid"
                >
                  <iframe
                    width="350px"
                    height="200px"
                    src="https://www.youtube.com/embed/UIKyAKC0ab8"
                  ></iframe>
                  <p>1. Ознакомление</p>
                  <h4>Как ставить о оценивать задачи</h4>
                </div>
                <div style={{ paddingTop: "80px" }}>
                  <iframe
                    width="350px"
                    height="200px"
                    src="https://www.youtube.com/embed/UIKyAKC0ab8"
                  ></iframe>
                  <p>1. Ознакомление</p>
                  <h4>Как ставить о оценивать задачи</h4>
                </div>
                <div style={{ paddingTop: "80px" }}>
                  <iframe
                    width="350px"
                    height="200px"
                    src="https://www.youtube.com/embed/UIKyAKC0ab8"
                  ></iframe>
                  <p>1. Ознакомление</p>
                  <h4>Как ставить о оценивать задачи</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acardion;
