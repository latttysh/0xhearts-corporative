import React, { FunctionComponent } from 'react';
import s from "./PrivacyFooter.module.scss"
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
interface OwnProps {}

type Props = OwnProps;

const PrivacyFooter: FunctionComponent<Props> = (props) => {
    const navigate = useNavigate()
    const { t } = useTranslation();

    return (
      <div className={s.privacy_footer}>
          <div className={s.left}>
              <div className={s.item}>{t("Наш канал в Telegram")}</div>
              <div className={s.item}>Instagram</div>
              <div className={s.item}>Twitter</div>
              <div className={s.item}>Behance</div>
              <div className={s.item}>Dribbble</div>
              <div className={s.item}>GitHub</div>
              <div className={s.item} onClick={()=>navigate("/privacy")}>Privacy policy</div>
          </div>
          <div className={s.right}>
              <div className={s.item} >0xhearts.com, 2023</div>

          </div>
      </div>
  );
};

export default PrivacyFooter;
