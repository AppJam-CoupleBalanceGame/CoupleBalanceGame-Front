import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import LoginPopup from './pages/LoginPopupPage';
import ProfileSetting from './pages/ProfileSettingPage';
import Profile from './pages/ProfilePage';
import ProfileChange from './pages/ProfileChangePage';
import CoupleInvite from './pages/CoupleInvitePage';
import BalanceGame from './pages/BalanceGamePage';
import BalanceGameTime from './pages/BalanceGameTime';
import BalanceGameBefore from './pages/BalanceGameBeforePage';
import PointPay from './pages/PointPayPage';
import Home from './pages/HomePage';
import HomeOrder from './pages/HomeOrderPage';
import HomeOrderFinish from './pages/HomeOrderFinishPage';
import BalanceGameNum from './pages/BalanceGameNumPage';
import RoomCustom from './pages/RoomCustomPage';
import RoomCustomChange from './pages/RoomChangePage';
import Bell from './pages/BellPage';
import CoupleJoin from './pages/CoupleJoinPage';
import Point from './pages/PointPage';
import Point2 from  './pages/PointPage2';
import PointChange from './pages/PointChangePage';
import RoomChange from './pages/RoomChangePage';

function App() {
  return(
    <Router>
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/loginPopup" element={<LoginPopup />} />

          <Route path="/profile-setting" element={<ProfileSetting />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile-change' element={<ProfileChange />} />
          
          <Route path="/couple-invite" element={<CoupleInvite />} />
          <Route path='/couple-join' element={<CoupleJoin />} />

          <Route path='/balance-game' element={<BalanceGame />} />
          <Route path='/balance-game-time' element={<BalanceGameTime />} />
          <Route path='/balance-game-before' element={<BalanceGameBefore />} />
          <Route path='/balance-game-num' element={<BalanceGameNum />} />

          <Route path='/point-pay' element={<PointPay />} />

          <Route path='/home' element={<Home />} />
          <Route path='/home-order' element={<HomeOrder />} />
          <Route path='/home-order-finish' element={<HomeOrderFinish />} />

          <Route path='/room-custom' element={<RoomCustom/>} />
          <Route path='/room-change-custom' element={<RoomCustomChange />} />

          <Route path='/bell' element={<Bell />} />

          <Route path='/point' element={<Point />}/>
          <Route path='/point2' element={<Point2 />}/>

          <Route path='/point-change' element={<PointChange />} />
          <Route path='/room-change' element={<RoomChange />} />
      </Routes>
  </Router>
  )
}

export default App;