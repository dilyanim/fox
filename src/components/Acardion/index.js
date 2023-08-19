import React, {useState} from 'react';
import { IoIosArrowDropdownCircle}  from 'react-icons/io'
import { IoIosArrowDropupCircle } from 'react-icons/io'

const Acardion = () => {
    const [question1, setQuestion1] = useState(false)
    const [question2, setQuestion2] = useState(false)
    const [question3, setQuestion3] = useState(false)
    const [question4, setQuestion4] = useState(false)

    return (
        <div id="pages">
            <div className="container">
                <div className="pages">
                  
                    <div className="pages--we">
                        <div onClick={() => {
                            setQuestion1(!question1)
                            setQuestion2(false)
                            setQuestion3(false)
                            setQuestion4(false)

                        }} style={{height: question1 ? "210px" : ""}} className="pages--we__left">
                            <div className="pages--we__left--title">
                                <h3 className="pages--weleft--titleaccord">
                                Урок 1 : Ознакомление
                                </h3>
                                <button className="pages--weleft--titleaccord--btn">
                                    { question1 ? <span className="accordion--weleft--titleaccord--btn__icon">
                                <IoIosArrowDropupCircle/>
                            </span> : <span className="pages--weleft--titleaccord--btn__down">
                                <IoIosArrowDropdownCircle/>
                            </span>
                                    }
                                </button>
                            </div>
                            <div className="pages--weleft--titleaccord--btn__answer">
                              
                           
                            </div>
                        </div>
                        <div onClick={() => {
                            setQuestion1(false)
                            setQuestion2(!question2)
                            setQuestion3(false)
                            setQuestion4(false)
                        }} style={{height: question2 ? "210px" : ""}} className="pages--we__left">
                        <div className="pages--we__left--title">
                          <h3 className="pages--weleft--titleaccord">
                          Урок 2 : Методы бизнеса
                          </h3>
                          <button className="pages--weleft--titleaccord--btn">
                              { question1 ? <span className="accordion--weleft--titleaccord--btn__icon">
                          <IoIosArrowDropupCircle/>
                      </span> : <span className="pages--weleft--titleaccord--btn__down">
                          <IoIosArrowDropdownCircle/>
                      </span>
                              }
                          </button>
                      </div>
                      <div className="pages--weleft--titleaccord--btn__answer">
                         
                      </div>
                  </div>
                  <div onClick={() => {
                      setQuestion1(false)
                      setQuestion2(false)
                      setQuestion3(!question3)
                      setQuestion4(false)
                  }} style={{height: question3 ? "210px" : ""}} className="pages--we__left">
                          <div className="pages--we__left--title">
                          <h3 className="pages--weleft--titleaccord">
                          Урок 3 : Как начать зарабатывать больше
                          </h3>
                          <button className="pages--weleft--titleaccord--btn">
                              { question1 ? <span className="accordion--weleft--titleaccord--btn__icon">
                          <IoIosArrowDropupCircle/>
                      </span> : <span className="pages--weleft--titleaccord--btn__down">
                          <IoIosArrowDropdownCircle/>
                      </span>
                              }
                          </button>
                      </div>
                      <div className="pages--weleft--titleaccord--btn__answer">
                        
                      </div>
                  </div>
                  <div onClick={() => {
                      setQuestion1(false)
                      setQuestion2(false)
                      setQuestion3(false)
                      setQuestion4(!question4)
                    }} style={{height: question4 ? "210px" : ""}} className="pages--we__left">
                    <div className="pages--we__left--title">
                        <h3 className="pages--weleft--titleaccord">
                        Урок 4 : Заключение
                        </h3>
                        <button className="pages--weleft--titleaccord--btn">
                            { question1 ? <span className="accordion--weleft--titleaccord--btn__icon">
                        <IoIosArrowDropupCircle/>
                    </span> : <span className="pages--weleft--titleaccord--btn__down">
                        <IoIosArrowDropdownCircle/>
                    </span>
                            }
                        </button>
                    </div>
                    <div className="pages--weleft--titleaccord--btn__answer">
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
);
};

export default Acardion;


