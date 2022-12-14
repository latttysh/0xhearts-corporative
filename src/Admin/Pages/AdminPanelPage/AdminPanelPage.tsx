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
import s from "./AdminPanel.module.scss"
interface OwnProps {
}

type Inputs = {
    title: string,
    text: string,
    author: string,
    cover_img: string,
    category: string,
    link: string
    is_top:boolean

};


type Props = OwnProps;

const AdminPanelPage: FunctionComponent<Props> = (props) => {
    const dispatch = useAppDispatch()
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        data["text"] = text
        console.log(data)
        dispatch(createPost(data)).then((res:any) => window.location.reload())
    };

    const onSubmit2: SubmitHandler<Inputs> = data => {
        console.log(data)
        dispatch(createWork(data)).then((res:any) => window.location.reload())
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
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <MdEditor style={{height: '500px'}} renderHTML={text => mdParser.render(text)}
                          onChange={handleEditorChange}/>
                <input type="text" placeholder={"Название"} {...register("title")}/>
                <input type="text" placeholder={"Автор"} {...register("author")}/>
                <input type="text" placeholder={"Обложка"} {...register("cover_img")}/>
                <input type="text" placeholder={"Категория"} {...register("category")}/>
                <button>GO</button>
            </form>

            <div>Добавить Работу</div>
            <form onSubmit={handleSubmit(onSubmit2)} className={s.form}>
                <select {...register("category")} placeholder={"Категория"}>
                    <option value="Covers">Обложки</option>
                    <option value="Posters">Афиши</option>
                    <option value="Promos_and_animations">Промо и анимации</option>
                    <option value="2D-Graphics">2D-Графика</option>
                    <option value="3D-Graphics">3D-Графика</option>
                    <option value="NFT">NFT</option>
                    <option value="Animation_and_other">Анимация и прочее</option>
                    <option value="Sites">Сайты</option>
                    <option value="Landings">Лендинги</option>
                    <option value="Interfaces">Интерфейсы</option>
                    <option value="Branding_and_logos">Брендинг и логотипы</option>
                </select>
                <input type="text" placeholder={"Название"} {...register("title")}/>
                <input type="text" placeholder={"Автор"} {...register("author")}/>
                <input type="text" placeholder={"Обложка"} {...register("cover_img")}/>
                <input type="text" placeholder={"Ссылка на исходник"} {...register("link")}/>

                <span>Включить в топ 8?</span>
                <input type="checkbox"  {...register("is_top")}/>
                <button>GO</button>
            </form>

        </>
    );
};

export default AdminPanelPage;
