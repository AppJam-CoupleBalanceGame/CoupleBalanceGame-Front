import { Link } from 'react-router-dom';
import '../../styles/common/Style.css';
import style from '../../styles/couple/CoupleInvite.module.css';

function CoupleInvite() {
    return (
        <>
            <div className={style['container']}>
                <div className={style['topContainer']}>
                    <div className={style['imgDiv']}>
                        <img src='/images/Couple/eleganceImg.png' />
                    </div>

                    <div className={style['textContainer']}>
                        <div className={style['textDiv1']}>
                            <p>세계 최초 엘레강스한 <br /> 밸런스게임 서비스라오.</p>
                        </div>

                        <div className={style['textDiv2']}>
                            <p>세계 최초 엘레강스한 벨런스게임 서비스오.</p>
                        </div>
                    </div>
                </div>

                <div className={style['buttonContainer']}>
                    <button>애인 초대하기</button>
                    <Link to="/couple-join" style={{ textDecoration: 'none', color: 'black', display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <button className={style['button']}>애인에게 초대받기</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CoupleInvite;