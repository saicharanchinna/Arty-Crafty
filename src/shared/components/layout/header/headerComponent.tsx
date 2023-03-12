import React from 'react';
import './headerComponent.scss';
import BrandingComponent from "../branding/brandingComponent";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export interface HeaderComponentProps {
}

const HeaderComponent = (props: HeaderComponentProps) => {

    return (
        <div className='header-container'>
            <div className="branding-component">
                <BrandingComponent/>
            </div>
            <div className={'header-actions'}>
                <div className={'bag-icon-wrapper'}>
                    <div className={'bag-icon'}>
                        <ShoppingBagOutlinedIcon/>
                    </div>
                    <div className={'bag-icon-text'}>Bag</div>
                </div>
                <div className={'profile-icon-wrapper'}>
                    <div className={'profile-icon'}>
                        <AccountCircleOutlinedIcon/>
                    </div>
                    <div className={'profile-icon-text'}>Profile</div>
                </div>
            </div>
        </div>
    )

};

export default HeaderComponent;
