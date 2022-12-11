import React, { FunctionComponent } from 'react';
import s from "./PrivacyFooter.module.scss"
import {useNavigate} from "react-router-dom";
interface OwnProps {}

type Props = OwnProps;

const PrivacyFooter: FunctionComponent<Props> = (props) => {
    const navigate = useNavigate()
  return (
      <div className={s.privacy_footer}>
          <div className={s.left}>
              <div className={s.item}>Наш канал в Telegram</div>
              <div className={s.item}>Instagram</div>
              <div className={s.item}>Twitter</div>
              <div className={s.item}>Behance</div>
              <div className={s.item}>Dribbble</div>
              <div className={s.item}>GitHub</div>
          </div>
          <div className={s.right}>
              <div className={s.item} onClick={()=>navigate("/privacy")}>0xhearts.com, 2023</div>

          </div>
      </div>
  );
};

export default PrivacyFooter;
