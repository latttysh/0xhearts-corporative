import React, { FunctionComponent } from 'react';
import s from "./ContactsPage.module.scss"
import {useTranslation} from "react-i18next";
interface OwnProps {}

type Props = OwnProps;

const ContactsPage: FunctionComponent<Props> = (props) => {
  const { t } = useTranslation();

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
              <span className={s.underline}>{t("Начать проект")}</span>
              <span className={s.underline}>{t("Написать в Telegram")}</span>
              <span>hello@0xhearts.com</span>
            </div>
          </div>
          <div className={s.item}>
            <div className={s.item_title}>
              {t("Вакансии")}
            </div>
            <div className={s.description}>
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
              <span className={s.underline}>{t("Telegram-канал")}</span>
              <span className={s.underline}>YouTube</span>
              <span className={s.underline}>Instagram</span>
              <span className={s.underline}>Twitter</span>
              <span className={s.underline}>Dribbble</span>
              <span className={s.underline}>Behance</span>
            </div>
          </div>

        </div>
      </div>
  );
};

export default ContactsPage;
