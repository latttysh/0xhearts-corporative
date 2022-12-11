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
import branding from "../../Assets/img/branding.jpg"
import { HashLink } from 'react-router-hash-link';
import cat from "../../Assets/img/shiba.webp"

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
{/*                    <video src={animbg} height={"100%"} width={"100%"} className={s.animbg}>
                        <source src={"../../Assets/img/anim_bg.mp4"} type={"video/mp4"}/>
                    </video>*/}
                    <video controls={false} autoPlay={true} loop={true} muted={true} className={s.animbg}>
                    <source src="/Videos/anim_bg.mp4" type="video/mp4" />
                    </video>
                    <div className={s.promo_text}>
                        {t("0xHearts — команда профессионалов в digital-сфере. Признанный опыт работы в N26, с RU и US артистами, а также с 250+ довольными заказчиками.")}
                    </div>
                </div>

            </section>
            <section className={s.services}>
                <ServiceItem title={t("Полный дизайн сервиса для приёма SMS — smsverification.xyz")} img={smsverif} action={()=>{
                    const a = document.createElement("a")
                    a.href = "https://www.behance.net/gallery/158746783/SMSVerification-Website-Branding"
                    a.target = "_blank"
                    a.click()
                }}/>

                <ServiceItem title={t("Сайты, лендинги, интерфейсы")} video={false} img={cryptox} action={()=>navigate("/portfolio/works/sites")}/>
                <ServiceItem img={"/Videos/covers.mp4"} video={true} title={t("2D-Графика, обложки, афиши промо и анимации")} action={()=>navigate("/portfolio/2d_all")}/>
                <ServiceItem img={"/Videos/3d.mp4"} video={true} title={t("3D-Графика, NFT, анимация и визуализация")} action={()=>navigate("/portfolio/3d_all")}/>
                <ServiceItem title={t("Брендинг, упаковка продукта, фирменный стиль")} img={branding} video={false} action={()=>navigate("/portfolio/branding_all")}/>
            </section>

            <section className={s.done_projects}>
                <div className={s.done_projects_description}>{t("Проекты, компании, корпорации, исполнители, артисты, люди. Люди обращаются к нам, когда необходимо предоставить лучший результат и права на ошибку — нет.")}
                </div>
                <div className={s.block}>
                    <ServiceItem title={t("Полный дизайн популярного крипто-казино crash.gg")} button={"Available soon"} video={false} img={crashgg} action={()=>null}/>

                    <ServiceItem title={t("NFT-Коллекция Shiba Toys")} video={false} img={cat} action={()=>null}/>
                </div>
            </section>

            <section className={s.news}>
                <div className={s.header}>
                    <div className={s.title}>{t("Статьи от авторов 0xHearts")}</div>
                    <div className={s.more} onClick={() => navigate("/blog")}>{t("Открыть блог")}</div>
                </div>
                <div className={s.blocks}>
                    <StoryItem  image={"https://i.imgur.com/BH6KSQS.jpg"} title={t("Блог в стадии разработки")}
                               category={t("Разработка")} isMain={true}/>
                    <StoryItem image={"https://i.imgur.com/BH6KSQS.jpg"}  title={t("Блог в стадии разработки")}
                               category={t("Разработка")} isMain={false}/>
                    <StoryItem  image={"https://i.imgur.com/BH6KSQS.jpg"} title={t("Блог в стадии разработки")}
                                   category={t("Разработка")} isMain={false}/>
                </div>
            </section>


            <section id={"workers"}>

                <div className={s.workers}>
                    <div className={s.title}>We are in 0xHearts —</div>
                    <div className={s.worker}>
                        <img src={sl} alt="worker"/><span>{t("Семён Латыш")},</span></div>
                    <div className={s.worker}>
                        <img src={sl} alt="worker"/><span>{t("Владислав Лаврентьев")},</span></div>
                    <div className={s.worker}>
                        <img src={yb} alt="worker"/><span>{t("Юрий Бородин")},</span></div>
                    <div className={s.worker}>
                        <img src={ac} alt="worker"/><span>{t("Артём Черных")},</span></div>
                    <div className={s.worker}>
                        <img src={nm} alt="worker"/><span>{t("Никита Максимов")},</span></div>
                    <div className={s.worker}>
                        <img src={tt} alt="worker"/><span>{t("Татьяна Тимохова")},</span></div>
                    <div className={s.worker}>
                        <img src={sl} alt="worker"/><span>{t("Георгий Байков")},</span></div>
                    <div className={s.worker}>
                        <img src={vd} alt="worker"/><span>{t("Владислав Дудкин")},</span></div>
                    <div className={s.worker}>
                        <img src={ai} alt="worker"/><span>{t("Амир Исмагилов")},</span></div>
                    <div className={s.worker}>
                        <img src={zs} alt="worker"/><span>{t("Захар Самарченко")}</span>
                    </div>
                    <div className={s.worker}>
                        <img src={sl} alt="worker"/><span>{t("Даниэль Волков")},</span></div>
                    <div className={s.worker}>
                        <img src={sl} alt="worker"/><span>{t("Алексей Хондоев и")} </span></div>
                    <div className={s.worker}>
                        <img src={sl} alt="worker"/> <span>{t("Максим Розочкин.")}</span></div>
                </div>
            </section>


        </>
    );
};

export default LandingPage;
