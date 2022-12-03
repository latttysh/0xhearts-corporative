import React, {FunctionComponent} from 'react';
import {Route, Routes} from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";

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
            </Routes>
            <Footer/>
        </>
    );
};

export default Client;
