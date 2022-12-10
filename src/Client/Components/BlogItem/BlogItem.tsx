import React, { FunctionComponent } from 'react';
import s from "./BlogItem.module.scss"
import img from "../../Assets/img/story_bg.png"
import avatar from "../../Assets/img/avatar.png"
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'
import remarkGfm from "remark-gfm";

interface OwnProps {
    category: string
    title: string
    author: string
    time: string
    img: string
}

type Props = OwnProps;

const BlogItem: FunctionComponent<Props> = (props) => {

    return (
      <div className={s.item} style={{backgroundImage: `url(${props.img})`}}>
        <div className={s.category}>{props.category}</div>
        <div className={s.title}>{props.title}</div>
        <div className={s.author}>
          <div className={s.profile}>
              <img src={avatar} alt="avatar"/>
              <div className={s.name}>{props.author}</div>
          </div>
            <div className={s.dot}></div>
            <div className={s.time}>{props.time}</div>
        </div>
      </div>
  );
};

export default BlogItem;
