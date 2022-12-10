import React, {FunctionComponent} from 'react';
import s from "./landingpage.module.scss"
import animbg from "../../Assets/img/bg-anim.gif"
import Typewriter from 'typewriter-effect';
import ServiceItem from "../../Components/ServiceItem/ServiceItem";
import StoryItem from "../../Components/StoryiItem/StoryItem";
import crashgg from "../../Assets/img/crashGG.png"
import smsverif from "../../Assets/img/smsverefication.png"
import cryptox from "../../Assets/img/CRYPTOX.png"
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

interface OwnProps {
}

type Props = OwnProps;

const LandingPage: FunctionComponent<Props> = (props) => {
    const { t } = useTranslation();

    const navigate = useNavigate()
    // Лендинг
    return (
        <>
            <section className={s.hero}>
                <div className={s.hero_title}>
                    <div>{t("Мы делаем превосходные")}</div>
                    <Typewriter
                        options={{
                            strings: [
                                "лендинги",
                                "анимации",
                                "веб-сайты",
                                "обложки",
                                "логотипы",
                                "телеграм-боты",
                                "афиши и проморолики",
                                "NFT-коллекции",
                                "интерфейсы",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    /></div>
                <div className={s.promo}>
                    <img src={animbg} alt="anim" className={s.animbg}/>
                    <div className={s.promo_text}>
                        {t(" 0xHearts — команда профессионалов в digital-сфере. Признанный опыт работы в N26, с RU и US артистами, а также с 250+ довольными заказчиками.")}
                    </div>
                </div>

            </section>
            <section className={s.services}>
                <ServiceItem title={"Полный дизайн популярного\n" +
                    "крипто-казино crash.gg"} img={crashgg}/>
                <ServiceItem title={"Сайты, лендинги,\n" +
                    "интерфейсы"} img={cryptox}/>
                <ServiceItem title={"2D-Графика, обложки, афиши, \n" +
                    "промо и анимации"}/>
                <ServiceItem title={"3D-Графика, NFT, анимация и \n" +
                    "визуализация"}/>
                <ServiceItem title={"Брендинг, упаковка продукта, фирменный стиль"}/>
            </section>

            <section className={s.done_projects}>
                <div className={s.done_projects_description}>Проекты, компании, корпорации, исполнители, артисты, люди.
                    Люди обращаются к нам, когда необходимо предоставить лучший результат и права на ошибку — нет.
                </div>
                <div className={s.block}>
                    <ServiceItem title={"Полный дизайн сервиса для\n" +
                        "приёма SMS — smsverification.xyz"} img={smsverif}/>
                    <ServiceItem title={"NFT-Коллекция\n" +
                        "Shiba Toys"}/>
                </div>
            </section>

            <section className={s.news}>
                <div className={s.header}>
                    <div className={s.title}>Статьи от авторов 0xHearts</div>
                    <div className={s.more} onClick={() => navigate("/blog")}>Открыть блог</div>
                </div>
                <div className={s.blocks}>
                    <StoryItem title={"Всё, что вы должны знать когда работаете со студиями и агентствами"}
                               category={"Личный опыт"} isMain={true}/>
                    <StoryItem title={"Всё, что вы должны знать когда работаете со студиями и агентствами"}
                               category={"Личный опыт"} isMain={false}/>
                    <StoryItem title={"Всё, что вы должны знать когда работаете со студиями и агентствами"}
                               category={"Личный опыт"} isMain={false}/>
                </div>
            </section>


            <section>
                РАБОТНИКИ
            </section>


        </>
    );
};

export default LandingPage;
