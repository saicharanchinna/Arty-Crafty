import * as React from "react";
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import DashboardComponent from "../screens/dashboard/DashboardComponent";

export interface NavigatorProps {

}

const Navigator = (props: NavigatorProps) => {
    return (
        <>
            <Routes>
                <Route element={<DashboardComponent/>}>

                </Route>
            </Routes>
        </>
    )
}

export default Navigator;