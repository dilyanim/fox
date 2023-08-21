import React from 'react';
import man from '../../../img/young man working on a laptop.png'
import lesson1 from '../../../img/lesson1.png'
import lesson2 from '../../../img/lesson2.png'
import lesson3 from '../../../img/lesson3.png'
import lesson4 from '../../../img/lessson4.png'
import lesson5 from '../../../img/lesson5.png'
import lesson6 from '../../../img/lesson6.png'
import  {RiArrowRightSLine} from 'react-icons/ri'
import { NavLink } from 'react-router-dom';
import Clock from '../../../img/clock.svg'
import Chart from '../../../img/chart.svg'
import IMG from '../../../img/IMG.svg'



const AllCurs = () => {
    return (
       <>
           <div id='AllCurs'>
            <div className="container">
                <div className="AllCurs">
                   
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
                                <img src={Clock} alt=""/>
                                <h6>22ч 30мин</h6>
                                <img src={Chart} alt=""/>
                                <h6>64 уроков</h6>
                                <img src={IMG} alt=""/>
                                <h6>Прогресс</h6>
                               
                                
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
                                <img src={Clock} alt=""/>
                                <h6>22ч 30мин</h6>
                                <img src={Chart} alt=""/>
                                <h6>64 уроков</h6>
                                <img src={IMG} alt=""/>
                                <h6>Прогресс</h6>
                                
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
                                <img src={Clock} alt=""/>
                                <h6>22ч 30мин</h6>
                                <img src={Chart} alt=""/>
                                <h6>64 уроков</h6>
                                <img src={IMG} alt=""/>
                                <h6>Прогресс</h6>
                               
                                
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
                                <img src={Clock} alt=""/>
                                <h6>22ч 30мин</h6>
                                <img src={Chart} alt=""/>
                                <h6>64 уроков</h6>
                                <img src={IMG} alt=""/>
                                <h6>Прогресс</h6>
                               
                                
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
                                <img src={Clock} alt=""/>
                                <h6>22ч 30мин</h6>
                                <img src={Chart} alt=""/>
                                <h6>64 уроков</h6>
                                <img src={IMG} alt=""/>
                                <h6>Прогресс</h6>
                               
                                
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
                                <img src={Clock} alt=""/>
                                <h6>22ч 30мин</h6>
                                <img src={Chart} alt=""/>
                                <h6>64 уроков</h6>
                                <img src={IMG} alt=""/>
                                <h6>Прогресс</h6>
                               
                                
                            </div> 
                         <NavLink to={"/marketing1"}>  <button className='top-btn'>Узнать больше <RiArrowRightSLine style={{
                                 width: '30px' ,
                                 height: '20px'
                            }} /> </button> </NavLink>
                              </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
        
        
       </>
    

    );
};

export default AllCurs;