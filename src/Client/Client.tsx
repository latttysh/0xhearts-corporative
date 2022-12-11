import React, {FunctionComponent} from 'react';
import {Route, Routes} from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import ContactsPage from "./Pages/ContactsPage/ContactsPage";
import PostPage from "./Pages/PostPage/PostPage";
import WorksPage from "./Pages/WorksPage/WorksPage";
import PrivacyFooter from "./Components/PrivacyFooter/PrivacyFooter";
import s from "../index.module.scss"
import PrivacyPage from "./Pages/PrivacyPage/PrivacyPage";

interface OwnProps {
}

type Props = OwnProps;

const Client: FunctionComponent<Props> = (props) => {

    return (
        <>
            <div className={s.inner}>
                <Header/>
                <Routes>
                    <Route path={"/"} element={<LandingPage/>}/>
                    <Route path={"/portfolio/:category"} element={<PortfolioPage/>}/>
                    <Route path={"/portfolio/works/:category"} element={<WorksPage/>}/>
                    <Route path={"/blog"} element={<BlogPage/>}/>
                    <Route path={"/contacts"} element={<ContactsPage/>}/>
                    <Route path={"/post/:id"} element={<PostPage/>}/>
                    <Route path={"/privacy"} element={<PrivacyPage/>}/>
                </Routes>
                <Footer/>
            </div>
           <div className={s.footer}>
               <PrivacyFooter/>
           </div>
        </>
    );
};

export default Client;
