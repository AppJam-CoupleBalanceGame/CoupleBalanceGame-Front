import { useState } from 'react';
import '../../styles/common/Style.css';
import style from '../../styles/point/RoomCustom.module.css';

import Nav from '../nav/Nav'
function RoomCustom() {

    return (
        <>
            <img src='/images/Point/custom.png' style={{width: '100%', marginTop: '168px'}} />
            <Nav />
        </>
    )
}

export default RoomCustom;