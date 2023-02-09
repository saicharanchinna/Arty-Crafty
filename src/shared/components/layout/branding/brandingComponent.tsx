import React from 'react';
import './brandingComponent.scss';
import { ImageConfig } from "../../../../constants";
import { Link } from "react-router-dom";
import { CommonService } from "../../../services";

export interface BrandingComponentProps {
}

const BrandingComponent = (props: BrandingComponentProps) => {

    return (
        <Link className='logo-container' to={CommonService._routeConfig.HomeRoute()}>
            <img src={ImageConfig.Logo} className='logo'/>
        </Link>
    )

};

export default BrandingComponent;
