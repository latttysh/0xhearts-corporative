import React, { FunctionComponent } from 'react';
import s from "./serviceitem.module.scss"
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import {useNavigate} from "react-router-dom";
interface OwnProps {
    title: string
    img? :string
}

type Props = OwnProps;

const ServiceItem: FunctionComponent<Props> = (props) => {
    const navigate = useNavigate()

  return (
      <div className={s.service}>
          {props.img &&  <img src={props.img} alt="bg" className={s.bg}/>}
          <div className={s.service_text}>
              {props.title}
          </div>
          <SecondaryButton title={"Смотреть"} action={()=>navigate("/portfolio")}/>

      </div>
  );
};

export default ServiceItem;
