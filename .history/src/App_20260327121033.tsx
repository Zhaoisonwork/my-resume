import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import HomePage from '/Users/guoguo/Desktop/my-resume/src/pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
// import LanguageSwitcher from '/Users/guoguo/Desktop/my-resume/src/components/LanguageSwitcher';
// import ChatBox from './components/chatbox';
import './App.css';
import './i18n';
// import OpeningAnimation from '/Users/guoguo/Desktop/my-resume/src/components/openinganimation';

const App: React.FC = () => {
  useEffect(() => {
    createStarrySky();
  }, []);

  const createStarrySky = () => {
    const starrySky = document.querySelector('.starry-sky');
    const starsCount = 100; // 星星数量

    for (let i = 0; i < starsCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // 随机设置星星的位置
      star.style.top = Math.random() * 100 + 'vh';
      star.style.left = Math.random() * 100 + 'vw';
      
      // 随机设置星星的动画延迟
      star.style.animationDelay = Math.random() * 7 + 's';
      
      if (starrySky) {
        starrySky.appendChild(star);
      }
    }
  };
// 1. 自动判断环境：GitHub Actions/Pages 环境下 process.env.NODE_ENV 会是 'production'
  const basename = process.env.NODE_ENV === 'production' ? '/my-resume' : '';
  return (
    <div className="app-container">
      <div className="starry-sky">
        {/* 星光效果容器 */}
      </div>
      <Router basename=>
        {/* <OpeningAnimation /> */}
        <Header />
        {/* <LanguageSwitcher /> */}
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/chatbox" element={<ChatBox />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
