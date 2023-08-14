import React from 'react';
import man from '../../img/young man working on a laptop.png'
import lesson1 from '../../img/lesson1.png'
import lesson2 from '../../img/lesson2.png'
import lesson3 from '../../img/lesson3.png'
import lesson4 from '../../img/lessson4.png'
import lesson5 from '../../img/lesson5.png'
import lesson6 from '../../img/lesson6.png'
import { RiAlarmLine} from 'react-icons/ri'
import  {RiArrowRightSLine} from 'react-icons/ri'
import { NavLink } from 'react-router-dom';
import Lessons from '../Lessons';
import ReviewTwo from '../ReviewTwo';


const AboutCourse = () => {
    return (
       <>
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
               
          
                <div className="lessons">
                <div className='first'>
                <div className='top'>
                           <img className='top-img' src={lesson1}></img>
                            <div className='top-text'>
                            <h4>Как ставить о оценивать задачи</h4>
                            <p className='top-p' >   Мы ориентируемся на эргономику и ты где работаешь. Это всего лишь нажатие клавиши.</p>
                            <div className='topic1' >
                                        <RiAlarmLine  style={{
                                          width: '46px' ,
                                          height: '20px' ,
                                          color : '#23A6F0'  }}   />
                                         <p>22ч 30мин</p>
                               
                                         <RiAlarmLine  style={{
                                          width: '46px' ,
                                          height: '20px' ,
                                          color : '#23A6F0'  }}   />
                                    <p>22ч 30мин</p>
                              
                               
                                    <RiAlarmLine  style={{
                                          width: '46px' ,
                                          height: '20px' ,
                                          color : '#23A6F0'  }}   />
                                    <p>22ч 30мин</p>
                               
                                
                            </div> 
                          <button className='top-btn'>Узнать больше <RiArrowRightSLine style={{
                                 width: '30px' ,
                                 height: '20px'
                            }} /> </button> 
                              </div>
                        </div>
                        <div className='top'>
                           <img className='top-img' src={lesson2}></img>
                            <div className='top-text'>
                            <h4>Как ставить о оценивать задачи</h4>
                            <p className='top-p' >   Мы ориентируемся на эргономику и ты где работаешь. Это всего лишь нажатие клавиши.</p>
                            <div className='topic1' >
                                        <RiAlarmLine  style={{
                                          width: '46px' ,
                                          height: '20px' ,
                                          color : '#23A6F0'  }}   />
                                         <p>22ч 30мин</p>
                               
                                         <RiAlarmLine  style={{
                                          width: '46px' ,
                                          height: '20px' ,
                                          color : '#23A6F0'  }}   />
                                    <p>22ч 30мин</p>
                              
                               
                                    <RiAlarmLine  style={{
                                          width: '46px' ,
                                          height: '20px' ,
                                          color : '#23A6F0'  }}   />
                                    <p>22ч 30мин</p>
                               
                                
                            </div> 
                          <button className='top-btn'>Узнать больше <RiArrowRightSLine style={{
                                 width: '30px' ,
                                 height: '20px'
                            }} /> </button> 
                              </div>
                        </div>
                        <div className='top'>
                           <img className='top-img' src={lesson3}></img>
                            <div className='top-text'>
                            <h4>Как ставить о оценивать задачи</h4>
                            <p className='top-p' >   Мы ориентируемся на эргономику и ты где работаешь. Это всего лишь нажатие клавиши.</p>
                            <div className='topic1' >
                                        <RiAlarmLine  style={{
                                          width: '46px' ,
                                          height: '20px' ,
                                          color : '#23A6F0'  }}   />
                                         <p>22ч 30мин</p>
                               
                                         <RiAlarmLine  style={{
                                          width: '46px' ,
                                          height: '20px' ,
                                          color : '#23A6F0'  }}   />
                                    <p>22ч 30мин</p>
                              
                               
                                    <RiAlarmLine  style={{
                                          width: '46px' ,
                                          height: '20px' ,
                                          color : '#23A6F0'  }}   />
                                    <p>22ч 30мин</p>
                               
                                
                            </div> 
                          <button className='top-btn'>Узнать больше <RiArrowRightSLine style={{
                                 width: '30px' ,
                                 height: '20px'
                            }} /> </button> 
                              </div>
                        </div>
                    </div>
                    <div className='first'>
                    <div className='top'>
                           <img className='top-img' src={lesson4}></img>
                            <div className='top-text'>
                            <h4>Как ставить о оценивать задачи</h4>
                            <p className='top-p' >   Мы ориентируемся на эргономику и ты где работаешь. Это всего лишь нажатие клавиши.</p>
                            <div className='topic1' >
                                        <RiAlarmLine  style={{
                                          width: '46px' ,
                                          height: '20px' ,
                                          color : '#23A6F0'  }}   />
                                         <p>22ч 30мин</p>
                               
                                         <RiAlarmLine  style={{
                                          width: '46px' ,
                                          height: '20px' ,
                                          color : '#23A6F0'  }}   />
                                    <p>22ч 30мин</p>
                              
                               
                                    <RiAlarmLine  style={{
                                          width: '46px' ,
                                          height: '20px' ,
                                          color : '#23A6F0'  }}   />
                                    <p>22ч 30мин</p>
                               
                                
                            </div> 
                          <button className='top-btn'>Узнать больше <RiArrowRightSLine style={{
                                 width: '30px' ,
                                 height: '20px'
                            }} /> </button> 
                              </div>
                        </div>
                        <div className='top'>
                           <img className='top-img' src={lesson5}></img>
                            <div className='top-text'>
                            <h4>Как ставить о оценивать задачи</h4>
                            <p className='top-p' >   Мы ориентируемся на эргономику и ты где работаешь. Это всего лишь нажатие клавиши.</p>
                            <div className='topic1' >
                                        <RiAlarmLine  style={{
                                          width: '46px' ,
                                          height: '20px' ,
                                          color : '#23A6F0'  }}   />
                                         <p>22ч 30мин</p>
                               
                                         <RiAlarmLine  style={{
                                          width: '46px' ,
                                          height: '20px' ,
                                          color : '#23A6F0'  }}   />
                                    <p>22ч 30мин</p>
                              
                               
                                    <RiAlarmLine  style={{
                                          width: '46px' ,
                                          height: '20px' ,
                                          color : '#23A6F0'  }}   />
                                    <p>22ч 30мин</p>
                               
                                
                            </div> 
                          <button className='top-btn'>Узнать больше <RiArrowRightSLine style={{
                                 width: '30px' ,
                                 height: '20px'
                            }} /> </button> 
                              </div>
                        </div>
                        <div className='top'>
                           <img className='top-img' src={lesson6}></img>
                            <div className='top-text'>
                            <h4>Как ставить о оценивать задачи</h4>
                            <p className='top-p' >   Мы ориентируемся на эргономику и ты где работаешь. Это всего лишь нажатие клавиши.</p>
                            <div className='topic1' >
                                        <RiAlarmLine  style={{
                                          width: '46px' ,
                                          height: '20px' ,
                                          color : '#23A6F0'  }}   />
                                         <p>22ч 30мин</p>
                               
                                         <RiAlarmLine  style={{
                                          width: '46px' ,
                                          height: '20px' ,
                                          color : '#23A6F0'  }}   />
                                    <p>22ч 30мин</p>
                              
                               
                                    <RiAlarmLine  style={{
                                          width: '46px' ,
                                          height: '20px' ,
                                          color : '#23A6F0'  }}   />
                                    <p>22ч 30мин</p>
                               
                                
                            </div> 
                         <NavLink to={"/marketing1"}>  <button className='top-btn'>Узнать больше <RiArrowRightSLine style={{
                                 width: '30px' ,
                                 height: '20px'
                            }} /> </button> </NavLink>
                              </div>
                        </div>
                    </div>

                </div>
                <button className='slider-btn'>Смотреть больше</button>

            </div>
            
        </div>
        <Lessons/>
        <ReviewTwo/>
        
       </>
    

    );
};

export default AboutCourse;