import '../../styles/common/Style.css';
import style from '../../styles/home/HomeOrderFinish.module.css';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function HomeOrderFinish() {
    const location = useLocation();
    const [productPrice, setProductPrice] = useState(0);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const amount = searchParams.get('amount');
        setProductPrice(amount || 0);
    }, [location.search]);

    return (
        <>
            <div className={style['header']}>
                <p>포인트 결제완료</p>
            </div>
            <hr style={{ width: '100%', marginTop: '5%', borderWidth: '2px', border: '1px solid #D9D9D9' }}/>
            <div className={style['container']}>
                <img src='/images/Home/폭죽.png' />
                <div className={style['textContainer']}>
                    <p>포인트가 결제 완료되었어요!</p>
                    <p>{productPrice} 포인트가 추가되었습니다</p>
                </div>

                <Link to='/home' style={{ display: 'flex', textDecoration: 'none', color: 'black', width: '80%', justifyContent: 'center', alignItems: 'center' }}>
                    <div className={style['button']}>
                        <button>확인</button>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default HomeOrderFinish;