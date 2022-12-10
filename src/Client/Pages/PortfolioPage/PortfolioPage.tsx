import React, { FunctionComponent } from 'react';
import s from "./PortfolioPage.module.scss"
import artist from "../../Assets/img/artist.png"
import WorkItem from "../../Components/WorkItem/WorkItem";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";
import PortfolioItem from "../../Components/PortfolioItem/PortfolioItem";
import ServiceItem from "../../Components/ServiceItem/ServiceItem";
import {useTranslation} from "react-i18next";

interface OwnProps {}

type Props = OwnProps;

const PortfolioPage: FunctionComponent<Props> = (props) => {
    const { t } = useTranslation();

  return (
      <div className={s.portfolio}>
          <div className={s.title}>{t("Обложки, рисунки, афиши, промо и анимации")}</div>
          <div className={s.promo}>
              <div className={s.info}>
                  <div className={s.description}>
                      {t("В команде 0xHearts работают сразу несколько дизайнеров, которые занимаются этими направлениями.")}
                  </div>
                  <div className={s.artists}>
                      <img src={artist} alt="artist"/>
                      <img src={artist} alt="artist"/>
                      <img src={artist} alt="artist"/>
                      <img src={artist} alt="artist"/>
                  </div>
              </div>

          </div>

          <div className={s.title_block}>{t("Обложки")}</div>
          <div className={s.block}>
              <div className={s.items}>
                  <WorkItem link={"1"} img={"1"} title={"1"} author={"1"}/>

              </div>
              <div className={s.buttons}>
                  <SecondaryButton title={t("Больше работ")} action={()=>console.log(123)}/>
                  <PrimaryButton title={t("Начать проект")} action={()=>console.log(123)}/>
              </div>
          </div>

          <div className={s.title_block}>{t("Афиши, промо и анимации")}</div>
          <div className={s.block}>
              <div className={s.items}>
                  <WorkItem link={"1"} img={"1"} title={"1"} author={"1"}/>

              </div>
              <div className={s.buttons}>
                  <SecondaryButton title={t("Больше работ")} action={()=>console.log(123)}/>
                  <PrimaryButton title={t("Начать проект")} action={()=>console.log(123)}/>
              </div>
          </div>

          <div className={s.block_service}>
                  <ServiceItem title={t("2D-Графика, обложки, афиши промо и анимации")}/>
                  <ServiceItem title={t("3D-Графика, NFT, анимация и визуализация")}/>
                  <ServiceItem title={t("Брендинг, упаковка продукта, фирменный стиль")}/>
          </div>
      </div>
  );
};

export default PortfolioPage;
