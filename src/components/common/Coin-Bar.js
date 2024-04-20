import '../../styles/common/Style.css';
import CoinBarstyle from '../../styles/common/CoinBar.module.css';

import { HiMiniBell } from "react-icons/hi2";
import { Link } from 'react-router-dom';

function Header({ text }) {
    return (
        <>
            <div className={CoinBarstyle['coin-bar']}>
                <div className={CoinBarstyle['box']}>
                    <img src='/images/Nav/coin.png' className={CoinBarstyle['coin']} />
                    <p className={CoinBarstyle['title']}>{text}</p>
                </div>
                <Link to="/bell">
                    <HiMiniBell className={CoinBarstyle['bell']} />
                </Link>
            </div>
        </>
    )
}

export default Header;