import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/SplashPage';
import Login from './pages/LoginPage';
import LoginPopup from './pages/LoginPopupPage';
import ProfileSetting from './pages/ProfileSettingPage';
import Profile from './pages/ProfilePage';
import CoupleInvite from './pages/CoupleInvitePage';
import BalanceGame from './pages/BalanceGamePage';
import BalanceGameTime from './pages/BalanceGameTime';

function App() {
  return(
      <Router>
          <Routes>
              <Route path="/" element={<Splash />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/loginPopup" element={<LoginPopup />} />

              <Route path="/profile-setting" element={<ProfileSetting />} />
              <Route path='/profile' element={<Profile />} />
              
              <Route path="/couple-invite" element={<CoupleInvite />} />

              <Route path='/balance-game' element={<BalanceGame />} />
              <Route path='/balance-game-time' element={<BalanceGameTime />} />
          </Routes>
      </Router>
  )
}

export default App;