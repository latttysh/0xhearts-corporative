import React from 'react';
import {Route, Routes} from "react-router-dom";
import Client from "./Client/Client";
import Admin from "./Admin/Admin";
import "normalize.css"
import './i18n/config';
import s from "./index.module.scss"

function App() {
    return (
        <div className={s.app}>
            <div className={s.container}>
                <Routes>
                    <Route path={"/*"} element={<Client/>}/>
                    <Route path={"/sdfdsfsdfsdfsadf0ow3hnfo9c2b39foubjbwec/*"} element={<Admin/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
