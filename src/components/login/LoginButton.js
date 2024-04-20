import { Link } from 'react-router-dom';
import '../../styles/common/Style.css';
import style from '../../styles/login/LoginButton.module.css';
import { Icon } from '@iconify/react';

function LoginButton() {
    return (
        <>
            <div className={style['container']}>
                <Link to="/couple-invite" style={{ textDecoration: 'none', color: 'black' }}>
                    <div className={style['googleButtonDiv']}>
                        <button className={style['googleButton']}> <Icon icon="flat-color-icons:google" /> Google로 여정을 시작하겠소</button>
                    </div>
                </Link>

                <div className={style['kakaoButtonDiv']}>
                    <button className={style['kakaoButton']}> <img src='images/Login/kakaoButton.png' /> Kakao로 여정을 시작하겠소</button>
                </div>

                <div className={style['eleganceButtonDiv']}>
                    <button className={style['eleganceButton']}> <img src='images/Login/eleganceButton.png' /> 엘레강스 계정은 현재 쓸 수 없소</button>
                </div>
            </div>
        </>
    )
}

export default LoginButton;