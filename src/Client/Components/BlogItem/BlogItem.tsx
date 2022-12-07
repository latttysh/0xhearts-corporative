import React, { FunctionComponent } from 'react';
import s from "./BlogItem.module.scss"
import img from "../../Assets/img/story_bg.png"
import avatar from "../../Assets/img/avatar.png"
interface OwnProps {}

type Props = OwnProps;

const BlogItem: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.item} style={{backgroundImage: `url(${img})`}}>
        <div className={s.category}>ЛИЧНЫЙ ОПЫТ</div>
        <div className={s.title}>Всё, что вы должны знать когда работаете со студиями</div>
        <div className={s.author}>
          <div className={s.profile}>
              <img src={avatar} alt="avatar"/>
              <div className={s.name}>Владислав Лаврентьев</div>
          </div>
            <div className={s.dot}></div>
            <div className={s.time}>Ноя 29, 2022</div>
        </div>
      </div>
  );
};

export default BlogItem;
