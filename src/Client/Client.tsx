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

interface OwnProps {
}

type Props = OwnProps;

const Client: FunctionComponent<Props> = (props) => {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<LandingPage/>}/>
                <Route path={"/portfolio"} element={<PortfolioPage/>}/>
                <Route path={"/portfolio/:category"} element={<WorksPage/>}/>
                <Route path={"/blog"} element={<BlogPage/>}/>
                <Route path={"/contacts"} element={<ContactsPage/>}/>
                <Route path={"/post/:id"} element={<PostPage/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default Client;
