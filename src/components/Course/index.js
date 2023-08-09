import React from 'react';
import course1 from '../../img/course1.png';
import course2 from '../../img/course2.png';
import course3 from '../../img/course3.png';





const Course = () => {
    return (
        <div id='course'>
            <div className="container">
                <div className="course">
                    <div className="course-title">
                        <div className='name'>
                             <h1>Почему (название кур.)</h1>
                        <p>Мы предоставляем множество функций, которые вы можете использовать. Постепенное накопление информация </p>
                        </div>
                       
                        <div>
                             <div className="sub">
                            <h1>100+</h1>
                            <p>Мы предоставляем множество функций, которые вы можете использовать. Постепенное накоплениеинформация </p>
                        </div>
                        <div className="sub">
                            <h1>80  +</h1>
                            <p>Мы предоставляем множество функций, которые вы можете использовать. Постепенное накоплениеинформация </p>
                        </div>
                        </div>
                       
                    </div>
                    <div className="course-text">
                        <div className='course-sub'>
                            <div><img src={course1}></img></div>
                            <div>
                                <h4>Личное обучение</h4>
                                <p>Постепенное накопление информация об атомном и мелкомасштабное поведение...</p>
                            </div>
                        </div>
                        <div className='course-sub'>
                            <div><img src={course2}></img></div>
                            <div>
                                <h4>Личное обучение</h4>
                                <p>Постепенное накопление информация об атомном и мелкомасштабное поведение...</p>
                            </div>
                        </div>
                        <div className='course-sub'>
                            <div><img src={course3}></img></div>
                            <div>
                                <h4>Личное обучение</h4>
                                <p>Постепенное накопление информация об атомном и мелкомасштабное поведение...</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Course;