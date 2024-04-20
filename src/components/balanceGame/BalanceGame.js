import '../../styles/common/Style.css';
import style from '../../styles/balanceGame/BalanceGame.module.css';

import Header from '../common/Header';
import BalanceQuestion from './BalanceQuestion';
import BalanceAnswer from './BalanceAnswer';
import Nav from '../nav/Nav';
import { Link } from 'react-router-dom';

function BalanceGame() {
    return (
        <>
            <Header text={('밸런스 게임')} />
            <div className={style['container']}>
                <BalanceQuestion question={('요리하는 스타일은?')} />
                <BalanceAnswer firstOption={("전통적인 요리")} secondOption={("실험적이고 창의적인 요리")}/>
                
                <Link to="/balance-game-before" style={{ textDecoration: 'none', color: 'black', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className={style['buttonContainer']}>
                        <button>다음</button>
                    </div>
                </Link>
            </div>
            <Nav />
        </>
    )
}

export default BalanceGame;