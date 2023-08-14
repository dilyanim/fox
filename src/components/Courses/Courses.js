import React from 'react';
import Clock from '../../img/clock.svg'
import Chart from '../../img/chart.svg'
import IMG from '../../img/IMG.svg'
import MainImg from '../../img/product-cover-76.svg'

const Courses = () => {
    return (
        <div id="courses">
            <div className="container">
                <div className="courses">
                    <div className="courses--text">
                        <center>
                            <h3>Доступные курсы</h3>
                            <p>Мы предоставляем множество функций, которые вы можете использовать. Постепенное накопление
                                информация </p></center>
                    </div>
                    <div className="courses--cards">
                        <div className="courses--cards__card">
                            <img className='courses--cards__card--mainImg' src={MainImg} alt=""/>
                            <h5>Как ставить о оценивать задачи</h5>
                            <p>Мы ориентируемся на эргономику и
                                ты где работаешь. Это всего лишь
                                нажатие клавиши.</p>
                            <div className="courses--cards__card--block">
                                <img src={Clock} alt=""/>
                                <h6>22ч 30мин</h6>
                                <img src={Chart} alt=""/>
                                <h6>64 уроков</h6>
                                <img src={IMG} alt=""/>
                                <h6>Прогресс</h6>
                            </div>
                            <button>Узнать больше</button>

                        </div>
                        <div className="courses--cards__card">
                            <img className='courses--cards__card--mainImg' src={MainImg} alt=""/>
                            <h5>Как ставить о оценивать задачи</h5>
                            <p>Мы ориентируемся на эргономику и
                                ты где работаешь. Это всего лишь
                                нажатие клавиши.</p>
                            <div className="courses--cards__card--block">
                                <img  src={Clock} alt=""/>
                                <h6>22ч 30мин</h6>
                                <img src={Chart} alt=""/>
                                <h6>64 уроков</h6>
                                <img src={IMG} alt=""/>
                                <h6>Прогресс</h6>
                            </div>
                            <button>Узнать больше</button>

                        </div>
                        <div className="courses--cards__card">
                            <img className='courses--cards__card--mainImg' src={MainImg} alt=""/>
                            <h5>Как ставить о оценивать задачи</h5>
                            <p>Мы ориентируемся на эргономику и
                                ты где работаешь. Это всего лишь
                                нажатие клавиши.</p>
                            <div className="courses--cards__card--block">
                                <img src={Clock} alt=""/>
                                <h6>22ч 30мин</h6>
                                <img src={Chart} alt=""/>
                                <h6>64 уроков</h6>
                                <img src={IMG} alt=""/>
                                <h6>Прогресс</h6>
                            </div>
                            <button>Узнать больше</button>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Courses;