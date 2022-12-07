import React, { FunctionComponent } from 'react';
import s from "./PopularNewsItem.module.scss"
import img from "../../Assets/img/story_bg.png"
interface OwnProps {}

type Props = OwnProps;

const PopularNewsItem: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.item}>
          <div className={s.cover}>
              <img src={img} alt="img"/>
          </div>
          <div className={s.title}>Всё, что вы должны знать когда работаете со студиями</div>
      </div>
  );
};

export default PopularNewsItem;
