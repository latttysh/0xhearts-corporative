import React, { FunctionComponent } from 'react';
import s from "./BlogPage.module.scss"
import BlogItem from "../../Components/BlogItem/BlogItem";
import PopularNewsItem from "../../Components/PopularNewsItem/PopularNewsItem";
import {useAppDispatch} from "../../../Redux/store";
import {getPosts} from "../../../Redux/Slices/BlogSlice/BlogAsyncActions";
import {useSelector} from "react-redux";
import {blogType} from "../../../Redux/Slices/BlogSlice/BlogSliceTypes";
interface OwnProps {}

type Props = OwnProps;

const BlogPage: FunctionComponent<Props> = (props) => {
    const blogState = useSelector((state:any) => state.blogSlice);
    const dispatch = useAppDispatch()

    React.useEffect(()=> {
        dispatch(getPosts())
    },[])

  return (
      <div className={s.blog}>
        <div className={s.title}>Блог</div>
        <div className={s.block}>
          <div className={s.news}>
              {
                  blogState.posts.map((post: blogType) => {
                      return <BlogItem title={post.title} author={post.author} category={post.category} time={post.createdAt}/>
                  })
              }
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
