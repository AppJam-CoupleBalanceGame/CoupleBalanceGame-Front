import { useState } from 'react';
import '../../styles/common/Style.css';
import style from '../../styles/point/RoomChange.module.css';

import Header from '../common/Header';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";

function RoomChange() {

    return (
        <>
            <Link to={'/point'} style={{textDecoration: 'none', color: 'black'}}><Header text={('코인')} /></Link>
            <hr style={{ marginTop: '-13%', borderWidth: '2px', border: '1px solid #D9D9D9' }}/>
            <div className={style['container']}>
                <p className={style['text']}>방 꾸미기 아이템 교환하기</p>
                <div className={style['list']}>
                    <img src='/images/Point/section3.png' className={style['coin']} />
                    <div className={style['group']}>
                        <p className={style['txt']}>150 포인트</p>
                        <p>큐티뽀짝한 핑크 책상</p>
                    </div>
                </div>
                <div className={style['list']}>
                    <img src='/images/Point/section4.png' className={style['coin']} />
                    <div className={style['group']}>
                        <p className={style['txt']}>50 포인트</p>
                        <p>큐티뽀짝한 핑크 의자</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomChange;