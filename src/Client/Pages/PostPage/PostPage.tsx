import React, { FunctionComponent } from 'react';
import s from "./PostPage.module.scss"
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../../Redux/store";
import {getPost} from "../../../Redux/Slices/BlogSlice/BlogAsyncActions";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import {useSelector} from "react-redux";
interface OwnProps {}

type Props = OwnProps;

const PostPage: FunctionComponent<Props> = (props) => {
    const blogState = useSelector((state:any) => state.blogSlice);

    const params = useParams()
    const dispatch = useAppDispatch()
    React.useEffect(()=> {
        params.id && dispatch(getPost(params.id))
    },[])
  return (
      <>
          <ReactMarkdown children={blogState.post.text} remarkPlugins={[remarkGfm]} />
      </>
  );
};

export default PostPage;
