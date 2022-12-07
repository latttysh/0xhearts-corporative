import React, {FunctionComponent} from 'react';
import {Route, Routes} from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import ContactsPage from "./Pages/ContactsPage/ContactsPage";

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
                <Route path={"/blog"} element={<BlogPage/>}/>
                <Route path={"/contacts"} element={<ContactsPage/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default Client;
