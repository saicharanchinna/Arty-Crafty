import React, {useCallback, useEffect, useState} from 'react';
import {CommonService} from "../../services";
import {Misc} from "../../../constants";
import {logout, setLoggedInUserData, setLoggedInUserToken} from "../../../store/actions/account.action";
import {useDispatch} from "react-redux";
import {IAPIResponseType} from "../../models/api.model";
// import LoaderComponent from '../loader/loaderComponent';
import {useSearchParams} from "react-router-dom";

interface CheckLoginComponentProps {

}

const CheckLoginComponent = (props: React.PropsWithChildren<CheckLoginComponentProps>) => {

    const {children} = props;
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const checkLogin = useCallback(() => {
        let token = searchParams.get('token');
        if (token === null){
            token = CommonService._localStorage.getItem(Misc.LOCAL_STORAGE_JWT_TOKEN);
        }
        if (token) {
            setIsLoading(true);
            CommonService._account.CheckLoginAPICall(token)
                .then((response: IAPIResponseType<any>) => {
                    setIsLoading(false);
                    setIsLoaded(true);
                    // @ts-ignore
                    dispatch(setLoggedInUserToken(response.data.token));
                    dispatch(setLoggedInUserData(response.data));
                })
                .catch(() => {
                    dispatch(logout());
                    setIsLoading(false);
                    setIsLoaded(true);
                })
        } else {
            setIsLoading(false);
            setIsLoaded(true);
        }
    }, [dispatch,searchParams]);

    useEffect(() => {
        checkLogin();
    }, [checkLogin]);

    return (
        <>
            {(isLoading && !isLoaded) && <>
                {/*<LoaderComponent>loading ....</LoaderComponent>*/}
            </>}
            {isLoaded && children}
        </>
    )
};

export default CheckLoginComponent;