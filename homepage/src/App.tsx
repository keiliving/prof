import React from 'react';
import logo from './logo.svg';
import Footer from './component/templete/footer'
import Profile from './component/templete/sidebar'
import Tabs from './component/templete/tabs'
import './index.css';

import './App.css';

function App() {
  return (
    <div className="main-container">
      <div className="main-content">
        <Tabs />
        
        <div className="side-bar">
          <Profile />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
