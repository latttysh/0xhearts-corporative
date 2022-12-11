import React, { FunctionComponent } from 'react';
import s from "./StoryItem.module.scss"
import bg from "../../Assets/img/story_bg.png"
interface OwnProps {
    title: string
    category: string
    isMain: boolean
    image: string
}

type Props = OwnProps;

const StoryItem: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.story} style={props.isMain ? {backgroundImage: `url(${props.image})`, width:"40%"} : {backgroundImage: `url(${props.image})`, width:"30%"}}>
          <div className={s.title}>{props.title}</div>
          <div className={s.category}>{props.category}</div>
      </div>
  );
};

export default StoryItem;
