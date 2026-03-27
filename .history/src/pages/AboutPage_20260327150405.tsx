// src/pages/AboutPage.tsx

import React from 'react';
// 假设 AboutPage.tsx 在 src/pages 目录下
import About from '../components/About';

const AboutPage: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',    // 水平居中
      justifyContent: 'center', // 垂直居中（如果需要全屏居中可加 minHeight）
      textAlign: 'center',     // 文字内容居中
      padding: '20px',         // 手机端左右留白，防止文字贴边
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <main style={{ maxWidth: '600px' }}> {/* 限制最大宽度，大屏下更好看 */}
        <h1 style={{ marginBottom: '10px' }}>
           About Me
        </h1>
        <div style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          color: '#ccc' // 稍微浅一点的颜色更有高级感
        }}>
          <p>
            This is the about page <br />
            where you can learn more about me.
          </p>
        </div>
      </main>
      <div style={{ width: '100%', marginTop: '30px' }}>
        <About />
      </div>
    </div>
  );
};
export default AboutPage;
