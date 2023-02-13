import React, {useEffect, useRef} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {IRootReducerState} from "../../store/reducers";
import {CommonService} from "../../shared/services";
import {logout} from "../../store/actions/account.action";
import CategoryTemplateComponent from "../../shared/components/category-template/CategoryTemplateComponent";
export interface AppLayoutProps {

}

const AppLayout = (props: AppLayoutProps) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const {token} = useSelector((state: IRootReducerState) => state.account);
    const logoutSubscriptionRef = useRef(true);

    useEffect(() => {
        if (!token) {
            navigate('/register?returnUrl=' + encodeURIComponent(location.pathname + location.search));
        }
    }, [token, navigate, location]);

    useEffect(() => {
        CommonService._communications.logoutSubject.subscribe(() => {
            CommonService._alert.showToast('Session expired, Please register', 'info');
            if (!logoutSubscriptionRef.current) return null;
            dispatch(logout());
        });
        return () => { logoutSubscriptionRef.current = false }
    }, [dispatch]);

    return (
        <div className="app-layout">
           <Outlet/>
        </div>
    );

}


export default AppLayout;




