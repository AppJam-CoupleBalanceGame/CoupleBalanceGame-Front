import { useState } from 'react';
import '../../styles/common/Style.css';
import style from '../../styles/point/Point.module.css';

import Header from '../common/Header';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";

function Point2({text}) {

    return (
        <>
            <Link to={'/home'} style={{textDecoration: 'none', color: 'black'}}><Header text={('포인트')} /></Link>
            <hr style={{ marginTop: '-13%', borderWidth: '2px', border: '1px solid #D9D9D9' }}/>
            <div className={style['container']}>
                <div className={style['head']}>
                    <Link to={'/point-pay'}><img src='/images/Nav/coin.png' className={style['coin']} /></Link>
                    <p className={style['title']}>{1350}</p>
                </div>

                <div className={style['body']}>
                    <div className={style['section']}>
                        <div className={style['box']}>
                            <p className={style['text']}>포인트로 교환하기</p>
                            <Link to={'/point-change'} style={{textDecoration: 'none', color: 'black'}}><BsArrowRight className={style['icon']} /></Link>
                        </div>
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
                    </div>

                    <div className={style['section']}>
                        <div className={style['box']}>
                            <p className={style['text']}>방 꾸미기 아이템 교환하기</p>
                            <Link to={'/room-change'} style={{textDecoration: 'none', color: 'black'}}><BsArrowRight className={style['icon']} /></Link>
                        </div>
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
                </div>
            </div>
        </>
    )
}

export default Point2;

