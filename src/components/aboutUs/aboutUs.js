import React from "react";
import imgCircle from "../../img/Ellipse 1632.png";
import imgRocet from "../../img/image 1707.png";
import img1 from "../../img/Rectangle 29875.png";
import img2 from "../../img/Rectangle 29876.png";
import img3 from "../../img/Rectangle 29877.png";
import img4 from "../../img/Rectangle 29878.png";
import imgMan from "../../img/image 1708.png";




const AboutUs = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="about">
          <div className="about--block1">
            <div className="about--block1__text">
              <h1>
                Мы являемся топливом для вашего бизнеса, готовы дать вам
                образование и поднять ваш бренд до небес.
              </h1>
            </div>
            <div className="about--block1__image">
              <img
                className="about--block1__image--imgCir"
                src={imgCircle}
                alt="img"
              />
              <img
                className="about--block1__image--imgRoc"
                src={imgRocet}
                alt="img"
              />
            </div>
          </div>
   


           <div className="about--block2">
            <div className="about--block2__image">
              <img
                className="about--block2__image--img1"
                src={img1}
                alt="img"
              />
              <img
                className="about--block2__image--img2"
                src={img2}
                alt="img"
              />
              <img
                className="about--block2__image--img3"
                src={img3}
                alt="img"
              />
              <img
                className="about--block2__image--img4"
                src={img4}
                alt="img"
              />
            </div> 
           </div>


         <div className="about--block3">
            <div className="about--block3__zag">
              <center>
                <h1>Наш основатель</h1>
              </center>
            </div>
            <div className="about--block3__content">
              <div className="about--block3__content--image">
                <img src={imgMan} alt="img" />
              </div>
                <div className="about--block3__content--text1">
                  <p>
                    Большая история — новое исследовательское направление, в
                    рамках которого изучается единый преемственный процесс
                    развития Вселенной — с момента Большого взрыва до настоящего
                    времени. Междисциплинарный проект The Big History Project
                    был основан Биллом Гейтсом и Дэвидом Кристианом с целью
                    разработки целостного курса истории космоса, Земли, жизни и
                    человечества и преподавания его во всем мире.Эта книга,
                    написанная на стыке естественных и гуманитарных наук —
                    физики, геологии, астрономии, истории, .социологии и других,
                    — насыщенное обобщение социологии и других, — насыщенное
                    обобщение новейших научных представлений
                  </p>
              </div>
            </div>
            <div className="about--block3__text2">
              <p>
                социологии и других, — насыщенное обобщение новейших научных
                представлений Большая история — новое исследовательское
                направление, в рамках которого изучается единый преемственный
                процесс развития Вселенной — с момента Большого взрыва до
                настоящего времени. Междисциплинарный проект The Big History
                Project был основан Биллом Гейтсом и Дэвидом Кристианом с целью
                разработки целостного курса истории космоса, Земли, жизни и
                человечества и преподавания его во всем мире.Эта книга,
                написанная на стыке естественных и гуманитарных наук — физики,
                геологии, астрономии, истории, .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
