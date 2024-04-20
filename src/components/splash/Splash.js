import '../../styles/common/Style.css'
import splashStyle from '../../styles/splash/SplashPage.module.css'

function Splash() {
    return (
        <div className={splashStyle['container']}>
            <div className={splashStyle['box']}>
                <p className={splashStyle['title']}>엘레강스 커플</p>
                <p className={splashStyle['subtitle']}>하나. 우리는 엘레강스한 지성인이다.</p>
            </div>
        </div>
    )
}

export default Splash;