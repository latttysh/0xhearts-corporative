import React, { FunctionComponent } from 'react';
import s from "./serviceitem.module.scss"
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
interface OwnProps {
    title: string
    img? :string
    action: ()=>void
}

type Props = OwnProps;

const ServiceItem: FunctionComponent<Props> = (props) => {
    const navigate = useNavigate()
    const { t } = useTranslation();

  return (
      <div className={s.service}>
          {props.img &&  <img src={props.img} alt="bg" className={s.bg}/>}
          <div className={s.service_text}>
              {props.title}
          </div>
          <SecondaryButton title={t("Смотреть")} action={()=>props.action()}/>

      </div>
  );
};

export default ServiceItem;
