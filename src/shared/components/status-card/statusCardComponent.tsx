import "./statusCardComponent.scss";

import React, {CSSProperties} from 'react';

interface StatusCardComponentProps {
    type?: "success" | "warning" | "error" | "info" | "default";
    wrap?: boolean;
    styles?: CSSProperties;
}

const StatusCardComponent = (props: React.PropsWithChildren<StatusCardComponentProps>) => {

    const { children, styles } = props;
    let {type, wrap} = props;
    if (!type) type = "default";
    if (!wrap) wrap = false;

    return (
        <div className="status-card-wrapper" style={styles}>
            <div className={`status-card ${type} ${wrap && 'wrap'}`}>
                {children}
            </div>
        </div>
    );
};

export default StatusCardComponent;