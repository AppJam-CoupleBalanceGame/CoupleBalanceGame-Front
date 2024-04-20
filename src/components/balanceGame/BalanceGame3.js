import '../../styles/common/Style.css';
import style from '../../styles/balanceGame/BalanceGame-num.module.css';

import Header from '../common/Header';
import Nav from '../nav/Nav';
import { Link } from 'react-router-dom';

function BalanceGame3() {
    return (
        <>
            <Link to="/balance-game-before" style={{textDecoration: 'none', color: 'black'}}><Header /></Link>
            <div className={style['container']}>
                <p className={style['title']}>#1 배우고 싶은 새로운 취미는?</p>
                <p className={style['content']}>
                    #1번째질문<br />
                    체력을 요하는 활동 또는 스포츠<br />
                    VS 예술적이거나 창의적인 활동
                </p>
                <div className={style['box']}>
                    <div className={style['answer']}>
                        <p>김엘레강스님의 답</p>
                        <div className={style['value']}>체력을 요하는활동 또는 스포츠</div>
                    </div>
                    <div className={style['answer']}>
                        <p>최엘레강스님의 답</p>
                        <div className={style['value']}>예술적이거나 창의적인 활동</div>
                    </div>
                </div>
            </div>
            <Nav />
        </>
    )
}

export default BalanceGame3;