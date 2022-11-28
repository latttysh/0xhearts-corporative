import React from 'react';
import {Route, Routes} from "react-router-dom";
import Client from "./Client/Client";
import Admin from "./Admin/Admin";
import "normalize.css"
import s from "./index.module.scss"

function App() {
    return (
        <div className={s.app}>
            <div className={s.container}>
                <Routes>
                    <Route path={"/"} element={<Client/>}/>
                    <Route path={"/admin/*"} element={<Admin/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
