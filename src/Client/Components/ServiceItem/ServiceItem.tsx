import React, { FunctionComponent } from 'react';
import s from "./serviceitem.module.scss"
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
interface OwnProps {
    title: string
    img? :string
    action: ()=>void
    video?: boolean
    button?: string
}

type Props = OwnProps;

const ServiceItem: FunctionComponent<Props> = (props) => {
    const navigate = useNavigate()
    const { t } = useTranslation();

  return (
      <div className={s.service}>
          {
              props.video ?
                  <video controls={false} autoPlay={true} loop={true} muted={true} className={s.bg}>
                      <source src={props.img} type="video/mp4" />
                  </video>
                  : props.img && <img src={props.img} alt="bg" className={s.bg}/>

          }
          <div className={s.service_text}>
              {props.title}
          </div>
          <SecondaryButton title={props.button ? t(props.button) : t("Смотреть")} action={()=>props.action()}/>

      </div>
  );
};

export default ServiceItem;
