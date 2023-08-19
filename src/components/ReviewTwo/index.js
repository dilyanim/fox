import React, { useState } from 'react';
import Star from "../../img/star.svg"
import Avatar from "../../img/avatar.svg"
import Ava2 from '../../img/ava2.svg'
import Ava3 from '../../img/ava3.svg'
import { BsArrowLeftCircle , BsArrowRightCircle } from 'react-icons/bs'







    
const ReviewTwo = () => {
// const [slider, setSlider] = useState(false)   

    return (
       
         <div id="review2">
          
             
            <div className="container">
               
               <div className="review2"> 
                     <div className="review2--cards">
                        <div className="review2--cards__card">
                            <div className="review2--cards__card--block">
                                <img src={Avatar} alt=""/>
                                <div className="review2--cards__card--block__text"><h5>Viezh Robert</h5>
                                    <p>Warsaw, Poland</p></div>
                                <div className="review2--cards__card--block__icon"><h6>4.5</h6>
                                    <img src={Star} alt=""/></div>
                            </div>
                            <p className="review2--cards__card--p">«Вау… Я очень рад использовать этот VPN, он оказался
                                больше, чем мои ожидания, и до сих
                                пор не было никаких проблем. (Название) всегда лучший».</p>
                        </div>
                        <div className="review2--cards__card">
                            <div className="review2--cards__card--block">
                                <img src={Ava2} alt=""/>
                                <div className="review2--cards__card--block__text" ><h5>Yessica Christy</h5>
                                    <p>Shanxi, China</p></div>
                                <div className="review2--cards__card--block__icon"><h6>4.5</h6>
                                    <img src={Star} alt=""/></div>
                            </div>
                            <p className="review2--cards__card--p">«Мне это нравится, потому что я люблю путешествовать далеко и все еще могу подключаться к высокой скорости».</p>
                        </div>
                        <div className="review2--cards__card">
                            <div className="review2--cards__card--block">
                                <img src={Ava3} alt=""/>
                                <div className="review2--cards__card--block__text" ><h5>Kim Young Jou</h5>
                                    <p style={{
                                        width: "127px"
                                    }} >Seoul, South Korea</p></div>
                                <div className="review2--cards__card--block__icon">
                                    <h6>4.5</h6>
                                    <img src={Star} alt=""/>
                                </div>
                            </div>
                            <p className="review2--cards__card--p">«Это очень необычно для моего бизнеса, которому в настоящее время требуется виртуальная частная сеть с высоким уровнем безопасности».</p>
                        </div> 
                        <div className="review2--cards__card">
                            <div className="review2--cards__card--block">
                                <img src={Avatar} alt=""/>
                                <div className="review2--cards__card--block__text"><h5>Viezh Robert</h5>
                                    <p>Warsaw, Poland</p></div>
                                <div className="review2--cards__card--block__icon"><h6>4.5</h6>
                                    <img src={Star} alt=""/></div>
                            </div>
                            <p className="review2--cards__card--p">«Вау… Я очень рад использовать этот VPN, он оказался
                                больше, чем мои ожидания, и до сих
                                пор не было никаких проблем. (Название) всегда лучший».</p>
                        </div>
                        <div className="review2--cards__card">
                            <div className="review2--cards__card--block">
                                <img src={Ava2} alt=""/>
                                <div className="review2--cards__card--block__text" ><h5>Yessica Christy</h5>
                                    <p>Shanxi, China</p></div>
                                <div className="review2--cards__card--block__icon"><h6>4.5</h6>
                                    <img src={Star} alt=""/></div>
                            </div>
                            <p className="review2--cards__card--p">«Мне это нравится, потому что я люблю путешествовать далеко и все еще могу подключаться к высокой скорости».</p>
                        </div>
                        <div className="review2--cards__card">
                            <div className="review2--cards__card--block">
                                <img src={Ava3} alt=""/>
                                <div className="review2--cards__card--block__text" ><h5>Kim Young Jou</h5>
                                    <p style={{
                                        width: "127px"
                                    }} >Seoul, South Korea</p></div>
                                <div className="review2--cards__card--block__icon">
                                    <h6>4.5</h6>
                                    <img src={Star} alt=""/>
                                </div>
                            </div>
                            <p className="review2--cards__card--p">«Это очень необычно для моего бизнеса, которому в настоящее время требуется виртуальная частная сеть с высоким уровнем безопасности».</p>
                        </div> 
                    </div> 
                </div>
                    <div className='arrow'>
                          <div>...</div>
                          <div>  <BsArrowLeftCircle/> <BsArrowRightCircle/>   </div>

                    </div>
             
               
            </div>


        </div>
    );
};

export default ReviewTwo;