import '../../styles/common/Style.css'
import navStyle from '../../styles/nav/Nav.module.css'
import { HiPaintBrush } from "react-icons/hi2";
import { AiOutlineHome } from "react-icons/ai";
import { IoPerson } from "react-icons/io5"

function Nav() {
    return (
        <div className={navStyle['nav']}>
                <div className={navStyle['nav-list']}>
                    <img src='/images/Nav/custom.svg' className={navStyle['icon']} />
                    <p className={navStyle['nav-text']}>방 꾸미기</p>
                </div>
                <div className={navStyle['nav-list']}>
                    <img src='/images/Nav/home.svg' className={navStyle['icon']} />
                    <p className={navStyle['nav-text']}>홈</p>
                </div>
                <div className={navStyle['nav-list']}>
                    <img src='/images/Nav/game.svg' className={navStyle['icon']} />
                    <p className={navStyle['nav-text']}>밸런스 게임</p>
                </div>
                <div className={navStyle['nav-list']}>
                    <img src='/images/Nav/profile.svg' className={navStyle['icon']} />
                    <p className={navStyle['nav-text']}>프로필</p>
                </div>
        </div>
    )
}

export default Nav;