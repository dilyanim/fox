import React from 'react';
import man from '../../img/young man working on a laptop.png'

const AboutCourse = () => {
    return (
        <div id='abCourse'>
            <div className="container">
                <div className="abCourse">
                    <div>
                        <h1>Развивайте свои навыки с помощью онлайн-курсов с онлайн-обучением</h1>
                        <button className='abBtn'>Присоединиться</button>
                    </div>
                               
                    <div>
                        <img className='img' src={man}></img>
                    </div>
                </div>
                <div className="popularCourse">
                    <div className="popular-text">
                        <h1>Популярные курсы</h1>
                        <p>Мы предоставляем множество функций, которые вы можете использовать. Постепенное накопление информация </p>

                    </div>
                    <div  className="popular-blocks">
                        <button className='btn-1' >Все курсы</button>
                        <button className='btn-2'>Управление компанией</button>
                        <button className='btn-2' >Командаобразование</button>
                        <button className='btn-2' >Маркетинг</button>
                        <button className='btn-2' >Продажи</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AboutCourse;