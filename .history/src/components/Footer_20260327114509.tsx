import React from 'react';
import { useTranslation} from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();
  return (
    <footer>
      <p>{t("© Zhao's Portfolio")}</p>
      {/* <nav>
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
      </nav> */}
    </footer>
  );
}

export default Footer;
