import '../../styles/common/Style.css';
import style from '../../styles/profile/ProfileSetting.module.css';

import Header from '../common/Header';

function ProfileSetting() {
    return (
        <>
            <Header text={('프로필 설정')} />
            <div className={style['container']}>
                <div className={style['textContainer']}>
                    <div className={style['nickName']}>
                        <p>별명</p>
                        <input type='text' placeholder='별명을 입력해주세요.'/>
                    </div>

                    <div className={style['birth']}>
                        <p>생년월일</p>
                        <input type='text' placeholder='생년월일을 입력해주세요.'/>
                    </div>

                    <div className={style['date']}>
                        <p>사귀기 시작한 날짜</p>
                        <input type='text' placeholder='날짜를 입력해주세요.'/>
                    </div>
                </div>

                <div className={style['buttonContainer']}>
                    <button>확인</button>
                </div>
            </div>
        </>
    )
}

export default ProfileSetting;