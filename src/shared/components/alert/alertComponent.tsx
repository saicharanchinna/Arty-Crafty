import React from 'react';
import { ToastContainer } from "react-toastify";

interface AlertComponentProps {

}

const AlertComponent = (props: AlertComponentProps) => {
    return (
        <ToastContainer position="bottom-right"/>
    )
};

export default AlertComponent;
