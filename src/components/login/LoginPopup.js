import '../../styles/common/Style.css'
import loginStyle from '../../styles/login/LoginPopupPage.module.css'

import Header from '../common/Header';
import { Link } from 'react-router-dom';

function LoginPopup() {
    return (
        <>
            <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}><Header text={('고객센터')}/></Link>
            <div className={loginStyle['container']}>
                <div className={loginStyle['body']}>
                    <p className={loginStyle['question']}>Q. 이미 계정이 있는데 어떡하오?</p>
                    <p className={loginStyle['answer']}>
                        저희 엘레강스 커플 앱의 로그인 및 회원가입은<br/>
                        모두 메인창 시작하기 버튼으로 가능하오!<br/><br/>
                        만약 계정을 찾을 수 없다면 오른쪽 하단의<br/>
                        채팅 문의를 통해 연락주시오!
                    </p>
                </div>
                <div className={loginStyle['footer']}>
                    <img src='/images/Login/talk.png' className={loginStyle['talk']} />
                </div>
            </div>
        </>
    )
}

export default LoginPopup;