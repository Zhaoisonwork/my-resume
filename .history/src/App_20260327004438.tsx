import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '/Users/guoguo/Desktop/my-resume/src/pages/HomePage';
import AboutPage from '/Users/guoguo/Desktop/my-resume/src/pages/AboutPage';
import ContactPage from '/Users/guoguo/Desktop/my-resume/src/pages/ContactPage';
import Header from '/Users/guoguo/Desktop/my-resume/src/components/Header';
import Footer from '/Users/guoguo/Desktop/my-resume/src/components/Footer';
import LanguageSwitcher from '/Users/guoguo/Desktop/my-resume/src/components/LanguageSwitcher';
import ChatBox from './components/chatbox';
import '/Users/guoguo/Desktop/my-resume/src/App.css';
import '/Users/guoguo/Desktop/my-resume/src/i18n';
import OpeningAnimation from '/Users/guoguo/Desktop/my-resume/src/components/openinganimation';

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

  return (
    <div className="app-container">
      <div className="starry-sky">
        {/* 星光效果容器 */}
      </div>
      <Router>
        <OpeningAnimation />
        <Header />
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<HomePage />} />
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
