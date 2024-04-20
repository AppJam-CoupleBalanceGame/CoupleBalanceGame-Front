import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import LoginPopupPage from './pages/LoginPopupPage';
import ProfileSetting from './pages/ProfileSettingPage';
import CoupleInvite from './pages/CoupleInvitePage';
import BalanceGame from './pages/BalanceGamePage';

function App() {
  return(
      <Router>
          <Routes>
              <Route path="/" element={<SplashPage />}/>
              <Route path="/login" element={<LoginPage />}/>
              <Route path="/loginPopup" element={<LoginPopupPage />} />
              <Route path="/profile-setting" element={<ProfileSetting />} />
              <Route path="/couple-invite" element={<CoupleInvite />} />
              <Route path='/balance-game' element={<BalanceGame />} />
          </Routes>
      </Router>
  )
}

export default App;