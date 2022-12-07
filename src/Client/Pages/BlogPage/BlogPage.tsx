import React, { FunctionComponent } from 'react';
import s from "./BlogPage.module.scss"
import BlogItem from "../../Components/BlogItem/BlogItem";
import PopularNewsItem from "../../Components/PopularNewsItem/PopularNewsItem";
interface OwnProps {}

type Props = OwnProps;

const BlogPage: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.blog}>
        <div className={s.title}>Блог</div>
        <div className={s.block}>
          <div className={s.news}>
              <BlogItem/>
              <BlogItem/>
              <BlogItem/>
              <BlogItem/>
              <BlogItem/>
              <BlogItem/>
              <BlogItem/>
          </div>
          <div className={s.popular}>
            <div className={s.popular_title}>Популярные статьи</div>
              <div className={s.popular_block}>
                  <PopularNewsItem/>
                  <PopularNewsItem/>
                  <PopularNewsItem/>
                  <PopularNewsItem/>
                  <PopularNewsItem/>
                  <PopularNewsItem/>
              </div>
          </div>
        </div>
      </div>
  );
};

export default BlogPage;
