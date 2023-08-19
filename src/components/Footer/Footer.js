import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--block">
            <div className="footer--block__zag">
              <h1>Присоединяйся к нам</h1>
              <h4>
                Мы предоставляем множество функций, которые вы можете
                использовать. Постепенное накопление информация
              </h4>
            </div>
            <div className="footer--block__input">
              <input type="text" placeholder="Твой Email" />
              <button>Подписка</button>
            </div>
            <div className="footer--block__content">
              <div className="footer--block__content--logo">
                <h1>Logo</h1>
                <p>
                  (Название)— это частная виртуальная сеть с уникальными
                  функциями и высоким уровнем безопасности.
                </p>
                <div className="footer--block__content--logo__circle">
                  <div className="footer--block__content--logo__circle--cruck"></div>
                  <div className="footer--block__content--logo__circle--cruck"></div>
                  <div className="footer--block__content--logo__circle--cruck"></div>
                </div>
              </div>
              <div className="footer--block__content--product">
                <h1>Курсы</h1>
                <p>Маркетинг </p>
                <p>Управление</p>
                <p>Продажи</p>
                <p>Командаобразование</p>
               
              </div>
              <div className="footer--block__content--Engage">
                <h1>Название</h1>
                <p>О нас</p>
                <p>Курсы</p>
                <p>Главная</p>
               
              </div>
              <div className="footer--block__content--EarnMoney">
                <h1>Контакты</h1>
                <p>hello@courses.com</p>
                <p>0220 234 547</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
