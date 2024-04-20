import React, { useState, useEffect } from 'react';
import '../../styles/common/Style.css';
import style from '../../styles/home/Bell.module.css';
import Header from '../../components/common/Header';
import { Link } from 'react-router-dom';

function Bell() {

    return (
        <>
        <Link to='/home' style={{textDecoration: 'none', color: 'black'}}><Header text={('알림')} /></Link>
        <div className={style['container']}>
            <div className={style['box']}>
                <div className={style['content']}>
                    <img src='/images/Nav/selectBalanceGame.svg' className={style['game']} />
                    <p className={style['title']}>밸런스 게임</p>
                </div>
                <p className={style['subtitle']}>오늘의 첫번째 밸런스 게임이 도착했어요!</p>
            </div>
            <div className={style['box']}>
                <div className={style['content']}>
                    <img src='/images/Login/setting.svg' className={style['setting']} />
                    <p className={style['title']}>시스템</p>
                </div>
                <p className={style['subtitle']}><span className={style['couple-name']}></span>님과 커플이 연결되셨어요!</p>
            </div>
            <div className={style['box']}>
                <div className={style['content']}>
                    <img src='/images/Login/setting.svg' className={style['setting']} />
                    <p className={style['title']}>시스템</p>
                </div>
                <p className={style['subtitle']}>로그인이 완료되었어요!</p>
            </div>
        </div>
        </>
    );
}

export default Bell;