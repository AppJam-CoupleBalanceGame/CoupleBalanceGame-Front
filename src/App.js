import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import LoginPopup from './pages/LoginPopupPage';
import ProfileSetting from './pages/ProfileSettingPage';
import Profile from './pages/ProfilePage';
import CoupleInvite from './pages/CoupleInvitePage';
import BalanceGame from './pages/BalanceGamePage';
import BalanceGameTime from './pages/BalanceGameTime';
import PointPay from './pages/PointPayPage';
import Home from './pages/HomePage';
import HomeOrder from './pages/HomeOrderPage';
import HomeOrderFinish from './components/home/HomeOrderFinish';

function App() {
  return(
      <Router>
          <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/loginPopup" element={<LoginPopup />} />

              <Route path="/profile-setting" element={<ProfileSetting />} />
              <Route path='/profile' element={<Profile />} />
              
              <Route path="/couple-invite" element={<CoupleInvite />} />

              <Route path='/balance-game' element={<BalanceGame />} />
              <Route path='/balance-game-time' element={<BalanceGameTime />} />

              <Route path='/point-pay' element={<PointPay />} />

              <Route path='/home' element={<Home />} />
              <Route path='/home-order' element={<HomeOrder />} />
              <Route path='/home-order-finish' element={<HomeOrderFinish />} />
          </Routes>
      </Router>
  )
}

export default App;