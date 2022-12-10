import React, { FunctionComponent, useState } from 'react';
import s from './header.module.scss';
import { ReactComponent as Logotype } from '../../Assets/img/logo.svg';
import { ReactComponent as USA } from '../../Assets/img/usa.svg';
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {useTranslation} from "react-i18next";

interface OwnProps {}

type Props = OwnProps;


const Header: FunctionComponent<Props> = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  return (
    <div className={s.header}>
      <div className={s.menu}>
        <NavLink to={'/'}>
          <div className={s.logotype}>
            <Logotype />
          </div>
        </NavLink>

        <div className={nav ? `${s.navigation} ${s.active}` : s.navigation} >
          <NavLink to={'/portfolio'}>
            <div className={s.navigation_item}>{t("Наши работы")}</div>
          </NavLink>
          <NavLink to={'/blog'}>
            <div className={s.navigation_item}>{t("Блог")}</div>
          </NavLink>
          <NavLink to={'/about'}>
            <div className={s.navigation_item}>{t("О нас")}</div>
          </NavLink>
          <NavLink to={'/contacts'}>
            <div className={s.navigation_item}>{t("Контакты")}</div>
          </NavLink>
        </div>
      </div>
      <div className={s.actions}>
        <div className={s.language}>
          <div className={s.language_flag}>
            <USA />
          </div>
          <div className={s.language_text}>switch language</div>
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
