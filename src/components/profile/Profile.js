import '../../styles/common/Style.css';
import profileStyle from '../../styles/profile/Profile.module.css';

import CoinBar from '../common/Coin-Bar'
import ButtonGray from '../common/ButtonGray'
import Nav from '../nav/Nav';

import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div className={profileStyle['profile']}>
            <CoinBar text={(350)} />
            <div className={profileStyle['couple-name']}>
                <p className={profileStyle['nickname-1']}>김엘레강스</p>
                <img src='/images/Profile/heart.png' className={profileStyle['heart']} />
                <p className={profileStyle['nickname-2']}>최엘레강스</p>
            </div>
            <p className={profileStyle['day-text']}>사귄지 <span className={profileStyle['day']}>100</span>일</p>

            <div className={profileStyle['profile-button']}>
                <Link to="/profile-change" style={{textDecoration: 'none', color: 'black'}}><ButtonGray text={('프로필 수정')} /></Link>
                <Link to="/balance-game-time" style={{textDecoration: 'none', color: 'black'}}><ButtonGray text={('밸런스게임 시간 설정')} /></Link>
                <ButtonGray text={('엘레강스 커플에 문의하기')} />
                <ButtonGray text={('알림 설정')} />
                <ButtonGray text={('법률정보')} />
            </div>
            <Nav />
        </div>
    )
}

export default Profile;