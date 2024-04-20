import '../../styles/common/Style.css'
import loginStyle from '../../styles/login/LoginPopupPage.module.css'
import { FaArrowLeft } from "react-icons/fa6";

function LoginPopup() {
    return (
        <div className={loginStyle['container']}>
            <div className={loginStyle['header']}>
                <FaArrowLeft className={loginStyle['left-icon']} />
                <p className={loginStyle['title']}>고객센터</p>
            </div>
            <div className={loginStyle['body']}>
                <p className={loginStyle['question']}>Q. 이미 계정이 있는데 어떡하나요?</p>
                <p className={loginStyle['answer']}>
                    저희 엘레강스 커플 앱의 로그인 및 회원가입은<br/>
                    모두 메인창 시작하기 버튼으로 가능합니다.<br/><br/>
                    만약 계정을 찾을 수 없다면 오른쪽 하단의<br/>
                    채팅 문의를 통해 연락주세요!
                </p>
            </div>
        </div>
    )
}

export default LoginPopup;