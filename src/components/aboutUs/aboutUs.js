import React from "react";
import imgCircle from '../../img/Ellipse 1632.png'
import imgRocet from '../../img/image 1707.png'
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
                <img className="about--block1__image--imgCir" src={imgCircle} alt="img" />
                <img className="about--block1__image--imgRoc" src={imgRocet} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
