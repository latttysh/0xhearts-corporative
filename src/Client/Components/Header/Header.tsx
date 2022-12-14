import React, { FunctionComponent, useState } from 'react';
import s from './header.module.scss';
import { ReactComponent as Logotype } from '../../Assets/img/logo.svg';
import { ReactComponent as USA } from '../../Assets/img/usa.svg';
import { ReactComponent as RU } from '../../Assets/img/ru.svg';

import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {useTranslation} from "react-i18next";
import {set} from "react-hook-form";
import {HashLink} from "react-router-hash-link";

interface OwnProps {}

type Props = OwnProps;


const Header: FunctionComponent<Props> = (props) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const changeLanguage = ()=>{
    if (i18n.language === "ru") {
      i18n.changeLanguage("en")
    } else {
      i18n.changeLanguage("ru")
    }
  }

  return (
    <div className={s.header}>
      <div className={s.menu}>
        <NavLink to={'/'}>
          <div className={s.logotype}>
            <Logotype />
          </div>
        </NavLink>

        <div className={nav ? `${s.navigation} ${s.active}` : s.navigation} >
          <HashLink smooth to="/#services" onClick={()=>setNav(false)}>
            <div className={s.navigation_item}>{t("Наши работы")}</div>
          </HashLink>
          <NavLink to={'/blog'} onClick={()=>setNav(false)}>
            <div className={s.navigation_item}>{t("Блог")}</div>
          </NavLink>
          <HashLink smooth to="/#workers" onClick={()=>setNav(false)}>
            <div className={s.navigation_item}>{t("О нас")}</div>
          </HashLink>
          <NavLink to={'/contacts'} onClick={()=>setNav(false)}>
            <div className={s.navigation_item}>{t("Контакты")}</div>
          </NavLink>
        </div>
      </div>
      <div className={s.actions}>
        <div className={s.language}  onClick={changeLanguage}>
          <div className={s.language_flag}>
            {
              i18n.language === 'ru' ? <USA/> : <RU/>
            }
          </div>
          <div className={s.language_text} >{t("Switch to English")}</div>
        </div>
        <PrimaryButton title={t("Начать проект")} action={() => navigate('/send')} />
        <div onClick={() => setNav(!nav)} className={s.burger_menu}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
