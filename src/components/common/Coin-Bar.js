import '../../styles/common/Style.css';
import CoinBarstyle from '../../styles/common/CoinBar.module.css';

import { HiMiniBell } from "react-icons/hi2";

function Header({ text }) {
    return (
        <>
            <div className={CoinBarstyle['coin-bar']}>
                <div className={CoinBarstyle['box']}>
                    <img src='/images/Nav/coin.png' className={CoinBarstyle['coin']} />
                    <p className={CoinBarstyle['title']}>{text}</p>
                </div>
                <HiMiniBell className={CoinBarstyle['bell']} />
            </div>
        </>
    )
}

export default Header;