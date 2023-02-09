import React from 'react';
import './headerComponent.scss';
import BrandingComponent from "../branding/brandingComponent";

export interface HeaderComponentProps {
}

const HeaderComponent = (props: HeaderComponentProps) => {

    return (
        <div className='header'>
            <div className="header-options">
                <BrandingComponent/>
            </div>
        </div>
    )

};

export default HeaderComponent;
