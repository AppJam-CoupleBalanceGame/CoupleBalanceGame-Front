import '../../styles/common/Style.css';
import style from '../../styles/home/HomeOrder.module.css';
import Header from '../common/Header';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AiFillExclamationCircle } from "react-icons/ai";

function HomeOrder() {
    const location = useLocation();
    const [productPrice, setProductPrice] = useState(0);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const amount = searchParams.get('amount');
        setProductPrice(amount || 0);
    }, [location.search]);
    
    return (
        <> 
            <Header text={('주문하기')}/>
            <hr style={{ marginTop: '-13%', borderWidth: '2px', border: '1px solid #D9D9D9' }}/>
            <div className={style['container']}>
                <div className={style['textContainer']}>
                    <p>저장된 결제 수단</p>
                    <div className={style['orderContainer']}>
                        <AiFillExclamationCircle />
                        <p>결제가 어려우세요?</p>
                    </div>
                </div>

                <div className={style['imgContainer']}>
                    <img src='/images/home/card.png' />
                </div>

                <div className={style['bottomContainer']}>
                    <p>주문금액</p>
                    <div className={style['moneyContainer']}>
                        <div className={style['money']}>
                            <p>상품 금액</p>
                            <p>{productPrice}원</p>
                        </div>

                        <div className={style['addMoney']}>
                            <p>부가세</p>
                            <p>10%  |  {parseInt(productPrice) * 0.1}</p>
                        </div>

                        <div className={style['totalMoney']}>
                            <p>총 결제 금액</p>
                            <p>{parseInt(productPrice) + parseInt(productPrice) * 0.1}원</p>
                        </div>
                    </div>
                </div>

                <div className={style['buttonContainer']}>
                    <div className={style['bottomText']}>
                        <AiFillExclamationCircle />
                        <p>PG사 페이플과 파트너사 플리모를 통해 결제가 진행됩니다.</p>
                    </div>

                    <Link to="https://link.payple.kr/MTE2NTo3MTM2NDI0MTkxNjE1Mg"style={{ display: 'flex', textDecoration: 'none', color: 'black', width: '80%', justifyContent: 'center', alignItems: 'center' }}>
                        <div className={style['button']}>
                            <button>지금 결제하기</button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HomeOrder;