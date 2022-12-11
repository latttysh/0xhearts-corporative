import React, { FunctionComponent } from 'react';
import s from "./Footer.module.scss"
import arrow from "../../Assets/img/arrow.svg"
import stroke from "../../Assets/img/bg-stroke.png"

import tg from "../../Assets/img/tg.svg"
import mail from "../../Assets/img/mail.svg"
import {useTranslation} from "react-i18next";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../../Redux/store";
import {sendForm} from "../../../Redux/Slices/Form/FormAsyncActions";
import ThanksModal from "../ThanksModal/ThanksModal";
interface OwnProps {}
type Inputs = {
    name: string,
    contact: string,
    description: string
};
type Props = OwnProps;

const Footer: FunctionComponent<Props> = (props) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch()

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        dispatch(sendForm(data))
        setIsSend(true)
    };

    const [isSend, setIsSend] = React.useState(false)

  return (
      <div className={s.footer}>
          {isSend && <ThanksModal close={()=>setIsSend(false)}/>
          }
          <div className={s.send}>
              <div className={s.header}>
                  <div className={s.text}>
                      <div className={s.title}>{t("Давайте работать над вашим проектом")}</div>
                      <div className={s.description}>{t("Заполните онлайн-бриф с описанием вашей задачи или свяжитесь с нами через Telegram, почту и другие контакты")}</div>
                  </div>
                  <img src={arrow} alt="arrow"/>
              </div>
              <div className={s.form}>
                  <div className={s.light}></div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                      <div className={s.client_info}>
                          <input type="text" required placeholder={`${t("Как к вам обращаться?")}`} {...register("name")}/>
                          <input type="text" required placeholder={`${t("Контактные данные")}`} {...register("contact")}/>
                      </div>
                      <textarea required placeholder={`${t("Описание вашей задачи")}`} {...register("description")}/>
                      <button type={"submit"}>{t("Отправить нам")}</button>
                  </form>
              </div>
          </div>
          <div className={s.stats}>
              <div className={s.block}>
                  <div className={s.item}>
                      <div className={s.value}>250+</div>
                      <div className={s.description}>{t("выполненных заказов и проектов")}</div>
                  </div>
                  <div className={s.item}>
                      <div className={s.value}>20+</div>
                      <div className={s.description}>{t("сфер и направлений агентства")}</div>
                  </div>
                  <div className={s.item}>
                      <div className={s.value}>5k+</div>
                      <div className={s.description}>{t("проведенных часов в “рабочем хаосе”")}</div>
                  </div>
                  <div className={s.item}>
                      <div className={s.value}>7+</div>
                      <div className={s.description}>{t("чашек кофе мы пьём каждый день")}</div>
                  </div>
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

export default Footer;
