import React from 'react';

const videodi = () => {
    return (
        <div id="video">
            <div className="container">
                <div className="video">
                    <div className='video-if'>
                      <iframe width="850px" height="500px" src="https://www.youtube.com/embed/UIKyAKC0ab8" ></iframe>
                    </div>
                    <div className='video-text'>
                         <div className='video1'>
                            <h3>Как ставить и оценивать задачи</h3>
                            <button>Поделиться</button>
                         </div>
                         <div className='video2'>
                                  <p>1 месяц назад</p>
                                <p>1430 просмотров</p>
                         </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default videodi;