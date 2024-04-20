import '../../styles/common/Style.css'
import splashStyle from '../../styles/splash/SplashPage.module.css'

import { useEffect } from 'react';

function Splash() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = '/login';
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={splashStyle['container']}>
            <div className={splashStyle['box']}>
                <p className={splashStyle['title']}>엘레강스 커플</p>
                <p className={splashStyle['subtitle']}>우리는 엘레강스한 지성인이다.</p>
            </div>
        </div>
    )
}

export default Splash;