import React from 'react';
import {useTranslation} from 'react-i18next';

const About: React.FC = () => {
    const { t } = useTranslation();
    return (
      <div>
        <section id="about">
        <h2>{t("This is ME !")}</h2>
        <ul>
        <li>{t("I am a master student in computer science")}</li>
        <li>{t("lived in Germany for over 10 years")}</li>
        <li>{t("speak chinese, german and english (fluently or in other word: Sicher in Wort und Schrift)")}</li>
        {/* <li></li> */}
        </ul> 
        <></>
        </section>
        <section id="education">
          <h2>{t("Education")}</h2>
          <ul>
            <li>
              <h3>{t("Freie Universität Berlin")}</h3>
              <p>{t("M.Sc. Computer Science (Informatik) (2025 - now)")}</p>
              <p>{t("B.Sc. Computer Science (Informatik) (2022 - 2025)")}</p>
            </li>
            <li>
              <h3>{t("Friedrich Ebert Gymnasium")}</h3>
              <p>{t("Graduated in 2022")}</p>
            </li>
          </ul>
        </section>
        <section id="experience">
        <h2>{t("Work-experience")}</h2>
        <ul>
          <li>
            <h3>{t("Work student - SynTAGit")}</h3>
            <p>{t("(2024.Aug - 2025.Sep)")}</p>
          </li>
          <li>
            <h3>{t("Freelance Übersetzerin")}</h3>
            <p> {t("offering seamless translation in both directions.")}</p>
            <p>{t("(2020 - now)")}</p>
          </li>
          <li>
            <h3>{t("Freelance Illustrator")}</h3>
            <p>{t("Beemybox - Designed Landing page and product packaging")} </p>
            <p>{t("Yixue Bildungszentrum - Illustration greeting cards and book illustrations")}</p>
            <p>{t("(2019 - now)")}</p>
          </li>
        </ul>
      </section>
  
        <section id="projects">
          <h2>{t("Projects")}</h2>
          <ul>
            <li>
              <h3>{t("Projects in university")}</h3>
              {/* <h3>{t("Data Analysis with Python")}</h3>
              <p>{t("Object-Oriented Programming Project")}</p> */}
              <a href="https://github.com/Iamnotsnowwhite?tab=repositories">Have a look</a>
            </li>
            {/* <li>
              <h3>在线聊天室</h3>
              <p>一个基于WebSocket的实时聊天应用，支持多人聊天和私聊。</p>
              <a href="https://github.com/yourusername/chat-project">查看项目</a>
            </li> */}
          </ul>
        </section>
  
        <section id="skills">
          <h2>{t("Skills")}</h2>
          <ul>
            <li>{t("Programming Languages: JavaScript, TypeScript, Python, Java, C, Haskell")}</li>
            <li>{t("Front-End: React, HTML, CSS")}</li>
            <li>{t("Back-End: Node.js, Express, SQL")}</li>
            <li>{t("Tools: Git, Ticketsystem - Jira")}</li>
            <li>{t("Design: Flyer production, UI/UX Design")}</li>
            <li>{t("Illustration/Painting: More realistic style")}</li>
            <li>{t("Tools/Programs (Computer): Adobe Illustrator, Photoshop, InDesign, Blender")}</li>
            <li>{t("Tools/Programs (iPad): Procreate, Nomad")}</li>
          </ul>
        </section>
      </div>
    );
  };export default About;