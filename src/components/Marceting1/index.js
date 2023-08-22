import market from '../../img/product-cover-75.png'
import Acardion from '../Acardion';
import { useEffect, useState } from 'react';
import imgLogo from '../../img/logo1.png'
import imgCards from '../../img/cards.svg'
import { AiFillCheckCircle } from 'react-icons/ai';


const Marketing1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false)
    const [cardHolderName, setCardHolderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCVC] = useState('');
    const [isCardHolderNameValid, setIsCardHolderNameValid] = useState(true);
    const [isCardNumberValid, setIsCardNumberValid] = useState(true);
    const [isExpiryDateValid, setIsExpiryDateValid] = useState(true);
    const [isCVCValid, setIsCVCValid] = useState(true);
   

    const validateForm = () => {
      const isCardHolderNameValid = cardHolderName.trim() !== '';
      const isCardNumberValid = /^\d{16}$/.test(cardNumber);
      const isExpiryDateValid =/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate) && !isDateExpired(expiryDate);
      const isCVCValid = /^\d{3,4}$/.test(cvc);

      setIsCardHolderNameValid(isCardHolderNameValid);
      setIsCardNumberValid(isCardNumberValid);
      setIsExpiryDateValid(isExpiryDateValid);
      setIsCVCValid(isCVCValid);

      return (
          isCardHolderNameValid && isCardNumberValid && isExpiryDateValid && isCVCValid
      );
  };


    useEffect(() => {
      if (modal) {
        const timeout = setTimeout(() => {
          setModal(false);
        }, 3000); 
        
        return () => clearTimeout(timeout);
      }
    }, [modal]);

    const openModal = () => {
      setIsOpen(true);
    }
  
    const closeModal = () => {
      setIsOpen(false);
    }

    const isDateExpired = (date) => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1; 
  
      const [inputMonth, inputYear] = date.split('').map((part) => parseInt(part, 10));
  
      if (inputYear < currentYear) {
          return true;
      } else if (inputYear === currentYear && inputMonth < currentMonth) {
          return true;
      } else {
          return false;
      }
  };  
  
  

  const handlePayment = () => {
      if (validateForm()) {
          setModal(false);
      }
  };

      
    
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
                      
                            width: "1153px" ,
                            color: "#000" ,
                            fontFamily: "Rubik",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            margin: "0px 165px" 
                         
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
                          <div className='modal--content__panel--general__top--opshn'>
                    <p>Выберите метод оплаты</p>
                   <div className='modal--content__panel--general__top--opshn__input'>
            </div>
    
          </div>
           
           <div className='modal--content__panel--general__inputs'>
            
            <div className='modal--content__panel--general__inputs--left'>
                 
                    <p>Имя владельца карты *</p>
                    <input
            type="text"
            value={cardHolderName}
             pattern="[A-Z\s]" 
            onChange={(e) => setCardHolderName(e.target.value)}
        />
        {!isCardHolderNameValid && (
            <p style={{ color: 'red' }}>Введите имя владельца</p>
        )}
                
                
                 <p>Номер кредитной/дебетовой карты * </p>
                 <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
        />
        {!isCardNumberValid && (
            <p style={{ color: 'red' }}>Введите корректный номер карты</p>
        )}
                     <div style={{marginLeft:"328px"}}><button  onClick={closeModal}>Назад </button></div>

                
                
            </div>
            <div className='modal--content__panel--general__inputs--right'>
                
                    <p>Дата истечения срока действия  *</p>

                                    <input
                                        type="text"
                                        value={expiryDate}
                                        onChange={(e) => setExpiryDate(e.target.value)}
                                        
                                    />
                                    {!isExpiryDateValid && (
                                        <p style={{ color: 'red' }}>Некорректная дата</p>
                                    )}
                    
                    <p>CVC/CVV  * </p>
                    <input
                                        type="text"
                                        value={cvc}
                                        onChange={(e) => setCVC(e.target.value)}
                                    />
                                    {!isCVCValid && (
                                        <p style={{ color: 'red' }}>Некорректный CVC/CVV</p>
                                    )}
                    <div> <button onClick={()=>{handlePayment(setModal(!modal))}}>Оплата</button>
</div>
                    <div style={{ display:modal ? '':'none'}}>
                        <div className='modal--content__panel--general__inputs--right__modules'>
                                               <div className='modal--content__panel--general__inputs--right__modules--arrow'>
                            <p style={{textAlign:"center",paddingTop:"30px",color:"white"}}><span><AiFillCheckCircle/></span></p>
                          </div>
                        </div>
                    </div>

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
        {/* <Acardion/> */}
       
       </>
    );
};

export default Marketing1;