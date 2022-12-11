import React, {FunctionComponent} from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../../Redux/store";
import {createPath} from "react-router-dom";
import {createPost} from "../../../Redux/Slices/BlogSlice/BlogAsyncActions";
import {createWork} from "../../../Redux/Slices/PortfolioSlice/PortfolioAsyncActions";

interface OwnProps {
}

type Inputs = {
    title: string,
    text: string,
    author: string,
    cover_img: string,
    category: string,
    link: string

};


type Props = OwnProps;

const AdminPanelPage: FunctionComponent<Props> = (props) => {
    const dispatch = useAppDispatch()
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        data["text"] = text
        console.log(data)
        dispatch(createPost(data))
    };

    const onSubmit2: SubmitHandler<Inputs> = data => {
        dispatch(createWork(data))
    };
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    const [text, setText] = React.useState("")
// Finish!
    function handleEditorChange(item: any) {
        setText(item.text)
    }

    return (
        <>
            <div >Добавить статью</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <MdEditor style={{height: '500px'}} renderHTML={text => mdParser.render(text)}
                          onChange={handleEditorChange}/>
                <input type="text" placeholder={"title"} {...register("title")}/>
                <input type="text" placeholder={"author"} {...register("author")}/>
                <input type="text" placeholder={"cover_img"} {...register("cover_img")}/>
                <input type="text" placeholder={"category"} {...register("category")}/>
                <button>GO</button>
            </form>

            <div>Добавить Работу</div>
            <form onSubmit={handleSubmit(onSubmit2)}>
                <input type="text" placeholder={"title"} {...register("title")}/>
                <input type="text" placeholder={"author"} {...register("author")}/>
                <input type="text" placeholder={"cover_img"} {...register("cover_img")}/>
                <input type="text" placeholder={"link"} {...register("link")}/>
                <input type="text" placeholder={"category"} {...register("category")}/>
                <button>GO</button>
            </form>

        </>
    );
};

export default AdminPanelPage;
