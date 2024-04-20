import '../../styles/common/Style.css';
import style from '../../styles/login/LoginPage.module.css';

import { Link } from 'react-router-dom';

import { AiFillExclamationCircle } from "react-icons/ai";
import LoginButton from './LoginButton';

function Login() {
    return (
        <>
            <div className={style['container']}>
                <div className={style['topContainer']}>
                    <div className={style['textDiv1']}>
                        <img src='/images/Login/LoginKingImg.png' />
                        <p>환영하오.</p>
                    </div>
                    <div className={style['textDiv2']}>
                        <p>엘레강스 커플</p> <p>이오.</p>
                    </div>
                </div>

                <div className={style['buttonContainer']}>
                    <LoginButton />
                </div>

                <Link to="/loginPopup" style={{ textDecoration: 'none', top: '30%' }}>
                    <div className={style['bottomContainer']}>
                        <AiFillExclamationCircle />
                        <p>이미 계정이 있소?</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Login;