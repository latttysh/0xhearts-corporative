import React, {FunctionComponent} from 'react';
import s from "./landingpage.module.scss"
import animbg from "../../Assets/img/bg-anim.gif"
import ServiceItem from "../../Components/ServiceItem/ServiceItem";
import StoryItem from "../../Components/StoryiItem/StoryItem";
import crashgg from "../../Assets/img/crashGG.png"
import smsverif from "../../Assets/img/smsverefication.png"
import cryptox from "../../Assets/img/CRYPTOX.png"
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

import sl from "../../Assets/img/sl.png"
import yb from "../../Assets/img/yb.png"
import ac from "../../Assets/img/ac.png"
import nm from "../../Assets/img/nm.png"
import tt from "../../Assets/img/tt.png"
import vd from "../../Assets/img/vd.png"
import ai from "../../Assets/img/ai.png"
import zs from "../../Assets/img/zs.png"
import dv from "../../Assets/img/dv.png"
import ak from "../../Assets/img/ak.png"

interface OwnProps {
}

type Props = OwnProps;

const LandingPage: FunctionComponent<Props> = (props) => {

    const { t } = useTranslation();
    const arr = [
        t("лендинги"),
        t("анимации"),
        t("веб-сайты"),
        t("обложки"),
        t("логотипы"),
        t("телеграм-боты"),
        t("афиши и проморолики"),
        t("NFT-коллекции"),
        t("интерфейсы"),
    ]
    const navigate = useNavigate()
    // Лендинг
    return (
        <>
            <section className={s.hero}>
                <div className={s.hero_title}>
                    <div>{t("Мы делаем превосходные")}</div>
                <div className={s.scroll}>
                    <span>
                                           {arr.map((item)=>{
                                               return (<>
                                               {item} <br/>
                                               </>)
                                           })}
                    </span>

                </div>
                </div>
                <div className={s.promo}>
                    <img src={animbg} alt="anim" className={s.animbg}/>
                    <div className={s.promo_text}>
                        {t("0xHearts — команда профессионалов в digital-сфере. Признанный опыт работы в N26, с RU и US артистами, а также с 250+ довольными заказчиками.")}
                    </div>
                </div>

            </section>
            <section className={s.services}>
                <ServiceItem title={t("Полный дизайн популярного крипто-казино crash.gg")} img={crashgg} action={()=>navigate("/portfolio")}/>
                <ServiceItem title={t("Сайты, лендинги, интерфейсы")} img={cryptox} action={()=>navigate("/portfolio/works/sites")}/>
                <ServiceItem title={t("2D-Графика, обложки, афиши промо и анимации")} action={()=>navigate("/portfolio/2d_all")}/>
                <ServiceItem title={t("3D-Графика, NFT, анимация и визуализация")} action={()=>navigate("/portfolio/3d_all")}/>
                <ServiceItem title={t("Брендинг, упаковка продукта, фирменный стиль")} action={()=>navigate("/portfolio/branding_all")}/>
            </section>

            <section className={s.done_projects}>
                <div className={s.done_projects_description}>{t("Проекты, компании, корпорации, исполнители, артисты, люди. Люди обращаются к нам, когда необходимо предоставить лучший результат и права на ошибку — нет.")}
                </div>
                <div className={s.block}>
                    <ServiceItem title={t("Полный дизайн сервиса для приёма SMS — smsverification.xyz")} img={smsverif} action={()=>null}/>
                    <ServiceItem title={t("NFT-Коллекция Shiba Toys")} action={()=>null}/>
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

                <div className={s.workers}>
                    <div className={s.title}>We are in 0xHearts —</div>
                    <div className={s.worker}>
                        <img src={sl} alt="worker"/><span>Semyon Latysh,</span></div>
                    <div className={s.worker}>
                        <img src={sl} alt="worker"/><span>Vladislav Lavrentiev,</span></div>
                    <div className={s.worker}>
                        <img src={yb} alt="worker"/><span>Yuri Borodin,</span></div>
                    <div className={s.worker}>
                        <img src={ac} alt="worker"/><span>Artyom Chernykh,</span></div>
                    <div className={s.worker}>
                        <img src={nm} alt="worker"/><span>Nikita Maksimov,</span></div>
                    <div className={s.worker}>
                        <img src={tt} alt="worker"/><span>Tatiana Timokhova,</span></div>
                    <div className={s.worker}>
                        <img src={sl} alt="worker"/><span>Georgy Baykov,</span></div>
                    <div className={s.worker}>
                        <img src={vd} alt="worker"/><span>Vladislav Dudkin,</span></div>
                    <div className={s.worker}>
                        <img src={ai} alt="worker"/><span>Amir Ismagilov,</span></div>
                    <div className={s.worker}>
                        <img src={zs} alt="worker"/><span>Zakhar Samarchenko</span>
                    </div>
                    <div className={s.worker}>
                        <img src={sl} alt="worker"/><span>Daniel Volkov,</span></div>
                    <div className={s.worker}>
                        <img src={sl} alt="worker"/><span>Alexei Khondoev and </span></div>
                    <div className={s.worker}>
                        <img src={sl} alt="worker"/> <span> Maxim Rosochkin.</span></div>
                </div>
            </section>


        </>
    );
};

export default LandingPage;
