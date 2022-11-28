import React, { FunctionComponent } from 'react';
import s from "./header.module.scss"
import {ReactComponent as Logotype} from "../../Assets/img/logo.svg";
import {ReactComponent as USA} from "../../Assets/img/usa.svg";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
interface OwnProps {}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.header}>
          <div className={s.menu}>
              <div className={s.logotype}>
                  <Logotype/>
              </div>
              <div className={s.navigation}>
                  <div className={s.navigation_item}>Наши работы</div>
                  <div className={s.navigation_item}>Блог</div>
                  <div className={s.navigation_item}>О нас</div>
                  <div className={s.navigation_item}>Контакты</div>
              </div>
          </div>
          <div className={s.actions}>
              <div className={s.language}>
                  <div className={s.language_flag}>
                      <USA/>
                  </div>
                  <div className={s.language_text}>switch language</div>
              </div>
              <PrimaryButton title={"Начать проект"} action={()=>console.log(132)}/>
          </div>
      </div>
  );
};

export default Header;
