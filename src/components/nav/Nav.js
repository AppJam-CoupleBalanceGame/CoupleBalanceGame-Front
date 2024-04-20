import '../../styles/common/Style.css'
import navStyle from '../../styles/nav/Nav.module.css'

import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className={navStyle['nav']}>
            <Link to='/room-custom' style={{ textDecoration: 'none', color: 'black'}}>
                <div className={window.location.pathname!=='/room-custom' ? navStyle['nav-list'] : navStyle['select-nav-list']}>
                    {window.location.pathname!=='/room-custom' ? <img src='/images/Nav/custom.svg' className={navStyle['icon']} /> : <img src='/images/Nav/selectCustom.svg' className={navStyle['icon']} />}
                    <p className={navStyle['nav-text']}>방 꾸미기</p>
                </div>
            </Link>

            <Link to="/home" style={{ textDecoration: 'none', color: 'black'}}>
                <div className={window.location.pathname!=='/home' ? navStyle['nav-list'] : navStyle['select-nav-list']}>
                    {window.location.pathname!=='/home' ? <img src='/images/Nav/home.svg' className={navStyle['icon']} /> : <img src='/images/Nav/selectHome.svg' className={navStyle['icon']} />}
                    <p className={navStyle['nav-text']}>홈</p>
                </div>
            </Link>

            <Link to="/balance-game" style={{ textDecoration: 'none', color: 'black'}}>
                <div className={window.location.pathname!=='/balance-game' ? navStyle['nav-list'] : navStyle['select-nav-list']}>
                    {window.location.pathname!=='/balance-game' ? <img src='/images/Nav/game.svg' className={navStyle['icon']} /> : <img src='/images/Nav/selectBalanceGame.svg' className={navStyle['icon']} />}
                    <p className={navStyle['nav-text']}>밸런스 게임</p>
                </div>
            </Link>

            <Link to="/profile" style={{ textDecoration: 'none', color: 'black'}}>
                <div className={window.location.pathname!=='/profile' ? navStyle['nav-list'] : navStyle['select-nav-list']}>
                    {window.location.pathname!=='/profile' ? <img src='/images/Nav/profile.svg' className={navStyle['icon']} /> : <img src='/images/Nav/selectProfile.svg' className={navStyle['icon']} />}
                    <p className={navStyle['nav-text']}>프로필</p>
                </div>
            </Link>
        </div>
    )
}

export default Nav;