import market from '../../img/product-cover-75.png'
import Acardion from '../Acardion';
import { useState } from 'react';
import imgLogo from '../../img/logo1.png'
import imgCards from '../../img/cards.svg'

const Marketing1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    }
  
    const closeModal = () => {
      setIsOpen(false);
    }
    
    return (
      <> 
            <div id='marketingOne'>
            <div className="container">
                <div className="marketingOne">
                         <div className='market-text'>
                            <h1>Маркетинг</h1>
                            <p>Мы предоставляем множество функций, которые вы можете использовать. Постепенное накопление информация </p>
                         </div>
                         <div className='market-img'>
                            <div><img src={market}></img></div>
                            <div className='market-title'>
                                <h1>Как ставить о оценивать задачи</h1>
                                <h6>Прежде чем разбирать бизнес-кейсы, стоит поговорить об основах финансовой грамотности. На вопрос, как сохранить деньги, Маргулан Калиевич предлагает несколько стратегий:</h6>
                                <h6> <span>Фиксированный налог</span> на будущее и безопасность. С каждого своего дохода откладывайте по 10% на будущее и на безопасность. Прелесть этой стратегии в том, что она подходит как длялюдей с доходом 500$, так и для людей с доходом 500 000$.</h6>
                                <h6>  <span></span>Прогрессивный налог на будущее. Суть метода в том, что вы откладываете не 10%, а столько, сколько вам лет. Например, если вам 30, то и налог — 30%. Это могут позволить уже не все, зато для обладателей больших доходов такой подход более уместен, ведь он лучше страхует от рисков, связанных с предпринимательской деятельностью.</h6>
                                <h6>Регрессивный налог на будущее. В данном случае вы откладываете не такой процент, сколько вам лет, а процент, равный вычитанию возраста из 100. То есть если вам 30, то откладывайте 70% дохода. Очевидно, этот способ подойдёт только для тех, лишь малая доля дохода которых уже обеспечивает комфорт. Зато это неплохой задел на раннюю пенсию и безбедное детство детей.</h6>
                            </div>
                         </div>
                </div>
                <div  style={{
                      
                            width: "1140px" ,
                            color: "#000" ,
                            fontFamily: "Rubik",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            margin: "0px 170px" 
                         
                }} className='h6'> <p>Хранить эти деньги стоит диверсифицированно. 10% сбережений оставляйте в национальной валюте вашей страны. 90 % распределите на 3 валюты: швейцарский франк, норвежская крона, и что-то из: американского доллара, евро либо йены. Рассмотрите варианты сбережений в государственных бумагах, фиксированных к инфляции.Эти рекомендации касаются личного бюджета. Ниже мы рассмотрим основные финансовые рискив бизнесе и стратегии управления ими.</p></div>
                      
                <button  onClick={openModal} className='market-btn'>купить курс</button>
                {isOpen && (
        <div className="modal">
          <div className='modal--content'>
          <div className="modal--content__panel">
           <div className='modal--content__panel--general'>
           <img style={{paddingTop:"100px",paddingLeft:"80px"}} src={imgLogo} alt=''/>
           <div className='modal--content__panel--general__top'>
            <div className='modal--content__panel--general__top--h1'>
                <h1 style={{paddingLeft:"80px"}}>КРЕДИТНАЯ / ДЕБЕТОВАЯ КАРТА</h1>
            </div>
            <div className='modal--content__panel--general__top--cardsImg'>
                <img src={imgCards} alt=''/>
            </div>
           </div>
           <div className='modal--content__panel--general__inputs'>
            <div className='modal--content__panel--general__inputs--left'>
                 
                    <p>Имя владельца карты *</p>
                 <input type=''/> 
                
                
                 <p>Номер кредитной/дебетовой карты * </p>
                     <input type='number'/> 
                     <div style={{marginLeft:"328px"}}><button  onClick={closeModal}>Назад </button></div>

                
                
            </div>
            <div className='modal--content__panel--general__inputs--right'>
                
                    <p>Дата истечения срока действия  *</p>
                    <input type="month" placeholder="MM/YY"/>
                    
                    <p>CVC/CVV  * </p>
                    <input type=''/> 
                    <div><button>Оплата</button></div>

            </div>
           </div>
           </div>
          </div>
          </div>
        </div>
      )}
            </div>
            <div>
       
    </div>
            
        </div>
         <Acardion/>
      </>
    );
};

export default Marketing1;