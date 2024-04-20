import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';

function App() {
  return(
      <Router>
          <Routes>
              <Route path="/" element={<SplashPage />}/>
          </Routes>
      </Router>
  )
}

export default App;