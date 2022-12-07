import React, { FunctionComponent } from 'react';
import s from "./PortfolioPage.module.scss"
import artist from "../../Assets/img/artist.png"
import WorkItem from "../../Components/WorkItem/WorkItem";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";
import PortfolioItem from "../../Components/PortfolioItem/PortfolioItem";
import ServiceItem from "../../Components/ServiceItem/ServiceItem";

interface OwnProps {}

type Props = OwnProps;

const PortfolioPage: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.portfolio}>
          <div className={s.title}>Обложки, рисунки, афиши, промо и анимации</div>
          <div className={s.promo}>
              <div className={s.info}>
                  <div className={s.description}>
                      В команде 0xHearts работают сразу несколько дизайнеров,
                      которые занимаются этими направлениями.
                  </div>
                  <div className={s.artists}>
                      <img src={artist} alt="artist"/>
                      <img src={artist} alt="artist"/>
                      <img src={artist} alt="artist"/>
                      <img src={artist} alt="artist"/>
                  </div>
              </div>

          </div>

          <div className={s.title_block}>Обложки</div>
          <div className={s.block}>
              <div className={s.items}>
                  <WorkItem/>
                  <WorkItem/>
                  <WorkItem/>
                  <WorkItem/>
                  <WorkItem/>
                  <WorkItem/>
                  <WorkItem/>
                  <WorkItem/>
              </div>
              <div className={s.buttons}>
                  <SecondaryButton title={"Больше работ"} action={()=>console.log(123)}/>
                  <PrimaryButton title={"Начать проект"} action={()=>console.log(123)}/>
              </div>
          </div>

          <div className={s.title_block}>Афиши, промо и анимации</div>
          <div className={s.block}>
              <div className={s.items}>
                  <WorkItem/>
                  <WorkItem/>
                  <WorkItem/>
                  <WorkItem/>
                  <WorkItem/>
                  <WorkItem/>
                  <WorkItem/>
                  <WorkItem/>
              </div>
              <div className={s.buttons}>
                  <SecondaryButton title={"Больше работ"} action={()=>console.log(123)}/>
                  <PrimaryButton title={"Начать проект"} action={()=>console.log(123)}/>
              </div>
          </div>

          <div className={s.block_service}>
                  <ServiceItem title={"2D-Графика, обложки, афиши, \n" +
                      "промо и анимации"}/>
                  <ServiceItem title={"3D-Графика, NFT, анимация и \n" +
                      "визуализация"}/>
                  <ServiceItem title={"Брендинг, упаковка продукта, фирменный стиль"}/>
          </div>
      </div>
  );
};

export default PortfolioPage;
