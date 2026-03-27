import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation } from 'react-i18next';
import '/Users/guoguo/Desktop/my-resume/src/Header.css';

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className="header">
      <div className="header-container">
      {/* <img src={} alt="Logo" /> */}
      <h2>{t("Welcome to my website!")}</h2>
      <h1>{t("I'm Zhaoguo Wei")}</h1>
      <nav>
        <ul>
        {/* <Link to="/">Homepage</Link> | 
        <Link to="/about">About me</Link> | <Link to="/contact">Contact</Link>  */}
        {/* | <Link to="/chatbox">ChatBox</Link> */}
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
