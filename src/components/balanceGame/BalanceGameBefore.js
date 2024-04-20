import '../../styles/common/Style.css';
import style from '../../styles/balanceGame/BalanceGameBefore.module.css';

import ButtonGray from '../../components/common/ButtonGray';
import Nav from '../../components/nav/Nav';

import { Link } from 'react-router-dom';

function BalanceGameBefore() {
    return (
        <div className={style['container']}>
            <p className={style['title']}>이전 내용</p>
            <div className={style['box']}>
                <ButtonGray text={('#3 선호하는 모험 유형은?')} />
                <ButtonGray text={('#2 선호하는 식당모험 유형은?')} />
                <Link to="/balance-game-num" style={{textDecoration: 'none', color: 'black'}}><ButtonGray text={('#1 배우고 싶은 새로운 취미는?')} /></Link>
            </div>
            <Nav />
        </div>
    )
}

export default BalanceGameBefore;