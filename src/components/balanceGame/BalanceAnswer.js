import '../../styles/common/Style.css';
import style from '../../styles/balanceGame/BalanceAnswer.module.css';
import { useState } from 'react';

function BalanceAnswer({ oneAnswer, twoAnswer }) {
    const [select, setSelect] = useState("");

    const handleSelect = (text) => {
        switch(text) {
            case 'oneAnswer': setSelect("oneAnswer"); break;
            case 'twoAnswer': setSelect("twoAnswer"); break;
            default: setSelect("");
        }
    };

    return (
        <>
            <div className={style['container']}>
                <div className={`${style['oneAnswer']} ${select === 'oneAnswer' ? style['changeAnswer'] : style['oneAnswer']}`} onClick={() => handleSelect('oneAnswer')}>
                    <input type="button" value={oneAnswer} />
                </div>

                <div className={`${style['twoAnswer']} ${select === 'twoAnswer' ? style['changeAnswer'] : style['twoAnswer']}`} onClick={() => handleSelect('twoAnswer')}>
                    <input type="button" value={twoAnswer} />
                </div>
            </div>
        </>
    )
}

export default BalanceAnswer;