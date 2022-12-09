import React, { FunctionComponent } from 'react';
import s from "./WorkItem.module.scss"
import workpng from "../../Assets/img/work.png"
interface OwnProps {}

type Props = OwnProps;

const WorkItem: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.work}>
          <img src={workpng} className={s.img} alt="work"/>
          <div className={s.title}>
              Scally Milano - Codeine 
          </div>
          <div className={s.author}>ЮРИЙ БОРОДИН</div>
      </div>
  );
};

export default WorkItem;
