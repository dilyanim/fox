import React from 'react';
import market from '../../img/product-cover-75.png'

const Marketing1 = () => {
    return (
        <div id='marketingOne'>
            <div className="container">
                <div className="marketingOne">
                         <div className='market-text'>
                            <h1>Маркетинг</h1>
                            <p>Мы предоставляем множество функций, которые вы можете использовать. Постепенное накопление информация </p>
                         </div>
                         <div>
                            <div><img src={market}></img></div>
                            <div>
                                <h1>Как ставить о оценивать задачи</h1>
                                <h6>Прежде чем разбирать бизнес-кейсы, стоит поговорить об основах финансовой грамотности. На вопрос, как сохранить деньги, Маргулан Калиевич предлагает несколько стратегий:</h6>
                                <h6>Фиксированный налог на будущее и безопасность. С каждого своего дохода откладывайте по 10% на будущее и на безопасность. Прелесть этой стратегии в том, что она подходит как длялюдей с доходом 500$, так и для людей с доходом 500 000$.</h6>
                                <h6>Прогрессивный налог на будущее. Суть метода в том, что вы откладываете не 10%, а столько, сколько вам лет. Например, если вам 30, то и налог — 30%. Это могут позволить уже не все, зато для обладателей больших доходов такой подход более уместен, ведь он лучше страхует от рисков, связанных с предпринимательской деятельностью.</h6>
                                <h6>Регрессивный налог на будущее. В данном случае вы откладываете не такой процент, сколько вам лет, а процент, равный вычитанию возраста из 100. То есть если вам 30, то откладывайте 70% дохода. Очевидно, этот способ подойдёт только для тех, лишь малая доля дохода которых уже обеспечивает комфорт. Зато это неплохой задел на раннюю пенсию и безбедное детство детей.</h6>
                            </div>
                         </div>
                </div>
            </div>
            
        </div>
    );
};

export default Marketing1;