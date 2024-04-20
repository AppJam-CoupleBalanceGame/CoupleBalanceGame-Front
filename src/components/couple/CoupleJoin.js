import '../../styles/common/Style.css';
import style from '../../styles/couple/CoupleJoin.module.css';
import { Link } from 'react-router-dom';

function CoupleJoin() {
    return (
        <>
            <div className={style['container']}>
                <p className={style['title']}>초대코드 입력하기</p>
                <input type='text' placeholder='초대코드를 입력해주세요!'/>
                <Link to={'/profile-setting'} className={style['buttonContainer']}><button>확인</button></Link>
            </div>
        </>
    )
}

export default CoupleJoin;