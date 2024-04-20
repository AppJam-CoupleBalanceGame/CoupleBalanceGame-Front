import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import LoginPopupPage from './pages/LoginPopupPage';
import ProfileSetting from './components/profile/ProfileSetting';

function App() {
  return(
      <Router>
          <Routes>
              <Route path="/" element={<SplashPage />}/>
              <Route path="/login" element={<LoginPage />}/>
              <Route path="/loginPopup" element={<LoginPopupPage />} />
              <Route path="/profile-setting" element={<ProfileSetting />} />
          </Routes>
      </Router>
  )
}

export default App;