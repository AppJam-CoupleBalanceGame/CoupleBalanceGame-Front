import '../../styles/common/Style.css';
import style from '../../styles/common/Header.module.css';

import { FaArrowLeft } from "react-icons/fa6";

function Header({ text }) {
    return (
        <>
            <div className={style['header']}>
                <FaArrowLeft className={style['left-icon']} />
                <p className={style['title']}>{text}</p>
            </div>
        </>
    )
}

export default Header;