import React, { FunctionComponent } from 'react';
import s from "./Footer.module.scss"
import arrow from "../../Assets/img/arrow.svg"
import stroke from "../../Assets/img/bg-stroke.png"

import tg from "../../Assets/img/tg.svg"
import mail from "../../Assets/img/mail.svg"
interface OwnProps {}

type Props = OwnProps;

const Footer: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.footer}>
          <div className={s.send}>
              <div className={s.header}>
                  <div className={s.text}>
                      <div className={s.title}>Давайте работать над вашим проектом</div>
                      <div className={s.description}>Заполните онлайн-бриф с описанием вашей задачи или
                          свяжитесь с нами через Telegram, почту и другие контакты</div>
                  </div>
                  <img src={arrow} alt="arrow"/>
              </div>
              <div className={s.form}>
                  <div className={s.light}></div>
                  <form>
                      <div className={s.client_info}>
                          <input type="text" placeholder={"Как к вам обращаться?"}/>
                          <input type="text" placeholder={"Контактные данные"}/>
                      </div>
                      <textarea placeholder={"Описание вашей задачи"} />
                      <button>Отправить нам</button>
                  </form>

              </div>
          </div>
          <div className={s.stats}>
              <div className={s.block}>
                  <div className={s.item}>
                      <div className={s.value}>250+</div>
                      <div className={s.description}>выполненных заказов
                          и проектов</div>
                  </div>
                  <div className={s.item}>
                      <div className={s.value}>20+</div>
                      <div className={s.description}>сфер и направлений
                          агентства</div>
                  </div>
                  <div className={s.item}>
                      <div className={s.value}>5k+</div>
                      <div className={s.description}>проведенных часов
                          в “рабочем хаосе”</div>
                  </div>
                  <div className={s.item}>
                      <div className={s.value}>7+</div>
                      <div className={s.description}>чашек кофе мы
                          пьём каждый день</div>
                  </div>
              </div>
              <div className={s.tg}>
                  <img src={tg} alt="telegram"/>
                  <div className={s.text}>tg: <span>@manager0xhearts</span></div>
              </div>
              <div className={s.mail}>
                  <img src={mail} alt="telegram"/>
                  <div className={s.text}>mail: <span>hello@0xhearts.com</span></div>
              </div>
          </div>
      </div>
  );
};

export default Footer;
