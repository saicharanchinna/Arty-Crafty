import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import NotFoundScreen from "../screens/not-found/notFoundScreen";
import AppLayout from "../layouts/app-layout/appLayout";
import AuthLayout from "../layouts/auth-layout/authLayout";
import HomeScreen from "../screens/home/HomeScreen";
import {
    HOME_ROUTE,
    NOT_FOUND_ROUTE,
    REGISTER_ROUTE, TEST_ROUTE,
} from "../constants/RoutesConfig";
import TestScreen from "../screens/test/testScreen";

export interface NavigatorProps {

}

const Navigator = (props: NavigatorProps) => {

    return (
        <>
            <Routes>
                <Route element={<AppLayout/>}>
                </Route>
                <Route path={TEST_ROUTE} element={<TestScreen/>}/>
                <Route element={<AuthLayout/>}>
                    {/*<Route path={REGISTER_ROUTE} element={<RegisterScreen/>}/>*/}
                </Route>
                <Route index element={<HomeScreen/>}/>
                <Route path={HOME_ROUTE} element={<HomeScreen/>}/>
                <Route path="*" element={<Navigate to={NOT_FOUND_ROUTE}/>}/>
            </Routes>
        </>
    )
};

export default Navigator;



