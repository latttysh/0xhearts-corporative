import React, { FunctionComponent } from 'react';
import s from "./WorkItem.module.scss"
import workpng from "../../Assets/img/work.png"
interface OwnProps {
    img: string
    title: string
    author: string
    link: string
}

type Props = OwnProps;

const WorkItem: FunctionComponent<Props> = (props) => {

  return (
      <a className={s.work} href={props.link} target={"_blank"}>
          <img src={props.img} className={s.img} alt="work"/>
          <div className={s.title}>
              {props.title}
          </div>
          <div className={s.author}>{props.author}</div>
      </a>
  );
};

export default WorkItem;
