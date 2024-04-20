import React, { useState, useEffect } from 'react';
import '../../styles/common/Style.css';
import style from '../../styles/home/Home.module.css';
import CoinBar from '../../components/common/Coin-Bar';
import Nav from '../../components/nav/Nav';
import { MdOutlineAccessTimeFilled } from "react-icons/md";

function Home() {
    const [remainingMinutes, setRemainingMinutes] = useState('');
    const [remainingSeconds, setRemainingSeconds] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const targetTime = new Date('2024-04-21T10:00:00');

        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('ko-KR'));
            
            let difference = targetTime - now;

            if (difference < 0) {
                setRemainingMinutes(0);
                setRemainingSeconds(0);
            } else {
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setRemainingMinutes(minutes);
                setRemainingSeconds(seconds);
            }
        };

        updateTime();

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={style['container']}>
            <CoinBar text={(350)} />
            <div className={style['title']}>
                <MdOutlineAccessTimeFilled className={style['watch']} />
                <p>다음 퀴즈까지 <span className={style['time']}>{String(remainingMinutes).padStart(2, '0')}:{String(remainingSeconds).padStart(2, '0')}</span></p>
            </div>
            <img src='/images/Login/talk.png' className={style['img']} />
            <Nav />
        </div>
    );
}

export default Home;