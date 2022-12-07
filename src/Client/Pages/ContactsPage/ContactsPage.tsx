import React, { FunctionComponent } from 'react';
import s from "./ContactsPage.module.scss"
interface OwnProps {}

type Props = OwnProps;

const ContactsPage: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.contacts}>
        <div className={s.title}>
          Контакты
        </div>
        <div className={s.block}>
          <div className={s.item}>
            <div className={s.item_title}>
              Сотрудничество
            </div>
            <div className={s.description}>
              <span className={s.underline}>Начать проект</span>
              <span className={s.underline}>Написать в Telegram</span>
              <span>hello@0xhearts.com</span>
            </div>
          </div>
          <div className={s.item}>
            <div className={s.item_title}>
              Вакансии
            </div>
            <div className={s.description}>
              <span>job@0xhearts.com</span>
            </div>
          </div>
          <div className={s.item}>
            <div className={s.item_title}>
              Адрес
            </div>
            <div className={s.description}>
              <span>США, Россия, Франция, Германия, Интернет. Мы находимся везде.</span>
            </div>
          </div>
          <div className={s.item}>
            <div className={s.item_title}>
              Соцсети
            </div>
            <div className={s.description}>
              <span className={s.underline}>Telegram-канал</span>
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
