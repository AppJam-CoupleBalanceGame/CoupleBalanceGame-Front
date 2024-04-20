import '../../styles/common/Style.css';
import style from '../../styles/profile/ProfileSetting.module.css';

import Header from '../common/Header';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

function ProfileSetting() {
    const [isBirthCalendarOpen, setIsBirthCalendarOpen] = useState(false);
    const [birthDate, setBirthDate] = useState(null);
    
    const [isStartDateCalendarOpen, setIsStartDateCalendarOpen] = useState(false);
    const [startDate, setStartDate] = useState(null);

    const handleBirthClick = () => {
        setIsBirthCalendarOpen(true);
        setIsStartDateCalendarOpen(false);
    }

    const handleStartDateClick = () => {
        setIsStartDateCalendarOpen(true);
        setIsBirthCalendarOpen(false);
    }

    const handleBirthDateChange = (date) => {
        setBirthDate(date);
        setIsBirthCalendarOpen(false);
    }

    const handleStartDateChange = (date) => {
        setStartDate(date);
        setIsStartDateCalendarOpen(false);
    }

    return (
        <>
            <Header text={'프로필 설정'} />
            <div className={style['container']}>
                <div className={style['textContainer']}>
                    <div className={style['nickName']}>
                        <p>별명</p>
                        <input type='text' placeholder='별명을 입력해주세요.'/>
                    </div>

                    <div className={style['birth']} onClick={handleBirthClick}>
                        <p>생년월일</p>
                        <input type='text' placeholder='생년월일을 입력해주세요.' value={birthDate instanceof Date ? birthDate.toLocaleDateString() : ''} readOnly/>
                    </div>

                    {isBirthCalendarOpen && (
                        <div className={style['calendarContainer']}>
                            <Calendar onChange={handleBirthDateChange} value={birthDate} />
                        </div>
                    )}

                    <div className={style['date']} onClick={handleStartDateClick}>
                        <p>사귀기 시작한 날짜</p>
                        <input type='text' placeholder='날짜를 입력해주세요.' value={startDate instanceof Date ? startDate.toLocaleDateString() : ''} readOnly/>
                    </div>

                    {isStartDateCalendarOpen && (
                        <div className={style['calendarContainer']}>
                            <Calendar onChange={handleStartDateChange} value={startDate} />
                        </div>
                    )}
                </div>

                <div className={style['buttonContainer']}>
                    <button>확인</button>
                </div>
            </div>
        </>
    )
}

export default ProfileSetting;