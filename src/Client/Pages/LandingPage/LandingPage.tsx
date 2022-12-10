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
import n26 from "../../Assets/img/n26.svg"

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
                                t("лендинги"),
                                t("анимации"),
                                t("веб-сайты"),
                                t("обложки"),
                                t("логотипы"),
                                t("телеграм-боты"),
                                t("афиши и проморолики"),
                                t("NFT-коллекции"),
                                t("интерфейсы"),
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    /></div>
                <div className={s.promo}>
                    <img src={animbg} alt="anim" className={s.animbg}/>
                    <div className={s.promo_text}>
                        {t("0xHearts — команда профессионалов в digital-сфере. Признанный опыт работы в N26, с RU и US артистами, а также с 250+ довольными заказчиками.")}
                    </div>
                </div>

            </section>
            <section className={s.services}>
                <ServiceItem title={t("Полный дизайн популярного крипто-казино crash.gg")} img={crashgg}/>
                <ServiceItem title={t("Сайты, лендинги, интерфейсы")} img={cryptox}/>
                <ServiceItem title={t("2D-Графика, обложки, афиши промо и анимации")}/>
                <ServiceItem title={t("3D-Графика, NFT, анимация и визуализация")}/>
                <ServiceItem title={t("Брендинг, упаковка продукта, фирменный стиль")}/>
            </section>

            <section className={s.done_projects}>
                <div className={s.done_projects_description}>{t("Проекты, компании, корпорации, исполнители, артисты, люди. Люди обращаются к нам, когда необходимо предоставить лучший результат и права на ошибку — нет.")}
                </div>
                <div className={s.block}>
                    <ServiceItem title={t("Полный дизайн сервиса для приёма SMS — smsverification.xyz")} img={smsverif}/>
                    <ServiceItem title={t("NFT-Коллекция Shiba Toys")}/>
                </div>
            </section>

            <section className={s.news}>
                <div className={s.header}>
                    <div className={s.title}>{t("Статьи от авторов 0xHearts")}</div>
                    <div className={s.more} onClick={() => navigate("/blog")}>{t("Открыть блог")}</div>
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
