import React from 'react';
// import '/Users/guoguo/Desktop/my-resume/src/homepage.css'; // 确保你有这个CSS文件来处理样式
// import BackgroundVideo from '/Users/guoguo/Desktop/my-resume/src/components/backgroundvideo';

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      <p>Welcome to my homepage!</p>
      <p>This is a testvideo!!!!</p>
      <div className="video-container">
        {/* <BackgroundVideo /> */}
      </div>
    </div>
  );
};

export default HomePage;
