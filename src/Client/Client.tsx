import React, {FunctionComponent} from 'react';
import {Route, Routes} from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Header from "./Components/Header/Header";

interface OwnProps {
}

type Props = OwnProps;

const Client: FunctionComponent<Props> = (props) => {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<LandingPage/>}/>
            </Routes>
        </>
    );
};

export default Client;
