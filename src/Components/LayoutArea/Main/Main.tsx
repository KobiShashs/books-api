import { SyntheticEvent, useState } from "react";
import "./Main.css";
import { Outlet } from "react-router-dom";
import Routing from "../Routing/Routing";

function Main(): JSX.Element {

    return (
        <div className="Main">

            <Outlet />
            <Routing/>

        
        </div>
    );
}

export default Main;
