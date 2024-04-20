import '../../styles/common/Style.css';
import style from '../../styles/balanceGame/BalanceGame.module.css';

import Header from '../common/Header';
import BalanceQuestion from './BalanceQuestion';
import BalanceAnswer from './BalanceAnswer';
import Nav from '../nav/Nav';

function BalanceGame() {
    return (
        <>
            <Header text={('밸런스 게임')} />
            <div className={style['container']}>
                <BalanceQuestion question={('요리하는 스타일은?')} />
                <BalanceAnswer oneAnswer={("전통적인 요리")} twoAnswer={("실험적이고 창의적인 요리")}/>
                
                <div className={style['buttonContainer']}>
                    <button>다음</button>
                </div>
            </div>
            <Nav />
        </>
    )
}

export default BalanceGame;