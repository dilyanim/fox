import React from 'react';
import img1 from '../../img/fixed1.png';
import img2 from '../../img/fixed2.png';
import img3 from '../../img/fixed3.png';
import line from '../../img/line.png';


const Blocks = () => {
    return (
        <div id='blocks'>
            <div className="container">
                <div className="blocks">
                    <div className="block1">
                         <img src={img1}></img>
                         <h4>Пожизненный доступ</h4>
                         <div className='line'><img src={line}></img></div>
                         <p>Постепенное накопление информация об атомном и мелкомасштабное поведение...</p>
                    </div>
                    <div className="block1">
                    <img src={img2}></img>
                         <h4>Сертифицированный преподаватель</h4>
                         <div className='line'><img src={line}></img></div>

                         <p>Постепенное  накопление информация об атомном и мелкомасштабное поведение...</p>
                    </div>
                    <div className="block1">
                         <img src={img3}></img>
                         <h4>Обучающие курсы</h4>
                         <div className='line'><img src={line}></img></div>
                         <p>Постепенное накопление информация об атомном и мелкомасштабное поведение...</p></div>
                </div>
            </div>
            
        </div>
    );
};

export default Blocks;