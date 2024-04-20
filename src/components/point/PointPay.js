import { useState } from 'react';
import '../../styles/common/Style.css';
import style from '../../styles/point/PointPay.module.css';

import Header from '../common/Header';

import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


function PointPay() {
    const [selectedButton, setSelectedButton] = useState(null);
    
    const handleButtonClick = (index) => {
        setSelectedButton(index);
    };

    return (
        <>
            <Header text={('포인트로 결제하기')} />
            <hr style={{ marginTop: '-13%', borderWidth: '2px', border: '1px solid #D9D9D9' }}/>
            <div className={style['container']}>
                <div className={style['boxContainer']}>
                    <div className={`${style['buttonContainer']} ${selectedButton === 0 ? style['selected'] : style['default']}`} onClick={() => handleButtonClick(0)}>
                        <div className={style['money']}>
                            <Icon icon='bi:p-circle-fill' style={{ color: '#FF90BC' }}/>
                            <p>X</p> <p>1000</p>
                        </div>
                        <div className={style['middleContainer']}> <Icon icon='bi:p-circle-fill' /> </div>
                        <p>1100원</p>
                    </div>

                    <div className={`${style['buttonContainer']} ${selectedButton === 1 ? style['selected'] : style['default']}`} onClick={() => handleButtonClick(1)}>
                        <div className={style['money']}>
                            <Icon icon='bi:p-circle-fill' style={{ color: '#FF90BC' }}/>
                            <p>X</p> <p>3000</p>
                        </div>
                        <div className={style['middleContainer']}> <Icon icon='bi:p-circle-fill' /> </div>
                        <p>3300원</p>
                    </div>
                </div>

                <div className={style['boxContainer']}>
                    <div className={`${style['buttonContainerMan']} ${selectedButton === 3 ? style['selected'] : style['default']}`} onClick={() => handleButtonClick(3)}>
                        <div className={style['money']}>
                            <Icon icon='bi:p-circle-fill' style={{ color: '#FF90BC' }}/>
                            <p>X</p> <p>5000</p>
                        </div>
                        <div className={style['middleContainer']}> <Icon icon='bi:p-circle-fill' /> </div>
                        <p>5500원</p>
                    </div>

                    <div className={`${style['buttonContainerMan']} ${selectedButton === 4 ? style['selected'] : style['default']}`} onClick={() => handleButtonClick(4)}>
                        <div className={style['money']}>
                            <Icon icon='bi:p-circle-fill' style={{ color: '#FF90BC' }}/>
                            <p>X</p> <p>10000</p>
                        </div>
                        <div className={style['middleContainer']}> <Icon icon='bi:p-circle-fill' /> </div>
                        <p>11000원</p>
                    </div>
                </div>
                
                <Link to={`/home-order?amount=${selectedButton === 0 ? 1000 : selectedButton === 1 ? 3000 : selectedButton === 3 ? 5000 : 10000}`} style={{ display: 'flex', textDecoration: 'none', color: 'black', width: '80%', justifyContent: 'center', alignItems: 'center' }}>
                    <div className={style['button']}>
                        <button>확인</button>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default PointPay;