import React, { FunctionComponent } from 'react';
import s from "./serviceitem.module.scss"
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
interface OwnProps {}

type Props = OwnProps;

const ServiceItem: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.service}>
          <div className={s.service_text}>
              2D-Графика, обложки, афиши,
              промо и анимации
          </div>
          <SecondaryButton title={"Смотреть"} action={()=>console.log(132)}/>

      </div>
  );
};

export default ServiceItem;
