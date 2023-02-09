import "./copyrightComponent.scss";

import React from 'react';

interface CopyRightComponentProps {

}

const CopyRightComponent = (props: CopyRightComponentProps) => {
    return (
        <div className="copy-right-component-wrapper">
            &copy; SDI Labs INC
        </div>
    )
};

export default CopyRightComponent;