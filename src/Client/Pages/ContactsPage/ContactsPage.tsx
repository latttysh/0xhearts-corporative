import React, { FunctionComponent } from 'react';
import s from "./ContactsPage.module.scss"
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
interface OwnProps {}

type Props = OwnProps;

const ContactsPage: FunctionComponent<Props> = (props) => {
  const { t } = useTranslation();

  const onLinkClick = (link:string) => {
    const a = document.createElement("a")
    a.href = link
    a.target = "_blank"
    a.click()
  }

  const navigate = useNavigate()
  return (
      <div className={s.contacts}>
        <div className={s.title}>
          {t("Контакты")}
        </div>
        <div className={s.block}>
          <div className={s.item}>
            <div className={s.item_title}>
              {t("Сотрудничество")}
            </div>
            <div className={s.description}>
              <span className={s.underline} onClick={()=>navigate("/send")}>{t("Начать проект")}</span>
              <span className={s.underline} onClick={()=>onLinkClick("https://t.me/manager0xhearts")}>{t("Написать в Telegram")}</span>
              <span onClick={()=>onLinkClick("mailto:hello@0xhearts.com")}>hello@0xhearts.com</span>
            </div>
          </div>
          <div className={s.item}>
            <div className={s.item_title}>
              {t("Вакансии")}
            </div>
            <div className={s.description} onClick={()=>onLinkClick("mailto:job@0xhearts.coms.com")}>
              <span>job@0xhearts.com</span>
            </div>
          </div>
          <div className={s.item}>
            <div className={s.item_title}>
              {t("Адрес")}
            </div>
            <div className={s.description}>
              <span>{t("США, Россия, Франция, Германия, Интернет. Мы находимся везде.")}</span>
            </div>
          </div>
          <div className={s.item}>
            <div className={s.item_title}>
              {t("Соцсети")}
            </div>
            <div className={s.description}>
              <span className={s.underline} onClick={()=>onLinkClick("https://t.me/the0xhearts")}>{t("Telegram-канал")}</span>
              <span >YouTube</span>
              <span >Instagram</span>
              <span >Twitter</span>
              <span >Dribbble</span>
              <span className={s.underline}onClick={()=>onLinkClick("https://behance.com/0xhearts")}>Behance</span>
            </div>
          </div>

        </div>
      </div>
  );
};

export default ContactsPage;
