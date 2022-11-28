import React, { FunctionComponent } from 'react';
import s from "./landingpage.module.scss"
import {ReactComponent as Logotype} from "../../Assets/img/logo.svg";
import {ReactComponent as USA} from "../../Assets/img/usa.svg";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import animbg from "../../Assets/img/bg-anim.gif"
import Typewriter from 'typewriter-effect';
import ServiceItem from "../../Components/ServiceItem/ServiceItem";

interface OwnProps {}

type Props = OwnProps;

const LandingPage: FunctionComponent<Props> = (props) => {
  // Лендинг
  return (
      <>
          <section className={s.hero}>
              <div className={s.hero_title}><div>Мы делаем превосходные  </div><Typewriter
                  options={{
                      strings: ['лендинги', 'сервисы', "обложки", "оформления"],
                      autoStart: true,
                      loop: true,
                  }}
              /></div>
              <div className={s.promo}>
                  <img src={animbg} alt="anim" className={s.animbg}/>
                  <div className={s.promo_text}>
                      0xHearts — команда профессионалов в digital-сфере. Признанный опыт <br/>
                      работы в N26, с RU и US артистами, а также с 250+ довольными заказчиками.
                  </div>
              </div>

          </section>
          <section className={s.services}>
              <ServiceItem/>
              <ServiceItem/>
              <ServiceItem/>
              <ServiceItem/>
              <ServiceItem/>
          </section>

          <section className={s.done_projects}>
              <div className={s.done_projects_description}>Проекты, компании, корпорации, исполнители, артисты, люди. Люди обращаются к нам, когда необходимо предоставить лучший результат и права на ошибку — нет.</div>
              <div className={s.block}>
                  <ServiceItem/>
                  <ServiceItem/>
              </div>
          </section>

          <section className={s.news}>
              <div className={s.header}>
                  <div className={s.title}>Статьи от авторов 0xHearts</div>
                  <div className={s.more}>Открыть блог</div>
              </div>
              <div className={s.blocks}>

              </div>
          </section>


      </>
  );
};

export default LandingPage;
