import React from 'react';
import  {RiArrowRightSLine} from 'react-icons/ri'
import { NavLink } from 'react-router-dom';
import Clock from '../../../img/clock.svg'
import Chart from '../../../img/chart.svg'
import IMG from '../../../img/IMG.svg'
import main1 from '../../../img/main1.png'
import main2 from '../../../img/main2.png'
import main3 from '../../../img/main3.png'


const Curs = () => {
    return (
       <>
           <div id='curs'>
            <div className="container">
                <div className='curs'>
                <div className="popMain">
                    <div className="CM-text">
                        <h1>Доступные курсы</h1>
                        <p>Мы предоставляем множество функций, которые вы можете использовать. Постепенное накопление информация </p>

                    </div>
                </div>
               
          
                <div className="ann">
                    <div className='ann1'>
                    <div className='top'>
                           <img className='top-img' src={main1}></img>
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
                           <img className='top-img' src={main2}></img>
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
                           <img className='top-img' src={main3}></img>
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
            
        </div>
   
        
       </>
    

    );
};

export default Curs;