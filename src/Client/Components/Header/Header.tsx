import React, {FunctionComponent} from 'react';
import s from "./header.module.scss"
import {ReactComponent as Logotype} from "../../Assets/img/logo.svg";
import {ReactComponent as USA} from "../../Assets/img/usa.svg";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import {NavLink, useNavigate} from "react-router-dom";

interface OwnProps {
}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {

    const navigate = useNavigate()

    return (
        <div className={s.header}>
            <div className={s.menu}>
                <NavLink to={"/"}>
                    <div className={s.logotype}>
                        <Logotype/>
                    </div>
                </NavLink>

                <div className={s.navigation}>
                    <NavLink to={"/portfolio"}>
                        <div className={s.navigation_item}>Наши работы</div>
                    </NavLink>
                    <NavLink to={"/blog"}>
                        <div className={s.navigation_item}>Блог</div>
                    </NavLink>
                    <NavLink to={"/about"}>
                        <div className={s.navigation_item}>О нас</div>
                    </NavLink>
                    <NavLink to={"/contacts"}>
                        <div className={s.navigation_item}>Контакты</div>
                    </NavLink>

                </div>
            </div>
            <div className={s.actions}>
                <div className={s.language}>
                    <div className={s.language_flag}>
                        <USA/>
                    </div>
                    <div className={s.language_text}>switch language</div>
                </div>
                <PrimaryButton title={"Начать проект"} action={() => navigate("/send")}/>
            </div>
        </div>
    );
};

export default Header;
