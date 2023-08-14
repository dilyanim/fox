import React from 'react';
import Star from "../../img/star.svg"
import Avatar from "../../img/avatar.svg"

const Review = () => {
    return (
        <div id="review">
            <div className="container">
                <div className="review">
                    <div className="review--text">
                        <center><h2>Нам доверяют тысячи довольных учеников</h2>
                            <p>Мы предоставляем множество функций, которые вы можете использовать. Постепенное
                                накопление
                                информация </p></center>
                    </div>
                    <div className="review--cards">
                        <div className="review--cards__card">
                            <div className="review--cards__card--block">
                                <img src={Avatar} alt=""/>
                                <div className="review--cards__card--block__text"><h5>Viezh Robert</h5>
                                    <p>Warsaw, Poland</p></div>
                                <div className="review--cards__card--block__icon"><h6>4.5</h6>
                                    <img src={Star} alt=""/></div>
                            </div>
                            <p className="review--cards__card--p">«Вау… Я очень рад использовать этот VPN, он оказался
                                больше, чем мои ожидания, и до сих
                                пор не было никаких проблем. (Название) всегда лучший».</p>
                        </div>
                        <div className="review--cards__card">
                            <div className="review--cards__card--block">
                                <img src={Avatar} alt=""/>
                                <div className="review--cards__card--block__text" ><h5>Viezh Robert</h5>
                                    <p>Warsaw, Poland</p></div>
                                <div className="review--cards__card--block__icon"><h6>4.5</h6>
                                    <img src={Star} alt=""/></div>
                            </div>
                            <p className="review--cards__card--p">«Вау… Я очень рад использовать этот VPN, он оказался
                                больше, чем мои ожидания, и до сих
                                пор не было никаких проблем. (Название) всегда лучший».</p>
                        </div>
                        <div className="review--cards__card">
                            <div className="review--cards__card--block">
                                <img src={Avatar} alt=""/>
                                <div className="review--cards__card--block__text" ><h5>Viezh Robert</h5>
                                    <p>Warsaw, Poland</p></div>
                                <div className="review--cards__card--block__icon">
                                    <h6>4.5</h6>
                                    <img src={Star} alt=""/>
                                </div>

                            </div>
                            <p className="review--cards__card--p">«Вау… Я очень рад использовать этот VPN, он оказался
                                больше, чем мои ожидания, и до сих
                                пор не было никаких проблем. (Название) всегда лучший».</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Review;