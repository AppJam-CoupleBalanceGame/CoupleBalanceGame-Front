import '../../styles/common/Style.css';
import style from '../../styles/balanceGame/BalanceQuestion.module.css';

function BalanceQuestion({ question }) {
    return (
        <>
            <div className={style['container']}>
                <p>{question}</p>
            </div>
        </>
    )
}

export default BalanceQuestion;