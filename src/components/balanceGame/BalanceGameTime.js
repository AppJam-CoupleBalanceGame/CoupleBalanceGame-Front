import '../../styles/common/Style.css';
import style from '../../styles/balanceGame/BalanceGameTime.module.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../common/Header';

function BalanceGameTime() {
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [buttonColor, setButtonColor] = useState('');

    const toggleSelectTime = (time) => {
        if (selectedTimes.includes(time)) {
            setSelectedTimes(selectedTimes.filter(selectedTime => selectedTime !== time));
        } else {
            if (selectedTimes.length < 5) {
                setSelectedTimes([...selectedTimes, time]);
            }
        }

        if (selectedTimes.length >= 0) {
            setButtonColor(style['button-selected']);
        } else {
            setButtonColor('');
        }
    };

    const generateTime = (startHour, endHour) => {
        const times = [];
        for (let hour = startHour; hour <= endHour; hour++) {
            times.push(`${hour.toString().padStart(2, '0')}`);
        }
        return times;
    };

    return (
        <>
            <Header text={("")}/>
            <div className={style['container']}>
                <div className={style['AM']}>
                    <div className={style['textDiv']}>
                        <p>오전</p>
                        <p>5개 설정이 가능합니다</p>
                    </div>

                    <div className={style['grid-container']}>
                        {generateTime(0, 11).map((time, index) => (
                            <div 
                                className={`${style['item-container']} ${selectedTimes.includes(time) ? style['selected'] : ''}`} 
                                key={index}
                                onClick={() => toggleSelectTime(time)}
                            >
                                <p>{time}:00</p>
                            </div>
                        ))}
                    </div>
                </div>

                <hr />

                <div className={style['PM']}>
                    <div className={style['textDiv']}>
                        <p>오후</p>
                    </div>

                    <div className={style['grid-container']}>
                        {generateTime(12, 23).map((time, index) => (
                            <div 
                                className={`${style['item-container']} ${selectedTimes.includes(time) ? style['selected'] : ''}`} 
                                key={index}
                                onClick={() => toggleSelectTime(time)}
                            >
                                <p>{time}:00</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`${style['buttonContainer']} ${buttonColor}`}>
                    <Link to='/profile' style={{ textDecoration: 'none' }}> <button>확인</button> </Link>
                </div>
            </div>
        </>
    )
}

export default BalanceGameTime;