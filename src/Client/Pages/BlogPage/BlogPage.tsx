import React, { FunctionComponent } from 'react';
import s from "./BlogPage.module.scss"
import BlogItem from "../../Components/BlogItem/BlogItem";
import PopularNewsItem from "../../Components/PopularNewsItem/PopularNewsItem";
import {useAppDispatch} from "../../../Redux/store";
import {getPosts} from "../../../Redux/Slices/BlogSlice/BlogAsyncActions";
import {useSelector} from "react-redux";
import {blogType} from "../../../Redux/Slices/BlogSlice/BlogSliceTypes";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
interface OwnProps {}

type Props = OwnProps;

const BlogPage: FunctionComponent<Props> = (props) => {
    const blogState = useSelector((state:any) => state.blogSlice);
    const dispatch = useAppDispatch()
    const { t } = useTranslation();
    React.useEffect(()=> {
        dispatch(getPosts())
    },[])

  return (
      <div className={s.blog}>
        <div className={s.title}>{t("Блог")}</div>
        <div className={s.block}>
          <div className={s.news}>
{/*              {
                  blogState.posts.map((post: blogType) => {
                      return (
                      <NavLink to={`/post/${post.id}`}>
                          <BlogItem title={post.title} author={post.author} category={post.category} time={post.createdAt} img={post.cover_img}/>
                      </NavLink>)
                  })
              }*/}
              <BlogItem title={"Блог в стадии разработки"} author={"Блог в стадии разработки"} category={"Блог в стадии разработки"} time={"11.12.2022"} img={"https://i.imgur.com/BH6KSQS.jpg"}/>

          </div>
          <div className={s.popular}>
            <div className={s.popular_title}>{t("Популярные статьи")}</div>
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
