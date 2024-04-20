import '../../styles/common/Style.css';
import style from '../../styles/common/Header.module.css';

import { Link } from 'react-router-dom';

import { FaArrowLeft } from "react-icons/fa6";

function Header({ text }) {
    return (
        <>
            <div className={style['header']}>
                <Link to="/login" style={{textDecoration: 'none', color: 'black'}}> <FaArrowLeft className={style['left-icon']} /> </Link>
                <p className={style['title']}>{text}</p>
            </div>
        </>
    )
}

export default Header;