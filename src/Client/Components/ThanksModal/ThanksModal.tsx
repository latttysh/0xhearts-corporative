import React, {FunctionComponent} from 'react';
import s from "./ThanksModal.module.scss"
import tg from "../../Assets/img/tg.svg";
import mail from "../../Assets/img/mail.svg";
import close from "../../Assets/img/close.svg"

interface OwnProps {
    close: ()=>void
}

type Props = OwnProps;

const ThanksModal: FunctionComponent<Props> = (props) => {

    return (
        <div className={s.wrapper}>
            <div className={s.modal}>
                <div className={s.header}>
                    <div className={s.title}>Спасибо! Менеджер скоро
                        свяжется с вами
                    </div>
                    <div className={s.close}>
                        <img src={close} alt="close" onClick={()=>props.close()}/>
                    </div>
                </div>
                <div className={s.subtitle}>
                    Вы также можете написать нам в Telegram
                    и на электронную почту
                </div>

                <div className={s.tg}>
                    <img src={tg} alt="telegram"/>
                    <div className={s.text}>tg: <span>@manager0xhearts</span></div>
                </div>
                <div className={s.mail}>
                    <img src={mail} alt="telegram"/>
                    <div className={s.text}>mail: <span>hello@0xhearts.com</span></div>
                </div>
            </div>
        </div>
    );
};

export default ThanksModal;
