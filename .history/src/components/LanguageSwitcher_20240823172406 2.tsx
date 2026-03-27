// src/components/LanguageSwitcher.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '/Users/guoguo/Desktop/my-resume/src/LanguageSwitcher.css'; // 根据你的项目结构调整路径

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // 关闭下拉列表
  };

  return (
    <div className="language-switcher">
      <button onClick={toggleDropdown}>
        {i18n.language.toUpperCase()} ▼
      </button>
      {isOpen && (
        <ul className="language-list">
          <li onClick={() => changeLanguage('en')}>English</li>
          <li onClick={() => changeLanguage('de')}>Deutsch</li>
          <li onClick={() => changeLanguage('ch')}>中文</li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
