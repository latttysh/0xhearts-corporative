import React, { FunctionComponent } from 'react';
import {Route, Routes} from "react-router-dom";
import AdminPanelPage from "./Pages/AdminPanelPage/AdminPanelPage";

interface OwnProps {}

type Props = OwnProps;

const Admin: FunctionComponent<Props> = (props) => {

    //Логика для админа
    return (
        <Routes>
            <Route path={"/panel"} element={<AdminPanelPage/>}/>
        </Routes>
    );
};

export default Admin;
