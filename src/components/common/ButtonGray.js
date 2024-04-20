import '../../styles/common/Style.css';
import style from '../../styles/common/ButtonGray.module.css';

import { FaAngleRight } from "react-icons/fa6";

function ButtonGray({ text }) {
    return (
        <>
            <div className={style['button-gray']}>
                <p className={style['title']}>{text}</p>
                <FaAngleRight />
            </div>
        </>
    )
}

export default ButtonGray;