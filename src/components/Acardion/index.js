import React, {useState} from 'react';
import {BsChevronDown, BsChevronUp} from "react-icons/bs";
import { IoIosArrowDropdownCircle}  from 'react-icons/io'
import { IoIosArrowDropupCircle } from 'react-icons/io'
import movie1 from '../../img/movie1.png'

const Acardion = () => {
    const [question1, setQuestion1] = useState(false)
    const [question2, setQuestion2] = useState(false)
    const [question3, setQuestion3] = useState(false)
    const [question4, setQuestion4] = useState(false)

    return (
        <div id="pages">
            <div className="container">
                <div className="pages">
                  
                    <div className="pages--we">
                        <div onClick={() => {
                            setQuestion1(!question1)
                            setQuestion2(false)
                            setQuestion3(false)
                            setQuestion4(false)

                        }} style={{height: question1 ? "210px" : ""}} className="pages--we__left">
                            <div className="pages--we__left--title">
                                <h3 className="pages--weleft--titleaccord">
                                Урок 1 : Ознакомление
                                </h3>
                                <button className="pages--weleft--titleaccord--btn">
                                    { question1 ? <span className="accordion--weleft--titleaccord--btn__icon">
                                <IoIosArrowDropupCircle/>
                            </span> : <span className="pages--weleft--titleaccord--btn__down">
                                <IoIosArrowDropdownCircle/>
                            </span>
                                    }
                                </button>
                            </div>
                            <div className="pages--weleft--titleaccord--btn__answer">
                                {/* <p>Очень просто – зарегистрироваться. Это займет всего несколько минут. Создайте свой аккаунт с помощью адреса электронной почты и номера телефона. Мастер-класс станет доступен сразу после оплаты или в день запуска.</p> */}
                              <img src={movie1}></img>
                           
                            </div>
                        </div>
                        <div onClick={() => {
                            setQuestion1(false)
                            setQuestion2(!question2)
                            setQuestion3(false)
                            setQuestion4(false)

                        }} style={{height: question2 ? "210px" : ""}} className="pages--we__left">
                              <div className="pages--we__left--title">
                                <h3 className="pages--weleft--titleaccord">
                                Урок 2 : Методы бизнеса
                                </h3>
                                <button className="pages--weleft--titleaccord--btn">
                                    { question1 ? <span className="accordion--weleft--titleaccord--btn__icon">
                                <IoIosArrowDropupCircle/>
                            </span> : <span className="pages--weleft--titleaccord--btn__down">
                                <IoIosArrowDropdownCircle/>
                            </span>
                                    }
                                </button>
                            </div>
                            <div className="pages--weleft--titleaccord--btn__answer">
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium  aspernatur eaque error laboriosam molestiae nam omnis
                                    quaerat  repellendus vero, vitae!</p> */}
                            </div>
                        </div>
                        <div onClick={() => {
                            setQuestion1(false)
                            setQuestion2(false)
                            setQuestion3(!question3)
                            setQuestion4(false)
                        }} style={{height: question3 ? "210px" : ""}} className="pages--we__left">
                                <div className="pages--we__left--title">
                                <h3 className="pages--weleft--titleaccord">
                                Урок 3 : Как начать зарабатывать больше
                                </h3>
                                <button className="pages--weleft--titleaccord--btn">
                                    { question1 ? <span className="accordion--weleft--titleaccord--btn__icon">
                                <IoIosArrowDropupCircle/>
                            </span> : <span className="pages--weleft--titleaccord--btn__down">
                                <IoIosArrowDropdownCircle/>
                            </span>
                                    }
                                </button>
                            </div>
                            <div className="pages--weleft--titleaccord--btn__answer">
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium  aspernatur eaque error laboriosam molestiae nam omnis
                                    quaerat  repellendus vero, vitae!</p> */}
                            </div>
                        </div>
                        <div onClick={() => {
                            setQuestion1(false)
                            setQuestion2(false)
                            setQuestion3(false)
                            setQuestion4(!question4)

                        }} style={{height: question4 ? "210px" : ""}} className="pages--we__left">
                            <div className="pages--we__left--title">
                                <h3 className="pages--weleft--titleaccord">
                                Урок 4 : Заключение
                                </h3>
                                <button className="pages--weleft--titleaccord--btn">
                                    { question1 ? <span className="accordion--weleft--titleaccord--btn__icon">
                                <IoIosArrowDropupCircle/>
                            </span> : <span className="pages--weleft--titleaccord--btn__down">
                                <IoIosArrowDropdownCircle/>
                            </span>
                                    }
                                </button>
                            </div>
                            <div className="pages--weleft--titleaccord--btn__answer">
                                {/* <p>Очень просто – зарегистрироваться. Это займет всего несколько минут. Создайте свой аккаунт с помощью адреса электронной почты и номера телефона. Мастер-класс станет доступен сразу после оплаты или в день запуска.</p> */}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Acardion;

