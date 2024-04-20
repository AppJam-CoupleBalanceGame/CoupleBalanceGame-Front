import { useState } from 'react';
import '../../styles/common/Style.css';
import style from '../../styles/point/PointChange.module.css';

import Header from '../common/Header';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";

function PointChange({}) {

    return (
        <>
            <Link to={'/point2'} style={{textDecoration: 'none', color: 'black'}}><Header text={('포인트')} /></Link>
            <hr style={{ marginTop: '-13%', borderWidth: '2px', border: '1px solid #D9D9D9' }}/>
            <div className={style['container']}>
                <p className={style['text']}>포인트로 교환하기</p>
                <div className={style['list']}>
                    <img src='/images/Point/section1.png' className={style['coin']} />
                    <div className={style['group']}>
                        <p className={style['txt']}>1800 포인트</p>
                        <p>CU | 마이쮸 자일리톨 포도</p>
                    </div>
                </div>
                <div className={style['list']}>
                    <img src='/images/Point/section2.png' className={style['coin']} />
                    <div className={style['group']}>
                        <p className={style['txt']}>1200 포인트</p>
                        <p>CU | 오리온 마이구미 복숭아</p>
                    </div>
                </div>
                <div className={style['list']}>
                    <img src='/images/Point/section5.png' className={style['coin']} />
                    <div className={style['group']}>
                        <p className={style['txt']}>1700 포인트</p>
                        <p>CU | 농심 감자깡</p>
                    </div>
                </div>
                <div className={style['list']}>
                    <img src='/images/Point/section6.png' className={style['coin']} />
                    <div className={style['group']}>
                        <p className={style['txt']}>2200 포인트</p>
                        <p>CU | 롯데 말랑카우 오리지널</p>
                    </div>
                </div>
                <div className={style['list']}>
                    <img src='/images/Point/section7.png' className={style['coin']} />
                    <div className={style['group']}>
                        <p className={style['txt']}>1700 포인트</p>
                        <p>CU | 롯데 치토스 매운맛</p>
                    </div>
                </div>
                <div className={style['list']}>
                    <img src='/images/Point/section8.png' className={style['coin']} />
                    <div className={style['group']}>
                        <p className={style['txt']}>1700 포인트</p>
                        <p>CU | 롯데 꼬깔콘 군옥수수맛</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PointChange;